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
import ButtonWithArrow from '../../components/Assets/Buttons/ButtonWithArrow';
import InputWithError from '../../components/Assets/Inputs/InputWithError';
import { Formik } from "formik";
import * as Yup from "yup";
import AlertBlock from '../../components/Assets/Blocks/AlertBlock';
import FilterSelector from '../../components/Assets/tags/FilterSelector';
import TableDataStatus from '../../components/Assets/Table/TableDataStatus';
import PanelNavigationAdminMini from '../../components/Assets/Navigations/PanelNavigationAdminMini';
import LinkA from '../../components/Assets/tags/LinkA';
import LinkBack from '../../components/Assets/tags/LinkBack';
import DataCoupons from '../../components/Assets/Table/Data/Admin/DataCoupons';
import CPlaceholders from '../../models/Placeholders/Client/index';
import DataTableColumn from '../../components/Assets/Table/DataTableColumn';
import DataTable from '../../components/Assets/Table/DataTable';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeClasses: [false, false, false, false],
            Data: [...DataCoupons],
            filterStatus: ["активные", "завершеные", "все записи"],
            id: "",
            number: "",
            name: "",
            type: "",
            action: '',
            status: "",
            color: "",
            statusCoupon: ["Активен", "Завершен"],
            tableData: [],
            DataForAdded: [...DataCoupons],
        };
        this.state.tableData = this.state.Data
    }

    addClass(index, v) {
        const activeClasses = [...this.state.activeClasses.slice(0, index), !this.state.activeClasses[index], this.state.activeClasses.slice(index + 1)].flat();
        this.setState({
            activeClasses,
            id: v?.id,
            number: v?.number,
            name: v?.name,
            type: v?.type,
            action: v?.action,
            status: v?.status,
            color: v?.color,
        });
        document.body.style.overflow = activeClasses[0] || activeClasses[1] ? 'hidden' : 'overlay';
    }

    resetPopupData = () => {
        setTimeout(() => {
            this.setState({number: "", name: "", type: "", action: "", status: ""})
        }, 300);
    }

    DeleteData = () => {
        this.setState({ 
            Data: this.state.Data.filter((v) => this.state.id !== v.id),
            tableData: this.state.tableData.filter((v) => this.state.id !== v.id),
            DataForAdded: this.state.DataForAdded.filter((v) => this.state.id !== v.id)
        })
        this.addClass(0)
        this.setState({...this.state, deleteAlert: true})
    }

    render() {

        const renderData = (v, i) => {
            return (
                <DataTableColumn key={i}>
                    <TableDataManagement clickEdit={() => this.addClass(1, v)}  clickDelete={() => this.addClass(0, v)}/>
                    <TableData>{`#${v.number}`}</TableData>
                    <TableData>{v.name}</TableData>
                    <TableData>{v.type}</TableData>
                    <TableData>{v.action}</TableData>
                    <TableDataStatus ColorStatus={v.color}>{v.status}</TableDataStatus>
                </DataTableColumn>
            );
        }

        const activeClasses = this.state.activeClasses.slice();

        const schema = Yup.object({
            number: Yup.string().required("Поле не может быть пустым!"),
            name: Yup.string().required("Поле не может быть пустым!"),
            type: Yup.string().required("Поле не может быть пустым!"),
            action: Yup.string().required("Поле не может быть пустым!"),
        });

        return (
            <>  
                <AlertBlock Alert = {this.state.createAlert} 
                    callback = {(v) => {this.setState({...this.state, createAlert: v})}} 
                    img="alert-success" clickClose={this.closeAlert} title="Готово!"  
                    description="Промокод успешно создан!">
                </AlertBlock>
                <AlertBlock Alert = {this.state.changeAlert} 
                    callback = {(v) => {this.setState({...this.state, changeAlert: v})}} 
                    img="alert-success" clickClose={this.closeAlert} title="Готово!"  
                    description="Промокод успешно изменен!">
                </AlertBlock>
                <Popup clickClose={() => {this.addClass(1), this.resetPopupData()}} 
                    className={activeClasses[1]? "open" : ""}
                    title = {
                        this.state.id > -1 ? "Редакирование промокода" : "Создание промокода"
                    }>
                    <Formik
                        enableReinitialize={true}
                        initialValues={{ 
                            number: this.state.number,
                            name: this.state.name,
                            type: this.state.type,
                            action: this.state.action,
                            status: this.state.status ? this.state.status : "Статус"
                        }}
                        validationSchema={schema}
                        onSubmit = {(values) => {
                            values.status = values.status.toLowerCase()
                            if (this.state.id > -1) {
                                let column = ["number", "name", "type", "action", "status"]
                                for (var i = 0; i < 5; i++) {
                                this.state.tableData.find(x => x.id === this.state.id)[column[i]] = values[column[i]]
                                if (values.status == "завершен") {
                                    this.state.tableData.find(x => x.id === this.state.id).color = "red"
                                } else {
                                    this.state.tableData.find(x => x.id === this.state.id).color = "green"
                                }}
                            } else {
                                let a = this.state.DataForAdded.slice();
                                a [this.state.DataForAdded.length] = {
                                    id: this.state.DataForAdded[this.state.DataForAdded.length - 1].id + 1,
                                    number: values.number,
                                    type: values.type,
                                    action: values.action,
                                    status: values.status != "статус" ? values.status : "активен",
                                    name: values.name,
                                    color: values.status == "завершен" ? "red" : "green",
                                };
                                this.setState({DataForAdded: a});
                                this.setState({Data: a})
                                this.setState({tableData: a});
                                console.log(a)
                            }
                        }}>
                        {({ errors, handleSubmit, values }) => {
                            const CreateCoupon = () => {
                                if (values.name && values.type && values.action != undefined) {
                                    if ((values.number > 0 && (values.name.length && values.type.length && values.action.length) != 0)) {
                                    if (this.state.id > -1) {
                                        this.setState({...this.state, changeAlert: true})
                                    } else {
                                        this.setState({...this.state, createAlert: true})
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
                            <InputWithError onChange={(e)=> {this.setState({ number: e.target.value })}} 
                                addClassInput="main-input"
                                className="sharp" placeholder='Номер' name='number' type="number"
                                classError={errors.number ? "view" : ""} 
                                textError={errors.number || "ОК"} value={values.number}/>
                            <InputWithError onChange={(e)=> {this.setState({ name: e.target.value })}}
                                addClassInput="main-input"
                                className="coupon" placeholder='Название' name='name'
                                classError={errors.name ? "view" : ""} 
                                textError={errors.name || "ОК"} value={values.name}/>
                            <InputWithError onChange={(e)=> {this.setState({ type: e.target.value })}} 
                                addClassInput="main-input"
                                className="type" placeholder='Тип' name='type'
                                classError={errors.type ? "view" : ""} 
                                textError={errors.type || "ОК"} value={values.type}/>
                            <InputWithError onChange={(e)=> {this.setState({ action: e.target.value })}}  
                                addClassInput="main-input"
                                className="plus" placeholder='Действие' name='action'
                                classError={errors.action ? "view" : ""} 
                                textError={errors.action || "ОК"} value={values.action}/>
                            <CustomSelector onClick={(e)=> (this.setState({ ...this.state, status: e.target.innerText}))} 
                                addIMG="status"
                                title={values.status} items={this.state.statusCoupon}/>
                            <MainButton onMouseUp={CreateCoupon} className={styles["button-popup-admin"]} 
                                classButton="link-button" 
                                type="submit" 
                                onClick={handleSubmit}>
                                {this.state.id > -1 ? "Редактировать промокод" : "Создать промокод"}
                            </MainButton>
                        </>
                        );}}
                    </Formik>    
                </Popup>
                <Popup namePopup="yes-no" clickClose={() => this.addClass(0)} className={activeClasses[0]? "open" : ""}
                    title="Вы уверены, что хотите удалить промокод?">
                    <BetweenBlock>
                        <ButtonYes onClick={()=> {this.DeleteData(), this.resetPopupData()}}/>
                        <ButtonNo onClick={() => this.addClass(0)}/>
                    </BetweenBlock>
                </Popup>
               <ContainerForPages>
                    <section className={`${styles.coupons} ${styles["for-menu"]}`}>
                        <BetweenBlock>
                            <div className={`${styles["menu-navigation"]} ${activeClasses[3] ? styles.hide : ""}`}>
                                <p className='d-flex cursor-pointer items-center' onClick={() => this.addClass(3)}>
                                    <img alt='New order' src='/assets/img/admin-nav-coupon.svg'></img>
                                    Промокоды
                                </p>
                                <LinkA className='d-flex items-center' href="/admin/prm4u">
                                    <img alt='New order' src='/assets/img/admin-nav-settings.svg'></img>
                                    Prm4u
                                </LinkA>
                                <LinkA className='d-flex items-center' href="/admin/services">
                                    <img alt='New order' src='/assets/img/admin-nav-list.svg'></img>
                                    Услуги
                                </LinkA>
                            </div>
                            <PanelNavigationAdminMini/>
                            <PanelNavigationAdmin/> 
                            <div className={`${styles["right-side"]} ${activeClasses[3] ? styles["not-hide"] : ""}`}>
                                <div className={`pos-relative ${styles["for-back-mobil"]}`}>
                                    <LinkBack onClick={()=>this.addClass(3)}/>
                                    <MainTitle>Промокоды</MainTitle>
                                </div>
                                <div className={styles["title-button"]}>
                                    <BetweenBlock className={`items-center ${styles["for-title"]}`}>
                                        <MainTitle>Промокоды</MainTitle>
                                        <ButtonWithArrow onClick={() => this.addClass(1)}>Создать промокод</ButtonWithArrow>
                                    </BetweenBlock>
                                    <div className={`${styles["for-title"]} d-flex`}>
                                        <FilterSelector title={this.state.filterStatus[2]} items={this.state.filterStatus}
                                            callback={(data) => {this.setState({...this.state, tableData: data})}}
                                            filter = {["активен", "завершен", ""]} filterStatus={this.state.filterStatus}
                                            data={this.state.Data} addClassName={styles["for-filter"]}> 
                                        </FilterSelector>
                                    </div>
                                </div>
                                <DataTable classTable="admin-table-coupons" emptyText={`Купоны не найдены`} 
                                    linesLimit={5} data={this.state.tableData} 
                                    columns={CPlaceholders.Fields.AdminCoupons["ru"]} render={renderData}>
                                </DataTable>
                            </div>
                        </BetweenBlock>
                    </section>
               </ContainerForPages>
            </>
        ) 
    }
}

export default Users;