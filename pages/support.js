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
            type: "",
            color: "",
            statusFilter: "",
            Data: [...DataSupport],
            tableData: [],
            typeSelector: ["Технический", "Не технический", "Гипер технический"],
        };
        this.state.tableData = this.state.Data
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

        const renderTableSupport = (data) => {
            return data.filter((v) => (((!this.state.statusFilter) || v.status == this.state.statusFilter))).map((v,idx) => {
                return (
                    <>
                        <tr key={`v-${idx}`}>
                            <TableData>{v.numberSup}</TableData>
                            <TableDataLink color="purple" href="/dialog_support">{v.theme}</TableDataLink>
                            <TableDataStatus ColorStatus={v.color}>{v.status}</TableDataStatus>
                            <TableData>{v.lastUpdate}</TableData>
                        </tr>
                    </>
                );
            });
        }

        return (
            <>
                <Popup clickClose={() => this.addClass(0)} className={activeClasses[0]? "open" : ""} title="Создать обращение">
                    <Formik
                    enableReinitialize={true}
                        initialValues={{
                            type: this.state.type ? this.state.type : "Выберете тип обращения",
                            theme: this.state.theme,
                            message: this.state.message,
                        }}
                        validationSchema={schemaSupport}
                        onSubmit = {(values) => {console.log(values)}}>
                        {({ errors, handleSubmit, values }) => {

                        const ChangeLink = () => {
                            if (values.theme && values.message != undefined) {
                                if (values.theme.length && values.message.length > 0) {
                                    this.state.linkPage = "/dialog_support";
                                } else {
                                    this.state.linkPage = "";
                                }
                            } else {
                                this.state.linkPage = "";
                            }
                        }

                        const sendSupport = () => {
                            if (values.theme && values.message != undefined) {
                                if (values.theme.length && values.message.length > 0) {
                                    setTimeout(() => {
                                        this.addClass(0)
                                    }, 1);
                                }
                            } 
                        }

                        return (
                        <>
                            <div>
                                <CustomSelector onClick={(e)=> (this.setState({ ...this.state, type: e.target.innerText}))}
                                    title={values.type} items={this.state.typeSelector}
                                    addClassName={styles["margin-selector"]} addIMG="pen"/>
                                <InputWithError onChange={(e)=> {this.setState({ theme: e.target.value })}} 
                                    className="chat" name="theme" onKeyUp={ChangeLink()} 
                                    placeholder='Тема обращения' type="text"
                                    classError={errors.theme ? "view" : ""} addClassInput="main-input"
                                    textError={errors.theme || "ОК"} value={values.theme}/>
                                <TextArea onChange={(e)=> this.setState({ message: e.target.value })} 
                                    name="message" onKeyUp={ChangeLink()} 
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
                                        {renderTableSupport(this.state.tableData)}
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