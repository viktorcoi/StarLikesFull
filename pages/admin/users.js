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
import DataUsers from '../../components/Assets/Context/AdminContext.js/DataUsers';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeClasses: [false, false, false],
            id: "",
            numberAcc: "",
            login: "",
            balance: "",
            mail: "",
            phone: "",
            country: "",
            status: "",
            filter: "Сортировка",
            Data: [...DataUsers],
            statusSelector: ["Избранный", "Обычный", "Мяу"],
            filterSelector: ["По логину", "По почте", "По номеру", "По балансу", "По стране", "По статусу", "По телефону"],
        };
        this.addClass = this.addClass.bind(this);
    }

    addClass(index, v) {
        const activeClasses = [...this.state.activeClasses.slice(0, index), !this.state.activeClasses[index], this.state.activeClasses.slice(index + 1)].flat();
        this.setState({ 
            activeClasses, 
            id: v?.id,
            numberAcc: v?.numberAcc, 
            login: v?.login, 
            mail: v?.mail, 
            phone: v?.phone,
            country: v?.country,
            status: v?.status,
        });
        document.body.style.overflow = activeClasses[0] || activeClasses[1] ? 'hidden' : 'overlay';
    }

    closeAlert = () => {
        this.setState({
            changeAlert: false
        });
    }

    render() {

        const tableUsers = this.state.Data.filter(v => ((!this.state.statusFilter) || v.status == this.state.statusFilter)).map((v, idx) => { 
            return (
            <tr key={`v-${idx}`}>
                <TableDataManagement clickEdit={() => this.addClass(1, v)}  clickDelete={() => {this.addClass(0, v), console.log(v)}}/>
                <TableData color="purple">{v.numberAcc}</TableData>
                <TableData>{v.login}</TableData>
                <TableData>{v.balance}</TableData>
                <TableData>{v.mail}</TableData>
                <TableData>{v.phone}</TableData>
                <TableData>{v.country}</TableData>
                <TableData>{v.status}</TableData>
            </tr>
        )});

        const activeClasses = this.state.activeClasses.slice();
        let  search  = ["Вот это нашлось", "Вот это нашлось 2", "Вот это нашлось 3", "Вот это нашлось 4"];

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
                        enableReinitialize={true}
                        initialValues={{ 
                            login: this.state.login,
                            email: this.state.mail,
                            phone: this.state.phone,
                            country: this.state.country,
                            status: this.state.status
                        }}
                        validationSchema={schema}
                        onSubmit = {(values) => {console.log(values)}}>
                        {({ errors, handleSubmit, handleChange, values }) => {

                        const ChangeUser = () => {
                            if (((values.login.length && values.email.length) != 0)) {
                                if (errors.email == undefined) {
                                    setTimeout(() => {
                                        this.state.changeAlert = true
                                        this.addClass(1)
                                    }, 1);
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
                            <CustomSelector onChange={handleChange} value={values.status} 
                            onClick={(e)=> (this.setState({ ...this.state, status: e.target.innerText}))}
                            addIMG="status" title={values.status} items={this.state.statusSelector}/>
                            <MainButton  className={styles["button-popup-admin"]} 
                                classButton="link-button" 
                                type="submit" 
                                onClick={()=>{handleSubmit(), ChangeUser()}}>
                                Сохранить изменения
                            </MainButton>
                        </>
                        );}}
                    </Formik>    
                </Popup>
                <Popup namePopup="yes-no" clickClose={() => this.addClass(0)} className={activeClasses[0]? "open" : ""}
                    title="Вы уверены, что хотите удалить пользователя?">
                    <BetweenBlock>
                        <ButtonYes onClick={(v) => this.DeleteData(v)}/>
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
                                    <CustomSelector className="admin-selector"
                                        onClick={(e)=> (this.setState({ ...this.state, filter: e.target.innerText}))} 
                                        title={this.state.filter} items={this.state.filterSelector}/>
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
                                        {tableUsers}
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