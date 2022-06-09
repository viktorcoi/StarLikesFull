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
import DataService from '../../components/Assets/Context/AdminContext/DataService';

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
            changeAlert: false,
            description: "",
            socialFilter: "instagram",
            statusCoupon: ["Скрыто", "Активен"],
            filterStatus: ["активные", "скрытые", "все записи"],
            Data: [...DataService],
            tableData: [],
        };
        this.state.tableData = this.state.Data
    }

    addClass(index, v) {
        const activeClasses = [...this.state.activeClasses.slice(0, index), !this.state.activeClasses[index], this.state.activeClasses.slice(index + 1)].flat();
        this.setState({
            activeClasses,
            id: v?.id,
            number: Number(v?.number.match(/\d+/)) ? Number(v?.number.match(/\d+/)) : "",
            social: v?.social,
            type: v?.type,
            price: Number(v?.price.slice(0, -1)) ? Number(v?.price.slice(0, -1)) : "",
            status: v?.status,
            color: v?.color,
            hide: v?.hide,
            description: v?.description,
        });
        document.body.style.overflow = activeClasses[0] || activeClasses[1] || activeClasses[2] ? 'hidden' : 'overlay';
    }

    closeAlert = () => {
        this.setState({
            changeAlert: false
        });
    }

    ChooseSocial = (e) => {
        this.setState({ ...this.state, socialFilter: e.target.innerText.toLowerCase()})
        if (e.target.innerText.toLowerCase() == "") {
            this.setState({...this.state, socialFilter: e.target.getAttribute("alt").toLowerCase()})
        }
    }

    changeClickStatus = (e) => {
        let filter = [];
        for (var i = 0; i < 3; i++) {
            if (e.target.innerText.toLowerCase() == this.state.filterStatus[i]) {
                filter[0] = "активен"
                filter[1] = "скрыто"
                filter[2] = ""
                this.setState({ ...this.state, statusFilter: filter[i]});
            }
        }
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

        const renderTableWallet = (data) => {
            return data.filter((v) => (((v.social == this.state.socialFilter && ((!this.state.statusFilter) || v.status == this.state.statusFilter))))).map((v,idx) => {
                return (
                    <>
                        <tr key={`v-${idx}`}>
                            <TableDataManagement clickEdit={() => this.addClass(2, v)}  clickDelete={() => this.addClass(0)}>
                            <img onClick={() => this.addClass(1)} className={`${activeClasses[3]? styles.hide : styles[v.hide]} ${styles["hide-service"]} cursor-pointer`} 
                                alt='hide' src="/assets/img/view-table.svg"/>
                            </TableDataManagement>
                            <TableData dataName={activeClasses[3] ? "hide" : v.hide}>{v.number}</TableData>
                            <TableData dataName={activeClasses[3] ? "hide" : v.hide}>{v.social}</TableData>
                            <TableData dataName={activeClasses[3] ? "hide" : v.hide}>{v.type}</TableData>
                            <TableData dataName={activeClasses[3] ? "hide" : v.hide}>{v.price}</TableData>
                            <TableDataStatus ColorStatus={activeClasses[3] ? "red" : v.color}>{activeClasses[3] ? "скрыто" : v.status}</TableDataStatus>
                        </tr>
                    </>
                );
            });
        }

        return (
            <>  
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
                        onSubmit = {(values) => {console.log(values)}}>
                        {({ errors, handleSubmit, values }) => {

                        const ChangeService = () => {
                            if (((values.number && values.price) > 0 && (values.social.length && values.type.length 
                                && values.description.length ) != 0)) {
                                    this.state.changeAlert = true;
                                    setTimeout(() => {
                                        this.addClass(2)
                                    }, 1);
                                    this.setState({number: `#${values.number}`})
                                    this.setState({price: `${values.price}₽`})
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
                        <ButtonYes/>
                        <ButtonNo onClick={() => this.addClass(0)}/>
                    </BetweenBlock>
                </Popup>

                <Popup namePopup="yes-no" clickClose={() => this.addClass(1)} className={activeClasses[1]? "open" : ""}
                    title="Вы уверены, что хотите скрыть услугу?">
                    <BetweenBlock>
                        <ButtonYes onMouseUp={() => this.addClass(3)} onClick={() => this.addClass(1)}/>
                        <ButtonNo onClick={() => this.addClass(1)}/>
                    </BetweenBlock>
                </Popup>

               <Container>
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
                                                <SocialBlock onClick={this.ChooseSocial}
                                                    className={v.select} img={v.img} alt={v.name}>
                                                    {v.name}
                                                </SocialBlock>
                                            );
                                        })
                                    }
                                </div>
                                <div className={`${styles["for-title"]} d-flex`}>
                                    <FilterSelector addClassName={styles["for-filter"]} onClick={(e)=> this.changeClickStatus(e)}
                                        title={this.state.filterStatus[2]} items={this.state.filterStatus}/>
                                </div>
                                <CustomTable className="admin-table">
                                    <HeadTable>
                                        <TitleHead></TitleHead>
                                        <TitleHead>Номер услуги</TitleHead>
                                        <TitleHead>Соц. сеть</TitleHead>
                                        <TitleHead>Вид накрутки</TitleHead>
                                        <TitleHead>Цена за шт.</TitleHead>
                                        <TitleHead>Статус</TitleHead>
                                    </HeadTable>
                                    <tbody>
                                        {renderTableWallet(this.state.tableData)}
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

export default Services;