import { Component } from 'react';
import BetweenBlock from '../components/Assets/Blocks/BetweenBlock';
import Container from "../components/Assets/moduls/Container";
import PanelNavigationMain from '../components/Assets/Navigations/PanelNavigationMain';
import CustomTable from '../components/Assets/Table/CustomTable';
import styles from '/public/assets/css/MainPages.module.css'
import HeadTable from '../components/Assets/Table/HeadTable';
import TitleHead from '../components/Assets/Table/TitleHead';
import TableData from '../components/Assets/Table/TableData';
import TableDataStatus from '../components/Assets/Table/TableDataStatus';
import Pagination from '../components/Assets/Pagination/Pagination';
import NumberPage from '../components/Assets/Pagination/NumberPage';
import ButtonWithArrow from '../components/Assets/Buttons/ButtonWithArrow';
import TableDataLink from '../components/Assets/Table/TableDataLink';
import { Formik } from "formik";
import * as Yup from "yup";
import InputWithError from '../components/Assets/Inputs/InputWithError';
import TextArea from '../components/Assets/Inputs/TextArea';
import CustomSelector from '../components/Assets/tags/CustomSelector';
import ButtonAddFile from '../components/Assets/Buttons/ButtonAddFile';
import AddFile from '../components/Assets/Blocks/AddFile';
import Popup from '../components/Assets/Popup/Popup';
import LinkButton from '../components/Assets/Buttons/LinkButton';
import FilterSelector from '../components/Assets/tags/FilterSelector';
import MainTitle from '../components/Assets/tags/MainTitle';
import PanelNavigationMainMini from '../components/Assets/Navigations/PanelNavigationMainMini';
import DataSupport from '../components/Assets/Context/UserContext/DataSupport';

class Support extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeClasses: [false, false, false, false],
            addFile: [],
            linkPage: "",
            filter: ["активные", "решенные", "все записи"],
            id: "",
            index: "",
            theme: "",
            status: "",
            lastUpdate: '',
            color: "",
            statusFilter: "",
            Data: [...DataSupport]
        };
        this.addClass = this.addClass.bind(this);
    }
    
    addClass(index) {
        const activeClasses = [...this.state.activeClasses.slice(0, index), !this.state.activeClasses[index], this.state.activeClasses.slice(index + 1)].flat();
        this.setState({activeClasses});
        document.body.style.overflow = activeClasses[0] ? 'hidden' : 'overlay';
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

    changeClickStatus = (e) => {
        let filter = [];
        for (var i = 0; i < 3; i++) {
            if (e.target.innerText.toLowerCase() == this.state.filter[i]) {
                filter[0] = "активен"
                filter[1] = "решен"
                filter[2] = ""
                this.setState({ ...this.state, statusFilter: filter[i]});
            }
        }
    }

    render() {

        const schemaSupport = Yup.object({
            theme: Yup.string().required("Поле не может быть пустым!"),
            message: Yup.string().required("Поле не может быть пустым!"),
        });

        const activeClasses = this.state.activeClasses.slice();
        let type  = ["Технический", "Не технический", "Гипер технический"];

        const tableSupport = this.state.Data.filter(v => ((!this.state.statusFilter) || v.status == this.state.statusFilter)).map((v, idx) => { 
            return (
            <tr key={`v-${idx}`}>
                    <TableData>{v.index}</TableData>
                    <TableDataLink color="purple" href="/dialog_support">{v.theme}</TableDataLink>
                    <TableDataStatus ColorStatus={v.color}>{v.status}</TableDataStatus>
                    <TableData>{v.lastUpdate}</TableData>
            </tr>
        )});

        return (
            <>
                <Popup clickClose={() => this.addClass(0)} className={activeClasses[0]? "open" : ""} title="Создать обращение">
                    <Formik
                        initialValues={{
                            type: '',
                            theme: '',
                            message: '',
                        }}
                        validationSchema={schemaSupport}
                        onSubmit = {(values) => {console.log(values)}}>
                        {({ errors, handleSubmit, handleChange, values }) => {

                        const ChangeLink = () => {
                            if (values.theme.length && values.message.length > 0 ) {
                                this.state.linkPage = "/dialog_support";
                            } else {
                                this.state.linkPage = "";
                            }
                        }

                        const sendSupport = () => {
                            if (values.theme.length && values.message.length > 0 ) {
                                this.addClass(0)
                            } 
                        }

                        return (
                        <>
                            <div>
                                <CustomSelector addClassName={styles["margin-selector"]} addIMG="pen" title="Выберите тип обращения" items={type}/>
                                <InputWithError className="chat" name="theme" onChange={handleChange} onKeyUp={ChangeLink()} 
                                    placeholder='Тема обращения' type="text"
                                    classError={errors.theme ? "view" : ""} addClassInput="main-input"
                                    textError={errors.theme || "ОК"} value={values.theme}/>
                                <TextArea name="message" onChange={handleChange} onKeyUp={ChangeLink()} 
                                    placeholder='Напишите сообщение' type="text"
                                    classError={errors.message ? "view" : ""} addClassInput="main-input"
                                    textError={errors.message || "ОК"} value={values.message}/>
                            </div>
                            <ButtonAddFile onClick={this.addComponent}>Добавить файл</ButtonAddFile>
                            <div className={`${styles["for-added"]} d-flex`}>
                                {this.state.addFile.map((item)=>(
                                    item ?
                                        <AddFile nameFile="Название" clickDelete={()=>this.onRemove(item.id)}/>
                                    : null
                                ))}
                            </div>
                            <LinkButton onClick={()=>{handleSubmit(), sendSupport()}} href={this.state.linkPage}>Создать обращение</LinkButton> 
                        </>
                        );}}
                    </Formik>
                </Popup>
                <Container>
                    <section className={styles["page-support"]}>
                        <BetweenBlock>
                            <PanelNavigationMainMini/>
                            <PanelNavigationMain/>
                            <div className={styles["right-side"]}>
                                <BetweenBlock className={`items-center ${styles["for-title"]} ${styles["title-margin-57"]}`}>
                                    <MainTitle>Поддержка</MainTitle>
                                    <ButtonWithArrow onClick={() => this.addClass(0)}>Создать обращение</ButtonWithArrow>
                                </BetweenBlock>
                                <BetweenBlock className={`items-center ${styles["for-title-two"]}`}>
                                    <FilterSelector addClassName={styles["for-filter"]}
                                    onClick={(e)=> this.changeClickStatus(e)}
                                    title={this.state.filter[2]} items={this.state.filter}/>
                                </BetweenBlock>
                                <CustomTable className="table-support">
                                    <HeadTable>
                                        <TitleHead>ID</TitleHead>
                                        <TitleHead>Тема</TitleHead>
                                        <TitleHead>Статус</TitleHead>
                                        <TitleHead>Последнее обновление</TitleHead>
                                    </HeadTable>
                                    <tbody>
                                        {tableSupport}
                                    </tbody>
                                </CustomTable>
                                <BetweenBlock className={`items-center ${styles["for-pagination"]}`}>
                                    <Pagination>
                                        <NumberPage className="select">1</NumberPage>
                                        <NumberPage>2</NumberPage>
                                        <NumberPage>3</NumberPage>
                                    </Pagination>
                                </BetweenBlock>
                            </div>
                        </BetweenBlock>
                    </section>
                </Container>
            </>
        )
    }
}

export default Support;