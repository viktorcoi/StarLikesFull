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
import ButtonAddFile from '../../components/Assets/Buttons/ButtonAddFile';
import AddFile from '../../components/Assets/Blocks/AddFile';
import LinkButton from '../../components/Assets/Buttons/LinkButton';
import PanelNavigationAdminMini from '../../components/Assets/Navigations/PanelNavigationAdminMini';
import DataSupport from '../../components/Assets/Table/Data/Admin/DataSupport';
import DataTable from '../../components/Assets/Table/DataTable';
import CPlaceholders from '../../models/Placeholders/Client/index';
import DataTableColumn from '../../components/Assets/Table/DataTableColumn';

class HistoryOrders extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeClasses: [false, false, false, false],
            addFile: [],
            linkPage: "",
            id: "",
            numberSup: "",
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
        };
        this.addClass = this.addClass.bind(this);
    }
    
    addClass(index, v) {
        const activeClasses = [...this.state.activeClasses.slice(0, index), !this.state.activeClasses[index], this.state.activeClasses.slice(index + 1)].flat();
        this.setState({
            activeClasses,
            id: v?.id,
            type: v?.type,
            theme: v?.theme, 
            message: v?.message
        });
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

    Remove = (id) => {
        console.log(id)
        this.setState({
            tableData: this.state.Data.filter(v => id !== id)
        })
        console.log(this.state.tableData, this.state.tableData.id)
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
                    <TableDataManagement clickEdit={() => this.addClass(1, v)}  clickDelete={() => this.addClass(0, v.id)}/>
                    <TableDataLink color="purple" href="/admin/support_dialog">{`#${v.number}`}</TableDataLink>
                    <TableData>{v.login}</TableData>
                    <TableData>{v.theme.substr(0, 23).concat(v.theme.length > 23 ? "..." : "")}</TableData>
                    <TableDataStatus ColorStatus={v.color}>{v.status}</TableDataStatus>
                </DataTableColumn>
            );
        }

        return (
            <>  
                <Popup clickClose={() => {this.addClass(1), this.setState({})}} 
                    className={activeClasses[1]? "open" : ""}
                    title="Создать обращение">
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
                                    this.state.linkPage = "/admin/support_dialog";
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
                                        this.addClass(1)
                                    }, 1);
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
                                <SearchInput classOption="selector-admin-popup" classSerach="admin-search-popup"/>
                                <CustomSelector className="admin-selector-popup" items={this.state.filterSelector}
                                    onClick={(e)=> (this.setState({ ...this.state, filterField: e.target.innerText}))} 
                                    title={this.state.filterField}/>
                            </BetweenBlock>
                            <TextArea name="message" 
                                onChange={(e)=> this.setState({ message: e.target.value })} 
                                onKeyUp={ChangeLink()} 
                                placeholder='Напишите сообщение' type="text"
                                classError={errors.message ? "view" : ""} addClassInput="main-input"
                                textError={errors.message || "ОК"} value={values.message}/>
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
                <Popup namePopup="yes-no" clickClose={() => this.addClass(0)} className={activeClasses[0]? "open" : ""}
                    title="Вы уверены, что хотите удалить обращение?">
                    <BetweenBlock>
                        <ButtonYes onClick={(idx)=> this.Remove(idx)}/>
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