import { Component } from 'react/cjs/react.production.min';
import styles from '/public/assets/css/AdminsPages.module.css'
import MainTitle from '../../components/Assets/tags/MainTitle';
import Container from "../../components/Assets/moduls/Container";
import LinkBack from '../../components/Assets/tags/LinkBack';
import InformationSupport from '../../components/Assets/DialogSupport/InformationSuppot';
import DarkPurpleBlock from '../../components/Assets/Blocks/DarkPurpleBlock';
import TextArea from '../../components/Assets/Inputs/TextArea';
import HeaderDialog from '../../components/Assets/DialogSupport/HeaderDialog';
import BetweenBlock from '../../components/Assets/Blocks/BetweenBlock';
import Message from '../../components/Assets/DialogSupport/Message';
import AddFile from '../../components/Assets/Blocks/AddFIle';
import PanelNavigationAdmin from '../../components/Assets/Navigations/PanelNavigationAdmin';
import { Formik } from "formik";
import * as Yup from "yup";
import PanelNavigationAdminMini from '../../components/Assets/Navigations/PanelNavigationAdminMini';

class SupportDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addFile: [],
            addMessage: [],
            currDate: new Date().toLocaleTimeString(),
        };
    }

    onRemove = (id) => {
        this.setState({
            addFile: this.state.addFile.filter((item) => item.id !== id)
        })
    }

    addComponent = (index) => {
        this.setState({
            addFile:[...this.state.addFile, { id: index }],
        })
    }

    render() {  

        const schema = Yup.object({
            message: Yup.string().required("Поле не может быть пустым!"),
        });

        return (
            <>
                <Container>
                    <section className={`${styles["dialog-support"]}`}>
                    <BetweenBlock>
                        <PanelNavigationAdminMini/>
                        <PanelNavigationAdmin/>
                            <div className={`pos-relative ${styles["right-side"]}`}>
                            <LinkBack/>
                                <MainTitle className={styles.title}>Обращение <span>vladislove</span></MainTitle>
                                <InformationSupport theme="Выведение средств" type="Выведение средств на платежную систему" service="[#2] Test"/>
                                <HeaderDialog ColorStatus="red" status="активен" date="01.04.2022 @ 02:14:21"/>
                                <DarkPurpleBlock className={`d-flex ${styles["for-dialog"]} pos-relative`}>
                                    <p className={`pos-absolute ${styles.date}`}>21 августа</p>
                                    
                                    <Formik
                                        initialValues={{ 
                                            message: '',
                                        }}
                                        validationSchema={schema}
                                        onSubmit = {(values) => {console.log(values)}}>
                                        {({ errors, handleSubmit, handleChange, values }) => {

                                        const AddMessage = (id) => {
                                            setTimeout(() => {
                                            if (values.message.length > 0) {
                                                const time = this.state.currDate;
                                                const message = values.message;
                                                values.message = ""
                                                this.setState({
                                                    addMessage:[...this.state.addMessage, { time, message, id: id }],
                                                    currDate: new Date().toLocaleTimeString()
                                                })}
                                            }, 1);
                                        }

                                        const RemoveMessage = (id) => {
                                            this.setState({
                                                addMessage: this.state.addMessage.filter((item) => item.id !== id)
                                            })
                                        }

                                        return (
                                        <>
                                            <div className={styles["for-messages"]}>
                                                {this.state.addMessage.map((item)=>(
                                                    item ?
                                                        <Message avatar="admin" clickEdit={""} clickDelete={()=>RemoveMessage(item.id)} className="view" // просто добавляешь className="view" для анимации
                                                        name="Админ" time={item.time} message={item.message}/> 
                                                    : null
                                                ))}
                                            </div>
                                             <div className={`${styles["for-added"]} d-flex`}>
                                                {this.state.addFile.map((item)=>(
                                                    item ?
                                                        <AddFile className={styles["added-file"]} nameFile="Название" clickDelete={()=>this.onRemove(item.id)}/>
                                                    : null
                                                ))}
                                            </div>
                                            <BetweenBlock className={`d-flex items-center ${styles["management-message"]}`}>
                                                <TextArea name="message" onChange={handleChange} 
                                                    placeholder='Напишите сообщение...'
                                                    classError={errors.message ? "view" : ""} addClassInput="main-input"
                                                    textError={errors.message || "ОК"} value={values.message}/>
                                                <img className={`transition_0_3 cursor-pointer ${styles["add-file-message"]}`} 
                                                    alt="add file" src="/assets/img/add-file-message.svg" onClick={this.addComponent}/>
                                                <img className={`transition_0_3 cursor-pointer ${styles["send-message"]}`} 
                                                    alt="add file" src="/assets/img/send-message.svg" onMouseUp={AddMessage} onClick={handleSubmit}/>
                                            </BetweenBlock>

                                        </>
                                        );}}
                                    </Formik>
                                </DarkPurpleBlock>
                            </div>
                        </BetweenBlock>
                    </section>
                </Container>
            </>
        )
    }
}

export default SupportDialog;