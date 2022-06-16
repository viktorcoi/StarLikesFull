import { Component } from 'react';
import BetweenBlock from '../components/Assets/Blocks/BetweenBlock';
import ContainerForPages from "../components/Assets/moduls/ContainerForPages";
import PanelNavigationMain from '../components/Assets/Navigations/PanelNavigationMain';
import styles from '/public/assets/css/MainPages.module.css'
import TableData from '../components/Assets/Table/TableData';
import TableDataStatus from '../components/Assets/Table/TableDataStatus';
import ButtonWithArrow from '../components/Assets/Buttons/ButtonWithArrow';
import TableDataLink from '../components/Assets/Table/TableDataLink';
import { Formik } from "formik";
import * as Yup from "yup";
import InputWithError from '../components/Assets/Inputs/InputWithError';
import TextArea from '../components/Assets/Inputs/TextArea';
import CustomSelector from '../components/Assets/tags/CustomSelector';
import Popup from '../components/Assets/Popup/Popup';
import LinkButton from '../components/Assets/Buttons/LinkButton';
import FilterSelector from '../components/Assets/tags/FilterSelector';
import MainTitle from '../components/Assets/tags/MainTitle';
import PanelNavigationMainMini from '../components/Assets/Navigations/PanelNavigationMainMini';
import DataSupport from '../components/Assets/Table/Data/Users/DataSupport';
import DataTableColumn from '../components/Assets/Table/DataTableColumn';
import DataTable from '../components/Assets/Table/DataTable';
import CPlaceholders from '../models/Placeholders/Client/index';
import AddImageFromPopup from '../components/Assets/Blocks/AddImageFromPopup';

class Support extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeClasses: [false, false, false, false],
            filterStatus: ["активные", "решенные", "все записи"],
            theme: "",
            type: "",
            message: "",
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

    render() {

        const schemaSupport = Yup.object({
            theme: Yup.string().required("Поле не может быть пустым!"),
            message: Yup.string().required("Поле не может быть пустым!"),
        });

        const activeClasses = this.state.activeClasses.slice();

        const renderData = (v, i) => {
            return (
                <DataTableColumn key={i}>
                    <TableData>{`#${v.number}`}</TableData>
                    <TableDataLink color="purple" href="/dialog_support">{v.theme.substr(0, 23).concat(v.theme.length > 23 ? "..." : "")}</TableDataLink>
                    <TableDataStatus ColorStatus={v.color}>{v.status}</TableDataStatus>
                    <TableData>{v.lastUpdate}</TableData>
                </DataTableColumn>
            );
        }

        const linkPage = ""

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
                                    linkPage = "/dialog_support";
                                } else {
                                    linkPage = "";
                                }
                            } else {
                                linkPage = "";
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
                            <AddImageFromPopup/>
                            <LinkButton onClick={()=>{handleSubmit(), sendSupport()}} href={linkPage}>Создать обращение</LinkButton> 
                        </>
                        );}}
                    </Formik>
                </Popup>
                <ContainerForPages>
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
                                    <FilterSelector title={this.state.filterStatus[2]} items={this.state.filterStatus}
                                        callback={(data) => {this.setState({...this.state, tableData: data})}}
                                        filter = {["активен", "решен", ""]} filterStatus={this.state.filterStatus}
                                        data={this.state.Data} addClassName={styles["for-filter"]}>
                                    </FilterSelector>
                                </BetweenBlock>
                                <DataTable classTable="table-support" emptyText={`Обращения не найдены`} 
                                    linesLimit={5} data={this.state.tableData} 
                                    columns={CPlaceholders.Fields.Support["ru"]} render={renderData}>
                                </DataTable>
                            </div>
                        </BetweenBlock>
                    </section>
                </ContainerForPages>
            </>
        )
    }
}

export default Support;