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
import SearchInput from '../../components/Assets/Inputs/SearchInput';
import CustomSelector from '../../components/Assets/tags/CustomSelector';
import TableDataManagement from '../../components/Assets/Table/TableDataManagement';
import Popup from '../../components/Assets/Popup/Popup';
import ButtonYes from '../../components/Assets/Buttons/ButtonYes';
import ButtonNo from '../../components/Assets/Buttons/ButtonNo';
import MainButton from '../../components/Assets/Buttons/MainButton';
import InputWithError from '../../components/Assets/Inputs/InputWithError';
import PhoneInput from '../../components/Assets/Inputs/PhoneInput';
import Input from '../../components/Assets/Inputs/Input';
import { Formik } from "formik";
import * as Yup from "yup";
import AlertBlock from '../../components/Assets/Blocks/AlertBlock';
import PanelNavigationAdminMini from '../../components/Assets/Navigations/PanelNavigationAdminMini';
import LinkA from '../../components/Assets/tags/LinkA';
import LinkBack from '../../components/Assets/tags/LinkBack';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeClasses: [false, false, false]};
    }

    addClass(index) {
        const activeClasses = [...this.state.activeClasses.slice(0, index), !this.state.activeClasses[index], this.state.activeClasses.slice(index + 1)].flat();
        this.setState({activeClasses});
        document.body.style.overflow = activeClasses[0] || activeClasses[1] ? 'hidden' : 'overlay';
    }

    closeAlert = () => {
        this.setState({
            changeAlert: false
        });
    }

    render() {

        const activeClasses = this.state.activeClasses.slice();
        let  search  = ["Вот это нашлось", "Вот это нашлось 2", "Вот это нашлось 3", "Вот это нашлось 4"];
        let  filter  = ["По логину", "По почте", "По номеру", "По балансу", "По стране", "По статусу", "По телефону"];
        let  status  = ["Избранный", "Обычный", "Мяу"];

        const schema = Yup.object({
            login: Yup.string().required("Поле не может быть пустым!"),
            email: Yup.string()
                .email("Введите корректный адрес почты")
                .required("Поле не может быть пустым!"),
        });

        return (
            <>  
                <AlertBlock img="alert-success" clickClose={this.closeAlert} title="Готово!"  
                    description="Изменения сохранены!" className={this.state.changeAlert ? "open" : ""}>
                </AlertBlock>
                <Popup clickClose={() => this.addClass(1)} className={activeClasses[1]? "open" : ""}
                    title="Изменить пользователя">
                    <Formik
                        initialValues={{ 
                            login: 'vladislove',
                            email: 'vladislove@yandex.ru',
                            phone: '',
                            country: '',
                            status: ''
                        }}
                        validationSchema={schema}
                        onSubmit = {(values) => {console.log(values)}}>
                        {({ errors, handleSubmit, handleChange, values }) => {

                        const ChangeUser = () => {
                            if (((values.login.length && values.email.length) != 0)) {
                                if (errors.email == undefined) {
                                    this.addClass(1)
                                    this.state.changeAlert = true
                                }
                            }
                        } 

                        return (
                        <>
                            <InputWithError onChange={handleChange} addClassInput="main-input"
                                className="enter" placeholder='Логин' name='login'
                                classError={errors.login ? "view" : ""} 
                                textError={errors.login || "ОК"} value={values.login}/>
                            <InputWithError onChange={handleChange} addClassInput="main-input"
                                className="mail" placeholder='E-mail' name='email'
                                classError={errors.email ? "view" : ""} 
                                textError={errors.email || "ОК"} value={values.email}/>
                            <PhoneInput onChange={handleChange} 
                                className="phone" name="phone" placeholder="Телефон" 
                                addClassInput="main-input" value={values.phone}/>
                            <Input onChange={handleChange} addClassInput="main-input"
                                className="world" placeholder='Страна' name='country'
                                value={values.country}/>
                            <CustomSelector addIMG="status" title="По телефону" items={status}/>
                            <MainButton onMouseUp={ChangeUser} className={styles["button-popup-admin"]} 
                                classButton="link-button" 
                                type="submit" 
                                onClick={handleSubmit}>
                                Сохранить изменения
                            </MainButton>
                        </>
                        );}}
                    </Formik>    
                </Popup>
                <Popup namePopup="yes-no" clickClose={() => this.addClass(0)} className={activeClasses[0]? "open" : ""}
                    title="Вы уверены, что хотите удалить пользователя?">
                    <BetweenBlock>
                        <ButtonYes/>
                        <ButtonNo onClick={() => this.addClass(0)}/>
                    </BetweenBlock>
                </Popup>
               <Container>
                    <section className={`${styles["admins-page"]} ${styles["for-menu"]}`}>
                        <BetweenBlock>
                            <div className={`${styles["menu-navigation"]} ${activeClasses[2] ? styles.hide : ""}`}>
                                <p className='d-flex cursor-pointer items-center' onClick={() => this.addClass(2)}>
                                    <img alt='New order' src='/assets/img/admin-nav-users.svg'></img>
                                    Пользователи
                                </p>
                                <LinkA className='d-flex items-center' href="/admin/history_orders">
                                    <img alt='New order' src='/assets/img/nav-folder.svg'></img>
                                    История заказов
                                </LinkA>
                                <LinkA className='d-flex items-center' href="/admin/history_wallet">
                                    <img alt='New order' src='/assets/img/input-wallet.svg'></img>
                                    История счетов
                                </LinkA>
                            </div>
                            <PanelNavigationAdminMini/>
                            <PanelNavigationAdmin/>
                            <div className={`${styles["right-side"]} ${activeClasses[2] ? styles["not-hide"] : ""}`}>
                                <div className={`pos-relative ${styles["for-back-mobil"]}`}>
                                    <LinkBack onClick={() => this.addClass(2)}/>
                                    <MainTitle>Пользователи</MainTitle>
                                </div>
                                <div className={styles["for-title"]}>
                                    <MainTitle>Пользователи</MainTitle>
                                </div>
                                <div className={`${styles["for-search"]} d-flex`}>
                                    <SearchInput classOption="for-dark-selector" classDiv="admin-search" items={search}/>
                                    <CustomSelector className="admin-selector" title="По телефону" items={filter}/>
                                </div>
                                <CustomTable className="admin-table">
                                    <HeadTable>
                                        <TitleHead></TitleHead>
                                        <TitleHead>Номер аккаунта</TitleHead>
                                        <TitleHead>Логин</TitleHead>
                                        <TitleHead>Баланс</TitleHead>
                                        <TitleHead>Почта</TitleHead>
                                        <TitleHead>Телефон</TitleHead>
                                        <TitleHead>Страна</TitleHead>
                                        <TitleHead>Статус</TitleHead>
                                    </HeadTable>
                                    <tbody>
                                        <tr>
                                            <TableDataManagement clickEdit={() => this.addClass(1)}  clickDelete={() => this.addClass(0)}/>
                                            <TableData color="purple">#1</TableData>
                                            <TableData>karapuz</TableData>
                                            <TableData>1000.88₽</TableData>
                                            <TableData>karapuz@yandex.ru</TableData>
                                            <TableData>+79822349201</TableData>
                                            <TableData>Россия</TableData>
                                            <TableData>Статусный</TableData>
                                        </tr>
                                        <tr>
                                            <TableDataManagement clickEdit={() => this.addClass(1)}  clickDelete={() => this.addClass(0)}/>
                                            <TableData color="purple">#2</TableData>
                                            <TableData>bigkarapuz</TableData>
                                            <TableData>4000.05₽</TableData>
                                            <TableData>bigkarapuz@yandex.ru</TableData>
                                            <TableData>+79111488228</TableData>
                                            <TableData>Таджикистан</TableData>
                                            <TableData>Таджик</TableData>
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