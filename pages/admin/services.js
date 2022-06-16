import { Component } from 'react'
import ContainerForPages from "../../components/Assets/moduls/ContainerForPages";
import styles from '/public/assets/css/AdminsPages.module.css'
import BetweenBlock from '../../components/Assets/Blocks/BetweenBlock';
import TableData from '../../components/Assets/Table/TableData';
import MainTitle from '../../components/Assets/tags/MainTitle'
import PanelNavigationAdmin from '../../components/Assets/Navigations/PanelNavigationAdmin';
import CustomSelector from '../../components/Assets/tags/CustomSelector';
import TableDataManagement from '../../components/Assets/Table/TableDataManagement';
import Popup from '../../components/Assets/Popup/Popup';
import ButtonYes from '../../components/Assets/Buttons/ButtonYes';
import ButtonNo from '../../components/Assets/Buttons/ButtonNo';
import MainButton from '../../components/Assets/Buttons/MainButton';
import InputWithError from '../../components/Assets/Inputs/InputWithError';
import { Formik } from "formik";
import * as Yup from "yup";
import AlertBlock from '../../components/Assets/Blocks/AlertBlock';
import FilterSelector from '../../components/Assets/tags/FilterSelector';
import TableDataStatus from '../../components/Assets/Table/TableDataStatus';
import SocialBlock from '../../components/Assets/Blocks/SocialBlock';
import SocialRoutes from '../../components/Assets/SocialRoutes';
import TextArea from '../../components/Assets/Inputs/TextArea';
import PanelNavigationAdminMini from '../../components/Assets/Navigations/PanelNavigationAdminMini';
import DataService from '../../components/Assets/Table/Data/Admin/DataService';
import CPlaceholders from '../../models/Placeholders/Client/index';
import DataTableColumn from '../../components/Assets/Table/DataTableColumn';
import DataTable from '../../components/Assets/Table/DataTable';

