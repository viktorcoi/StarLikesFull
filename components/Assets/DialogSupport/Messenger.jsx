import { Component, createRef } from 'react'
import styles from '/public/assets/css/MainPages.module.css'
import { Formik } from "formik";
import * as Yup from "yup";
import AddFile from '../Blocks/AddFile';
import BetweenBlock from '../Blocks/BetweenBlock';
import TextArea from '../Inputs/TextArea';
import AddImageDialog from './AddImageDialog';
import Message from './Message';
import ImageDialog from './ImageDialog';

class Messenger extends Component {

    constructor(props) {
        super(props);
        this.messagesEnd = createRef(null)
        this.state = {
            id: "",
            textMessage: "",
            message: [],
            date: new Date().toLocaleTimeString(),
            files: [],
            editMessage: false
        };
    }
       
    getFiles (files) {
        this.setState({ files: files })
    } 

    onRemove = (i) => {
        this.setState({...this.state,
            files: this.state.files.filter((file, id) => id !== i)
        })
    }

    Scroll = () => {
        this.messagesEnd.current.scrollIntoView({ behavior: "smooth" })
    }

    render() {

        const schema = Yup.object({
            message: Yup.string().required("Поле не может быть пустым!"),
        });

        return (
            <Formik
                initialValues={{ 
                    message: this.state.textMessage,
                }}
                enableReinitialize={true}
                validationSchema={schema}
                onSubmit = {(values) => {console.log(values)}}>
                {({ errors, handleSubmit, handleChange, values }) => {

                const AddMessage = () => {
                    if (values.message.length > 0) {
                        if (this.state.editMessage == false) {
                            const time = this.state.date;
                            const message = values.message;
                            const files = this.state.files
                            this.setState({...this.state,
                                message: [...this.state.message, { time, message, files}],
                            })
                        } else {
                            let editing = this.state.message.slice()
                            editing[this.state.id].message = values.message
                            editing[this.state.id].files = this.state.files
                            this.setState({...this.state, message: editing, editMessage: false});
                        }
                        setTimeout(() => {
                            values.message = ""
                            this.setState({...this.state,
                                textMessage: "",
                                files: [],
                                date: new Date().toLocaleTimeString(),
                            })
                        }, 1);  
                    }
                }

                const editMessage = (message, i) => {
                    this.setState({...this.state,
                        id: i,
                        files: message.files,
                        editMessage: true,
                        textMessage: message.message,
                    })
                }
                
                const RemoveMessage = (i) => {
                    this.setState({...this.state,
                        message: this.state.message.filter((message, id) => id !== i)
                    })
                }

                return (
                <>
                    <div className={styles["for-messages"]}>
                        {
                            this.state.message.map((message, i)=>(
                                message ?
                                    <Message {...this.props} key={i} clickEdit={() => editMessage(message, i)} clickDelete={()=>RemoveMessage(i)} className="view" // просто добавляешь className="view" для анимации
                                    time={message.time} message={message.message} edit={this.state.editMessage == true && this.state.id == i ? "edit" : ""}>
                                        <div className={`${styles["for-images"]} d-flex`}>
                                        {
                                            message.files.map((file,i) => (
                                                file ?
                                                    <ImageDialog key={i} src={file.base64}/>
                                                : null
                                            )) 
                                        }
                                        </div>
                                    </Message>
                                : null
                            ))
                        }
                        <div ref={this.messagesEnd}></div>
                    </div>
                    <div className={`${styles["for-added"]} d-flex`}>
                    {
                        this.state.files.map((file, i) => (
                            file ?
                                <AddFile className={styles["added-file"]} key={i} nameFile={file.name.substr(0, 8).concat(file.name.length > 8 ? "..." : "")} clickDelete={() => this.onRemove(i)}/>
                            : null
                        ))
                    }
                    </div>
                    <BetweenBlock className={`d-flex items-center ${styles["management-message"]}`}>
                        <TextArea name="message" onChange={handleChange} classDiv="last"
                            placeholder='Напишите сообщение...'
                            classError={errors.message ? "view" : ""} addClassInput="main-input"
                            textError={errors.message || "ОК"} value={values.message}/>
                        <AddImageDialog onDone={this.getFiles.bind(this)}/>
                        <img className={`transition_0_3 cursor-pointer ${styles["send-message"]}`} 
                            alt="add file" src="/assets/img/send-message.svg" onClick={() => {handleSubmit(), AddMessage(), setTimeout(this.Scroll, 1)}}/>
                    </BetweenBlock>
                </>
                );}}
            </Formik> 
        )

    }

    
}

export default Messenger