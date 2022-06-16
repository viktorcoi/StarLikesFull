import { Component } from 'react'
import ContainerForPages from "../../components/Assets/moduls/ContainerForPages";
import styles from '/public/assets/css/AdminsPages.module.css'
import BetweenBlock from '../../components/Assets/Blocks/BetweenBlock';
import TableData from '../../components/Assets/Table/TableData';
import TableDataLink from '../../components/Assets/Table/TableDataLink';
import TableDataStatus from '../../components/Assets/Table/TableDataStatus';
import MainTitle from '../../components/Assets/tags/MainTitle'
import PanelNavigationAdmin from '../../components/Assets/Navigations/PanelNavigationAdmin';
import SearchInput from '../../components/Assets/Inputs/SearchInput';
import CustomSelector from '../../components/Assets/tags/CustomSelector';
import FilterSelector from '../../components/Assets/tags/FilterSelector';
import ButtonWithArrow from '../../components/Assets/Buttons/ButtonWithArrow';
import InputWithError from '../../components/Assets/Inputs/InputWithError';
import { Formik } from "formik";
import * as Yup from "yup";
import Popup from '../../components/Assets/Popup/Popup';
import ButtonYes from '../../components/Assets/Buttons/ButtonYes';
import ButtonNo from '../../components/Assets/Buttons/ButtonNo';
import TableDataManagement from '../../components/Assets/Table/TableDataManagement';
import TextArea from '../../components/Assets/Inputs/TextArea';
import LinkButton from '../../components/Assets/Buttons/LinkButton';
import PanelNavigationAdminMini from '../../components/Assets/Navigations/PanelNavigationAdminMini';
import DataSupport from '../../components/Assets/Table/Data/Admin/DataSupport';
import DataTable from '../../components/Assets/Table/DataTable';
import CPlaceholders from '../../models/Placeholders/Client/index';
import DataTableColumn from '../../components/Assets/Table/DataTableColumn';
import AddImageFromPopup from '../../components/Assets/Blocks/AddImageFromPopup';
import MainButton from '../../components/Assets/Buttons/MainButton';
import AlertBlock from '../../components/Assets/Blocks/AlertBlock';
import SearchUser from '../../components/Assets/Inputs/SearchUser';