class Services extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeClasses: [false, false, false, false],
            id: "",
            number: "",
            social: "",
            type: "",
            price: "",
            status: "",
            color: "",
            hide: "",
            statusFilter: "",
            changeAlert: false,
            description: "",
            socialFilter: "instagram",
            statusCoupon: ["Скрыто", "Активен"],
            filterStatus: ["активные", "скрытые", "все записи"],
            Data: [...DataService],
            tableData: [],
        };
        this.state.tableData = this.state.Data.filter((v) => (v.social == this.state.socialFilter)).map(v => v)
    }

    addClass(index, v) {
        const activeClasses = [...this.state.activeClasses.slice(0, index), !this.state.activeClasses[index], this.state.activeClasses.slice(index + 1)].flat();
        this.setState({
            activeClasses,
            id: v?.id,
            number: v?.number,
            social: v?.social,
            type: v?.type,
            price: v?.price,
            status: v?.status,
            color: v?.color,
            hide: v?.hide,
            description: v?.description,
        });
        document.body.style.overflow = activeClasses[0] || activeClasses[1] || activeClasses[2] ? 'hidden' : 'overlay';
    }

    ChooseSocial = (e) => {
        this.setState({ ...this.state, socialFilter: e.target.innerText.toLowerCase()})
        setTimeout(() => {
            this.setState({ ...this.state, 
                tableData: this.state.Data.filter((v) => (v.social == this.state.socialFilter && ((!this.state.statusFilter) || v.status == this.state.statusFilter))).map(v => v)})
        }, 1);
        if (e.target.innerText.toLowerCase() == "") {
            this.setState({...this.state, socialFilter: e.target.getAttribute("alt").toLowerCase()})
        }
    }

    DeleteData = () => {
        this.setState({ 
            Data: this.state.Data.filter((v) => this.state.id !== v.id),
            tableData: this.state.tableData.filter((v) => this.state.id !== v.id)
        })
        this.addClass(0)
        this.setState({...this.state, deleteAlert: true})
    }

    hideService = () => {
        if (this.state.color == "green") {
            this.state.tableData.find(x => x.id === this.state.id).hide = "hide"
            this.state.tableData.find(x => x.id === this.state.id).status = "скрыто"
            this.state.tableData.find(x => x.id === this.state.id).color = "red"
        } else {
            this.state.tableData.find(x => x.id === this.state.id).hide = ""
            this.state.tableData.find(x => x.id === this.state.id).status = "активен"
            this.state.tableData.find(x => x.id === this.state.id).color = "green"
        }
        this.addClass(1)
        this.setState({...this.state, hideAlert: true})
    }

    render() {
        const activeClasses = this.state.activeClasses.slice();
        const schema = Yup.object({
            number: Yup.string().required("Поле не может быть пустым!"),
            social: Yup.string().required("Поле не может быть пустым!"),
            type: Yup.string().required("Поле не может быть пустым!"),
            price: Yup.string().required("Поле не может быть пустым!"),
            description: Yup.string().required("Поле не может быть пустым!"),
        });

        const renderData = (v, i) => {
            return (
                <DataTableColumn key={i}>
                    <TableDataManagement clickEdit={() => this.addClass(2, v)}  clickDelete={() => this.addClass(0, v)}>
                    <img onClick={() => this.addClass(1, v)} className={`${styles[v.hide]} ${styles["hide-service"]} cursor-pointer`} 
                        alt='hide' src="/assets/img/view-table.svg"/>
                    </TableDataManagement>
                    <TableData dataName={v.hide}>{`#${v.number}`}</TableData>
                    <TableData dataName={v.hide}>{v.social}</TableData>
                    <TableData dataName={v.hide}>{v.type.substr(0, 44).concat(v.type.length > 44 ? "..." : "")}</TableData>
                    <TableData dataName={v.hide}>{`${v.price}₽`}</TableData>
                    <TableDataStatus ColorStatus={v.color}>{v.status}</TableDataStatus>
                </DataTableColumn>
            );
        }

        return (
            <>  
                <AlertBlock Alert = {this.state.hideAlert} 
                    callback = {(v) => {this.setState({...this.state, hideAlert: v})}} 
                    img="alert-success" title="Готово!" description="Статус услуги изменен!">
                </AlertBlock>
                <AlertBlock Alert = {this.state.deleteAlert} 
                    callback = {(v) => {this.setState({...this.state, deleteAlert: v})}} 
                    img="alert-success" title="Готово!" description="Услуга успешно изменена!">
                </AlertBlock>
                <AlertBlock Alert = {this.state.changeAlert} 
                    callback = {(v) => {this.setState({...this.state, changeAlert: v})}} 
                    img="alert-success" title="Готово!" description="Услуга успешно изменена!">
                </AlertBlock>
                <Popup clickClose={() => this.addClass(2)} className={activeClasses[2]? "open" : ""}
                    title="Изменение услуги">
                    <Formik
                        enableReinitialize={true}
                        initialValues={{ 
                            number: this.state.number,
                            social: this.state.social,
                            type: this.state.type,
                            price: this.state.price,
                            description: this.state.description,
                            status: this.state.status,
                        }}
                        validationSchema={schema}
                        onSubmit = {(values) => {
                            let column = ["number", "social", "type", "price", "description", "status"]
                            values.status = values.status.toLowerCase()
                            for (var i = 0; i < 6; i++) {
                            this.state.tableData.find(x => x.id === this.state.id)[column[i]] = values[column[i]]
                        }
                            if (values.status == "скрыто") {
                                this.state.tableData.find(x => x.id === this.state.id).color = "red"
                                this.state.tableData.find(x => x.id === this.state.id).hide = "hide"
                            } else {
                                this.state.tableData.find(x => x.id === this.state.id).color = "green"
                                this.state.tableData.find(x => x.id === this.state.id).hide = ""
                            }
                        }}>
                        {({ errors, handleSubmit, values }) => {

                        const ChangeService = () => {
                            if (((values.number && values.price) > 0 && (values.social.length && values.type.length 
                                && values.description.length ) != 0)) {
                                    this.setState({...this.state, changeAlert: true})
                                    setTimeout(() => {
                                        this.addClass(2)
                                    }, 1);
                            }
                        } 

                        return (
                        <>
                            <InputWithError onChange={(e)=> {this.setState({ number: e.target.value })}} 
                                addClassInput="main-input"
                                className="sharp" placeholder='Номер' name='number' type="number"
                                classError={errors.number ? "view" : ""} 
                                textError={errors.number || "ОК"} value={values.number}/>
                            <InputWithError onChange={(e)=> {this.setState({ social: e.target.value })}} 
                                addClassInput="main-input"
                                className="social" placeholder='Соц. сеть' name='social'
                                classError={errors.social ? "view" : ""} 
                                textError={errors.social || "ОК"} value={values.social}/>
                            <InputWithError onChange={(e)=> {this.setState({ type: e.target.value })}} 
                                addClassInput="main-input"
                                className="type" placeholder='Тип' name='type'
                                classError={errors.type ? "view" : ""} 
                                textError={errors.type || "ОК"} value={values.type}/>
                            <InputWithError onChange={(e)=> {this.setState({ price: e.target.value })}} 
                                addClassInput="main-input"
                                className="ruble" placeholder='Стоимость' name='price' type="number"
                                classError={errors.price ? "view" : ""} 
                                textError={errors.price || "ОК"} value={values.price}/>
                            <TextArea name="description" onChange={(e)=> {this.setState({ description: e.target.value })}} 
                                placeholder='Описание услуги' type="text"
                                classError={errors.description ? "view" : ""} addClassInput="main-input"
                                textError={errors.description || "ОК"} value={values.description}/>
                            <CustomSelector addIMG="status" onClick={(e)=> (this.setState({ ...this.state, status: e.target.innerText}))}
                                title={values.status} items={this.state.statusCoupon}/>
                            <MainButton className={styles["button-popup-admin"]} 
                                classButton="link-button" 
                                type="submit" 
                                onClick={() => {handleSubmit(), ChangeService()}}>
                                Сохранить
                            </MainButton>
                        </>
                        );}}
                    </Formik>    
                </Popup>
                <Popup namePopup="yes-no" clickClose={() => this.addClass(0)} className={activeClasses[0]? "open" : ""}
                    title="Вы уверены, что хотите удалить услугу?">
                    <BetweenBlock>
                        <ButtonYes onClick={() => {this.DeleteData()}}/>
                        <ButtonNo onClick={() => this.addClass(0)}/>
                    </BetweenBlock>
                </Popup>
                <Popup namePopup="yes-no" clickClose={() => this.addClass(1)} className={activeClasses[1]? "open" : ""}
                title={
                    this.state.color == "red" ? 
                    "Вы уверены, что хотите отобразить услугу?"
                    :
                    "Вы уверены, что хотите скрыть услугу?" 
                }>
                    <BetweenBlock>
                        <ButtonYes onMouseUp={() => this.hideService()}/>
                        <ButtonNo onClick={() => this.addClass(1)}/>
                    </BetweenBlock>
                </Popup>
               <ContainerForPages>
                    <section>
                        <BetweenBlock>
                            <PanelNavigationAdminMini/>
                            <PanelNavigationAdmin/>
                            <div className={styles["right-side"]}>
                                <BetweenBlock className={`items-center ${styles["for-title"]}`}>
                                    <MainTitle>Услуги</MainTitle>
                                </BetweenBlock>
                                <div className={`${styles["for-social"]} d-flex wrap`}>
                                    {
                                        SocialRoutes.slice(0, 13).map(v => {
                                            return (
                                                <SocialBlock key={v} onClick={this.ChooseSocial}
                                                    className={v.select} img={v.img} alt={v.name}>
                                                    {v.name}
                                                </SocialBlock>
                                            );
                                        })
                                    }
                                </div>
                                <div className={`${styles["for-title"]} d-flex`}>
                                    <FilterSelector title={this.state.filterStatus[2]} items={this.state.filterStatus}
                                        callback={(data, x) => {this.setState({...this.state, tableData: data.filter((v) => (v.social == this.state.socialFilter)), statusFilter: x})}}
                                        filter = {["активен", "скрыто", ""]} filterStatus={this.state.filterStatus}
                                        data={this.state.Data} addClassName={styles["for-filter"]}> 
                                    </FilterSelector>
                                </div>
                                <DataTable classTable="admin-table" emptyText={`Услуги не найдены`} 
                                    linesLimit={5} data={this.state.tableData} 
                                    columns={CPlaceholders.Fields.AdminServices["ru"]} render={renderData}>
                                </DataTable>
                            </div>
                        </BetweenBlock>
                    </section>
               </ContainerForPages>
            </>
        ) 
    }
}

export default Services;