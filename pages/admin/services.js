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

class Services extends Component {

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
            changeAlert: false
        });
    }

    render() {

        const activeClasses = this.state.activeClasses.slice();
        let filterStatus  = ["активные", "завершеные", "все записи"];
        let statusCoupon  = ["Скрыто", "Активен"];

        const schema = Yup.object({
            number: Yup.string().required("Поле не может быть пустым!"),
            social: Yup.string().required("Поле не может быть пустым!"),
            type: Yup.string().required("Поле не может быть пустым!"),
            price: Yup.string().required("Поле не может быть пустым!"),
            description: Yup.string().required("Поле не может быть пустым!"),
        });

        return (
            <>  
                <AlertBlock img="alert-success" clickClose={this.closeAlert} title="Готово!"  
                    description="Услуга успешно изменена!" className={this.state.changeAlert ? "open" : ""}>
                </AlertBlock>
                <Popup clickClose={() => this.addClass(2)} className={activeClasses[2]? "open" : ""}
                    title="Изменение услуги">
                    <Formik
                        initialValues={{ 
                            number: '1',
                            social: 'Instagram',
                            type: '👥 Instagram Followers - REAL+ AUTREFILL 30...',
                            price: '00.33',
                            description: `🔴 AFTER ORDERING, YOU NEED TO WRITE TO SUPPORT YOUR ORDER \nNUMBER AND WAIT FOR SUPPORT TO LAUNCH YOUR ORDER \n⏱ Start: 1-30 min \n⚡️ Speed: 10000/D \n✔ Quality : REAL AND NO DROP`,
                            status: ''
                        }}
                        validationSchema={schema}
                        onSubmit = {(values) => {console.log(values)}}>
                        {({ errors, handleSubmit, handleChange, values }) => {

                        const ChangeService = () => {
                            if (((values.number && values.price) > 0 && (values.social.length && values.type.length 
                                && values.description.length ) != 0)) {
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
                                className="social" placeholder='Соц. сеть' name='social'
                                classError={errors.social ? "view" : ""} 
                                textError={errors.social || "ОК"} value={values.social}/>
                            <InputWithError onChange={handleChange} addClassInput="main-input"
                                className="type" placeholder='Тип' name='type'
                                classError={errors.type ? "view" : ""} 
                                textError={errors.type || "ОК"} value={values.type}/>
                            <InputWithError onChange={handleChange} addClassInput="main-input"
                                className="ruble" placeholder='Стоимость' name='price' type="number"
                                classError={errors.price ? "view" : ""} 
                                textError={errors.price || "ОК"} value={values.price}/>
                            <TextArea name="description" onChange={handleChange}
                                placeholder='Описание услуги' type="text"
                                classError={errors.description ? "view" : ""} addClassInput="main-input"
                                textError={errors.description || "ОК"} value={values.description}/>
                            <CustomSelector addIMG="status" title="Статус" items={statusCoupon}/>
                            <MainButton onMouseUp={ChangeService} className={styles["button-popup-admin"]} 
                                classButton="link-button" 
                                type="submit" 
                                onClick={handleSubmit}>
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
                                                <SocialBlock className={v.select} img={v.img}>
                                                    {v.name}
                                                </SocialBlock>
                                            );
                                        })
                                    }
                                </div>
                                <div className={`${styles["for-title"]} d-flex`}>
                                    <FilterSelector addClassName={styles["for-filter"]} title="активные" items={filterStatus}/>
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
                                        <tr>
                                            <TableDataManagement clickEdit={() => this.addClass(2)}  clickDelete={() => this.addClass(0)}>
                                                <img onClick={() => this.addClass(1)} className={`${activeClasses[3]? styles.hide : ""} ${styles["hide-service"]} cursor-pointer`} 
                                                    alt='hide' src="/assets/img/view-table.svg"/>
                                            </TableDataManagement>
                                            <TableData dataName={activeClasses[3] ? "hide" : ""}>#1</TableData>
                                            <TableData dataName={activeClasses[3] ? "hide" : ""}>Instagram</TableData>
                                            <TableData dataName={activeClasses[3] ? "hide" : ""}>👥 Instagram Followers - REAL+ AUTREFILL 30...</TableData>
                                            <TableData dataName={activeClasses[3] ? "hide" : ""}>00.33₽</TableData>
                                            <TableDataStatus ColorStatus={activeClasses[3] ? "red" : "green"}>{activeClasses[3] ? "скрыто" : "активен"}</TableDataStatus>
                                        </tr>
                                        <tr>
                                            <TableDataManagement clickEdit={() => this.addClass(2)}  clickDelete={() => this.addClass(0)}>
                                            <img className={`${styles.hide} ${styles["hide-service"]} cursor-pointer`} 
                                                    alt='hide' src="/assets/img/view-table.svg"/>
                                            </TableDataManagement>
                                            <TableData dataName="hide">#2</TableData>
                                            <TableData dataName="hide">Instagram</TableData>
                                            <TableData dataName="hide">👥 Instagram Followers - REAL+ AUTREFILL 30...</TableData>
                                            <TableData dataName="hide">00.33₽</TableData>
                                            <TableDataStatus dataName="hide" ColorStatus="red">скрыто</TableDataStatus>
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

export default Services;