class HistoryOrders extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeClasses: [false, false, false, false],
            addFile: [],
            id: "",
            number: "",
            login: "",
            theme: "",
            status: "",
            message: "",
            type: "",
            typeSelector: ["Технический", "Не технический", "Гипер технический"],
            Data: [...DataSupport],
            filterStatus: ["активные", "решенные", "все записи"],
            filterSelector: ["По логину", "По теме", "По номеру"],
            tableData: [],
            filterField: "По логину",
            statusFilter: "",
            searchFilter: "",
            valueSearch: "",
            statusRequest: ["Активен", "Решен"],
        };
        this.addClass = this.addClass.bind(this);
    }
    
    addClass(index, v) {
        const activeClasses = [...this.state.activeClasses.slice(0, index), !this.state.activeClasses[index], this.state.activeClasses.slice(index + 1)].flat();
        this.setState({
            activeClasses,
            number: v?.number,
            login: v?.login,
            status: v?.status,
            id: v?.id,
            type: v?.type,
            theme: v?.theme, 
            message: v?.message
        });
        document.body.style.overflow = activeClasses[0] ? 'hidden' : 'overlay';
    }

    DeleteData = () => {
        this.setState({ 
            Data: this.state.Data.filter((v) => this.state.id !== v.id),
            tableData: this.state.tableData.filter((v) => this.state.id !== v.id)
        })
        this.addClass(0)
        this.setState({...this.state, deleteAlert: true})
    }

    resetPopupData = () => {
        setTimeout(() => {
            this.setState({
                number: "", login: "", status: "", id: "", type: "", theme: "", message: ""
            })
        }, 300);
    }

    render() {

        const activeClasses = this.state.activeClasses.slice();

        const schemaSupport = Yup.object({
            theme: Yup.string().required("Поле не может быть пустым!"),
            message: Yup.string().required("Поле не может быть пустым!"),
        });

        const renderData = (v, i) => {
            return (
                <DataTableColumn key={i}>
                    <TableDataManagement clickEdit={() => this.addClass(1, v)}  clickDelete={() => this.addClass(0, v)}/>
                    <TableDataLink color="purple" href="/admin/support_dialog">{`#${v.number}`}</TableDataLink>
                    <TableData>{v.login}</TableData>
                    <TableData>{v.theme.substr(0, 23).concat(v.theme.length > 23 ? "..." : "")}</TableData>
                    <TableDataStatus ColorStatus={v.color}>{v.status}</TableDataStatus>
                </DataTableColumn>
            );
        }

        const linkPage = ""

        return (
            <>  
                <AlertBlock Alert = {this.state.changeAlert} 
                    callback = {(v) => {this.setState({...this.state, changeAlert: v})}} 
                    img="alert-success" clickClose={this.closeAlert} title="Готово!"  
                    description="Обращение успешно изменено!">
                </AlertBlock>
                <Popup clickClose={() => {this.addClass(1), this.resetPopupData()}} 
                    className={activeClasses[1]? "open" : ""}
                    title = {
                        this.state.id > -1 ? "Редакировать обращение" : "Создать обращение"
                    }>
                    <Formik
                        enableReinitialize={true}
                        initialValues={{ 
                            type: this.state.type ? this.state.type : "Выберете тип обращения",
                            theme: this.state.theme,
                            message: this.state.message,
                            login: this.state.login,
                            status: this.state.status ? this.state.status : "Статус"
                        }}

                        validationSchema={schemaSupport}
                        onSubmit = {(values) => {
                            if (this.state.id > -1) {
                                values.status = values.status.toLowerCase()
                                let column = ["type", "theme", "message", "login", "status"]
                                for (var i = 0; i < 5; i++) {
                                this.state.tableData.find(x => x.id === this.state.id)[column[i]] = values[column[i]]
                                if (values.status == "решен") {
                                    this.state.tableData.find(x => x.id === this.state.id).color = "green"
                                } else {
                                    this.state.tableData.find(x => x.id === this.state.id).color = "red"
                                }}
                            } else {
                                console.log(values)
                            }
                        }}>
                        {({ errors, handleSubmit, values }) => {

                        const ChangeLink = () => {
                            if (values.theme && values.message != undefined) {
                                if (values.theme.length && values.message.length > 0) {
                                    linkPage = "/admin/support_dialog";
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
                                    if (this.state.id > -1) {
                                        this.setState({...this.state, changeAlert: true})
                                    }
                                    setTimeout(() => {
                                        this.addClass(1)
                                    }, 1);
                                    this.resetPopupData()
                                }
                            } 
                        }

                        return (
                        <>
                            <CustomSelector addClassName={styles["margin-selector"]}  addIMG="pen" 
                                onClick={(e)=> (this.setState({ ...this.state, type: e.target.innerText}))}
                                title={values.type} items={this.state.typeSelector}/>
                            <InputWithError className="chat" name="theme" 
                                onChange={(e)=> {this.setState({ theme: e.target.value })}} 
                                onKeyUp={ChangeLink()} 
                                placeholder='Тема обращения' type="text"
                                classError={errors.theme ? "view" : ""} addClassInput="main-input"
                                textError={errors.theme || "ОК"} value={values.theme}/>
                            <BetweenBlock className={styles["for-search-popup"]}>
                                {
                                    this.state.id > -1 ? 
                                        <SearchInput value={values.login} classSerach="admin-search-popup"/>
                                    : 
                                    <SearchUser value={values.login} classSerach="admin-search-popup"/>
                                }
                            </BetweenBlock>
                            <TextArea name="message" 
                                onChange={(e)=> this.setState({ message: e.target.value })} 
                                onKeyUp={ChangeLink()} 
                                placeholder='Напишите сообщение' type="text"
                                classError={errors.message ? "view" : ""} addClassInput="main-input"
                                textError={errors.message || "ОК"} value={values.message}/>
                            {
                                this.state.id > -1 ? 
                                    <>
                                        <CustomSelector addClassName={styles["margin-selector"]}
                                            onClick={(e)=> (this.setState({ ...this.state, status: e.target.innerText}))}
                                            addIMG="status" title={values.status} items={this.state.statusRequest}/>
                                        <MainButton  onClick={()=>{handleSubmit(), sendSupport()}}  style={{marginTop: "0"}} className={styles["button-popup-admin"]} 
                                            classButton="link-button">Редактировать обращение
                                        </MainButton> 
                                    </>
                                : 
                                <>
                                    <AddImageFromPopup/>
                                    <LinkButton onClick={()=>{handleSubmit(), sendSupport()}} 
                                        href={linkPage}>Создать обращение
                                    </LinkButton> 
                                </>
                            }
                        </>
                        );}}
                    </Formik>   
                </Popup>
                <Popup namePopup="yes-no" clickClose={() => this.addClass(0)} className={activeClasses[0]? "open" : ""}
                    title="Вы уверены, что хотите удалить обращение?">
                    <BetweenBlock>
                        <ButtonYes onClick={()=> {this.DeleteData(), this.resetPopupData()}}/>
                        <ButtonNo onClick={() => this.addClass(0)}/>
                    </BetweenBlock>
                </Popup>
               <ContainerForPages>
                    <section className={styles.support}>
                        <BetweenBlock>
                            <PanelNavigationAdminMini/>
                            <PanelNavigationAdmin/>
                            <div className={styles["right-side"]}>
                                <BetweenBlock className={`items-center ${styles["for-title"]}`}>
                                    <MainTitle>Поддержка</MainTitle>
                                    <ButtonWithArrow onClick={() => this.addClass(1)}>Добавить тему</ButtonWithArrow>
                                </BetweenBlock>
                                <BetweenBlock className={`${styles["for-search"]} items-center`}>
                                    <div className="d-flex">
                                        <SearchInput addClassDiv={styles["admin-search"]} classOption="for-dark-selector" classDiv="admin-search"
                                            filterField={this.state.filterField} data={this.state.Data} 
                                            callback={(data, x, y) => {this.setState({...this.state, tableData: 
                                                data.filter((v) => (!this.state.statusFilter || v.status == this.state.statusFilter)),
                                                searchFilter: x, valueSearch: y
                                            })}}>
                                        </SearchInput>
                                        <CustomSelector className="admin-selector" 
                                            onClick={(e)=> (this.setState({ ...this.state, filterField: e.target.innerText}))} 
                                            title={this.state.filterField} items={this.state.filterSelector}/>
                                    </div>
                                    <FilterSelector title={this.state.filterStatus[2]} items={this.state.filterStatus}
                                        callback={(data, x) => {this.setState({...this.state, 
                                            tableData: data.filter(v => v[this.state.searchFilter].indexOf(this.state.valueSearch) != -1), 
                                            statusFilter: x
                                        })}}
                                        filter = {["активен", "решен", ""]} filterStatus={this.state.filterStatus}
                                        data={this.state.Data}>
                                    </FilterSelector>
                                </BetweenBlock>
                                <DataTable classTable="admin-table" emptyText={`Обращения не найдены`} 
                                    linesLimit={5} data={this.state.tableData} 
                                    columns={CPlaceholders.Fields.AdminSupport["ru"]} render={renderData}>
                                </DataTable>
                            </div>
                        </BetweenBlock>
                    </section>
               </ContainerForPages>
            </>
        ) 
    }
}

export default HistoryOrders;