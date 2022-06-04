import { Component } from 'react'
import Container from "../../components/Assets/moduls/Container";
import styles from '/public/assets/css/AdminsPages.module.css'
import BetweenBlock from '../../components/Assets/Blocks/BetweenBlock';
import CustomTable from '../../components/Assets/Table/CustomTable';
import HeadTable from '../../components/Assets/Table/HeadTable';
import TitleHead from '../../components/Assets/Table/TitleHead';
import TableData from '../../components/Assets/Table/TableData';
import MainTitle from '../../components/Assets/tags/MainTitle'
import PanelNavigationAdmin from '../../components/Assets/Navigations/PanelNavigationAdmin';
import Pagination from '../../components/Assets/Pagination/Pagination';
import NumberPage from '../../components/Assets/Pagination/NumberPage';
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

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeClasses: [false, false, false, false]};
    }

    addClass(index) {
        const activeClasses = [...this.state.activeClasses.slice(0, index), !this.state.activeClasses[index], this.state.activeClasses.slice(index + 1)].flat();
        this.setState({activeClasses});
        document.body.style.overflow = activeClasses[0] || activeClasses[1] || activeClasses[2] ? 'hidden' : 'overlay';
    }

    closeAlert = () => {
        this.setState({
            createAlert: false,
            changeAlert: false
        });
    }

    render() {

        const activeClasses = this.state.activeClasses.slice();
        let filterStatus  = ["активные", "завершеные", "все записи"];
        let statusCoupon  = ["Активен", "Завершен"];

        const schema = Yup.object({
            number: Yup.string().required("Поле не может быть пустым!"),
            name: Yup.string().required("Поле не может быть пустым!"),
            type: Yup.string().required("Поле не может быть пустым!"),
            action: Yup.string().required("Поле не может быть пустым!"),
        });

        return (
            <>  
                <AlertBlock img="alert-success" clickClose={this.closeAlert} title="Готово!"  
                    description="Промокод успешно создан!" className={this.state.createAlert ? "open" : ""}>
                </AlertBlock>
                <AlertBlock img="alert-success" clickClose={this.closeAlert} title="Готово!"  
                    description="Промокод успешно изменен!" className={this.state.changeAlert ? "open" : ""}>
                </AlertBlock>
                <Popup clickClose={() => this.addClass(1)} className={activeClasses[1]? "open" : ""}
                    title="Создание промокода">
                    <Formik
                        initialValues={{ 
                            number: '',
                            name: '',
                            type: '',
                            action: '',
                            status: ''
                        }}
                        validationSchema={schema}
                        onSubmit = {(values) => {console.log(values)}}>
                        {({ errors, handleSubmit, handleChange, values }) => {

                        const CreateCoupon = () => {
                            if ((values.number > 0 && (values.name.length && values.type.length && values.action.length) != 0)) {
                                this.addClass(1)
                                this.state.createAlert = true
                            }
                        } 

                        return (
                        <>
                            <InputWithError onChange={handleChange} addClassInput="main-input"
                                className="sharp" placeholder='Номер' name='number' type="number"
                                classError={errors.number ? "view" : ""} 
                                textError={errors.number || "ОК"} value={values.number}/>
                            <InputWithError onChange={handleChange} addClassInput="main-input"
                                className="coupon" placeholder='Название' name='name'
                                classError={errors.name ? "view" : ""} 
                                textError={errors.name || "ОК"} value={values.name}/>
                            <InputWithError onChange={handleChange} addClassInput="main-input"
                                className="type" placeholder='Тип' name='type'
                                classError={errors.type ? "view" : ""} 
                                textError={errors.type || "ОК"} value={values.type}/>
                            <InputWithError onChange={handleChange} addClassInput="main-input"
                                className="plus" placeholder='Действие' name='action'
                                classError={errors.action ? "view" : ""} 
                                textError={errors.action || "ОК"} value={values.action}/>
                            <CustomSelector addIMG="status" title="Статус" items={statusCoupon}/>
                            <MainButton onMouseUp={CreateCoupon} className={styles["button-popup-admin"]} 
                                classButton="link-button" 
                                type="submit" 
                                onClick={handleSubmit}>
                                Создать промокод
                            </MainButton>
                        </>
                        );}}
                    </Formik>    
                </Popup>
                <Popup clickClose={() => this.addClass(2)} className={activeClasses[2]? "open" : ""}
                    title="Редактирование промокода">
                    <Formik
                        initialValues={{ 
                            number: '1',
                            name: 'NEW10',
                            type: 'Баланс',
                            action: '+200.00₽',
                            status: ''
                        }}
                        validationSchema={schema}
                        onSubmit = {(values) => {console.log(values)}}>
                        {({ errors, handleSubmit, handleChange, values }) => {

                        const ChangeCoupon = () => {
                            if ((values.number > 0 && (values.name.length && values.type.length && values.action.length) != 0)) {
                                this.addClass(2)
                                this.state.changeAlert = true
                            }
                        } 

                        return (
                        <>
                            <InputWithError onChange={handleChange} addClassInput="main-input"
                                className="sharp" placeholder='Номер' name='number' type="number"
                                classError={errors.number ? "view" : ""} 
                                textError={errors.number || "ОК"} value={values.number}/>
                            <InputWithError onChange={handleChange} addClassInput="main-input"
                                className="coupon" placeholder='Название' name='name'
                                classError={errors.name ? "view" : ""} 
                                textError={errors.name || "ОК"} value={values.name}/>
                            <InputWithError onChange={handleChange} addClassInput="main-input"
                                className="type" placeholder='Тип' name='type'
                                classError={errors.type ? "view" : ""} 
                                textError={errors.type || "ОК"} value={values.type}/>
                            <InputWithError onChange={handleChange} addClassInput="main-input"
                                className="plus" placeholder='Действие' name='action'
                                classError={errors.action ? "view" : ""} 
                                textError={errors.action || "ОК"} value={values.action}/>
                            <CustomSelector addIMG="status" title="Статус" items={statusCoupon}/>
                            <MainButton onMouseUp={ChangeCoupon} className={styles["button-popup-admin"]} 
                                classButton="link-button" 
                                type="submit" 
                                onClick={handleSubmit}>
                                Редактровать промокод
                            </MainButton>
                        </>
                        );}}
                    </Formik>    
                </Popup>
                <Popup namePopup="yes-no" clickClose={() => this.addClass(0)} className={activeClasses[0]? "open" : ""}
                    title="Вы уверены, что хотите удалить промокод?">
                    <BetweenBlock>
                        <ButtonYes/>
                        <ButtonNo onClick={() => this.addClass(0)}/>
                    </BetweenBlock>
                </Popup>
               <Container>
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
                                        <FilterSelector addClassName={styles["for-filter"]} title="активные" items={filterStatus}/>
                                    </div>
                                </div>
                                <CustomTable className="admin-table-coupons">
                                    <HeadTable>
                                        <TitleHead></TitleHead>
                                        <TitleHead>Номер промокода</TitleHead>
                                        <TitleHead>Имя</TitleHead>
                                        <TitleHead>Тип</TitleHead>
                                        <TitleHead>Действие</TitleHead>
                                        <TitleHead>Статус</TitleHead>
                                    </HeadTable>
                                    <tbody>
                                        <tr>
                                            <TableDataManagement clickEdit={() => this.addClass(2)}  clickDelete={() => this.addClass(0)}/>
                                            <TableData>#1</TableData>
                                            <TableData>NEW10</TableData>
                                            <TableData>Баланс</TableData>
                                            <TableData>+200.00₽</TableData>
                                            <TableDataStatus ColorStatus="green">активен</TableDataStatus>
                                        </tr>
                                        <tr>
                                            <TableDataManagement clickEdit={() => this.addClass(2)}  clickDelete={() => this.addClass(0)}/>
                                            <TableData>#2</TableData>
                                            <TableData>STAR20</TableData>
                                            <TableData>Скидка</TableData>
                                            <TableData>-20%</TableData>
                                            <TableDataStatus ColorStatus="green">активен</TableDataStatus>
                                        </tr>
                                    </tbody>
                                </CustomTable>
                                <BetweenBlock className={`items-center ${styles["for-pagination"]}`}>
                                    <Pagination>
                                        <NumberPage className="select">1</NumberPage>
                                        <NumberPage>2</NumberPage>
                                        <NumberPage>3</NumberPage>
                                        <NumberPage>...</NumberPage>
                                        <NumberPage>32</NumberPage>
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

export default Users;