import { Component } from 'react'
import ContainerForPages from "../../components/Assets/moduls/ContainerForPages";
import styles from '/public/assets/css/AdminsPages.module.css'
import BetweenBlock from '../../components/Assets/Blocks/BetweenBlock';
import TableData from '../../components/Assets/Table/TableData';
import MainTitle from '../../components/Assets/tags/MainTitle'
import PanelNavigationAdmin from '../../components/Assets/Navigations/PanelNavigationAdmin';
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
import DataUsers from '../../components/Assets/Table/Data/Admin/DataUsers';
import DataTable from '../../components/Assets/Table/DataTable';
import CPlaceholders from '../../models/Placeholders/Client/index';
import DataTableColumn from '../../components/Assets/Table/DataTableColumn';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeClasses: [false, false, false],
            id: "",
            number: "",
            login: "",
            balance: "",
            mail: "",
            phone: "",
            country: "",
            status: "",
            Data: [...DataUsers],
            statusSelector: ["Избранный", "Обычный", "Мяу"],
            filterSelector: ["По логину", "По почте", "По номеру", "По балансу", "По стране", "По статусу", "По телефону"],
            tableData: [],
            filterField: "По логину"
        };
        this.addClass = this.addClass.bind(this);
    }

    addClass(index, v) {
        const activeClasses = [...this.state.activeClasses.slice(0, index), !this.state.activeClasses[index], this.state.activeClasses.slice(index + 1)].flat();
        this.setState({ 
            activeClasses, 
            id: v?.id,
            number: v?.number, 
            login: v?.login, 
            mail: v?.mail, 
            phone: v?.phone,
            country: v?.country,
            status: v?.status,
        });
        document.body.style.overflow = activeClasses[0] || activeClasses[1] ? 'hidden' : 'overlay';
    }

    render() {

        const renderData = (v, i) => {
            return (
                <DataTableColumn key={i}>
                    <TableDataManagement clickEdit={() => this.addClass(1, v)}  clickDelete={() => {this.addClass(0, v), console.log(v)}}/>
                    <TableData color="purple">{`#${v.number}`}</TableData>
                    <TableData>{v.login}</TableData>
                    <TableData>{`${v.balance}₽`}</TableData>
                    <TableData>{v.mail}</TableData>
                    <TableData>{v.phone}</TableData>
                    <TableData>{v.country}</TableData>
                    <TableData>{v.status}</TableData>
                </DataTableColumn>
            );
        }

        const activeClasses = this.state.activeClasses.slice();

        const schema = Yup.object({
            login: Yup.string().required("Поле не может быть пустым!"),
            email: Yup.string()
                .email("Введите корректный адрес почты")
                .required("Поле не может быть пустым!"),
        });

        return (
            <>  
                <AlertBlock Alert = {this.state.changeAlert} 
                    callback = {(v) => {this.setState({...this.state, changeAlert: v})}} 
                    img="alert-success"  title="Готово!" description="Изменения сохранены!">
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
                        {({ errors, handleSubmit, values }) => {

                        const ChangeUser = () => {
                            if (((values.login.length && values.email.length) != 0)) {
                                if (errors.email == undefined) {
                                    this.state.changeAlert = true;
                                    setTimeout(() => {
                                        this.addClass(1)
                                    }, 1);
                                }
                            }
                        } 
                        
                        return (
                        <>
                            <InputWithError onChange={(e)=> this.setState({ login: e.target.value })} addClassInput="main-input"
                                className="enter" placeholder='Логин' name='login'
                                classError={errors.login ? "view" : ""} 
                                textError={errors.login || "ОК"} value={values.login}/>
                            <InputWithError onChange={(e)=> this.setState({ mail: e.target.value })} addClassInput="main-input"
                                className="mail" placeholder='E-mail' name='email'
                                classError={errors.email ? "view" : ""} 
                                textError={errors.email || "ОК"} value={values.email}/>
                            <PhoneInput onChange={(e)=> this.setState({ phone: e.target.value })} 
                                className="phone" name="phone" placeholder="Телефон" 
                                addClassInput="main-input" value={values.phone}/>
                            <Input onChange={(e)=> this.setState({ country: e.target.value })} addClassInput="main-input"
                                className="world" placeholder='Страна' name='country'
                                value={values.country}/>
                            <CustomSelector value={values.status} 
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
               <ContainerForPages>
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
                                    <SearchInput filterField={this.state.filterField} 
                                        data={this.state.Data} callback={(data) => {this.setState({...this.state, tableData: data})}}
                                        classOption="for-dark-selector" classDiv="admin-search"/>
                                    <CustomSelector className="admin-selector"
                                        onClick={(e)=> this.setState({ ...this.state, filterField: e.target.innerText})} 
                                        title={this.state.filterField} items={this.state.filterSelector}/>
                                </div>
                                <DataTable classTable="admin-table" emptyText={`Пользователи не найдены`} 
                                    linesLimit={5} data={this.state.tableData} 
                                    columns={CPlaceholders.Fields.AdminUsers["ru"]} render={renderData}>
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