import { Component } from 'react';
import BetweenBlock from '../components/Assets/Blocks/BetweenBlock';
import Container from "../components/Assets/moduls/Container";
import PanelNavigationMain from '../components/Assets/Navigations/PanelNavigationMain';
import CustomTable from '../components/Assets/Table/CustomTable';
import styles from '/public/assets/css/MainPages.module.css'
import HeadTable from '../components/Assets/Table/HeadTable';
import TitleHead from '../components/Assets/Table/TitleHead';
import TableData from '../components/Assets/Table/TableData';
import TableDataStatus from '../components/Assets/Table/TableDataStatus';
import MainButton from '../components/Assets/Buttons/MainButton';
import Pagination from '../components/Assets/Pagination/Pagination';
import NumberPage from '../components/Assets/Pagination/NumberPage';
import CopyInput from '../components/Assets/Inputs/CopyInput';
import Popup from '../components/Assets/Popup/Popup';
import LinkButton from '../components/Assets/Buttons/LinkButton';
import ButtonNo from '../components/Assets/Buttons/ButtonNo';
import ButtonYes from '../components/Assets/Buttons/ButtonYes';
import { Formik } from "formik";
import * as Yup from "yup";
import InputWithError from '../components/Assets/Inputs/InputWithError';
import TextArea from '../components/Assets/Inputs/TextArea';
import CustomSelector from '../components/Assets/tags/CustomSelector';
import ButtonAddFile from '../components/Assets/Buttons/ButtonAddFile';
import AddFile from '../components/Assets/Blocks/AddFile';
import FilterSelector from '../components/Assets/tags/FilterSelector';
import MainTitle from '../components/Assets/tags/MainTitle';
import HTitle from '../components/Assets/tags/HTitle';
import ButtonWithArrow from '../components/Assets/Buttons/ButtonWithArrow';
import PanelNavigationMainMini from '../components/Assets/Navigations/PanelNavigationMainMini';
import { Media } from 'react-breakpoints'

class Referrals extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeClasses: [false, false, false, false],
            addFile: [],
        };
        this.addClass = this.addClass.bind(this);
    }
    
    addClass(index) {
        const activeClasses = [...this.state.activeClasses.slice(0, index), !this.state.activeClasses[index], this.state.activeClasses.slice(index + 1)].flat();
        this.setState({activeClasses});
        document.body.style.overflow = (activeClasses[0] || activeClasses[1] || activeClasses[2] || activeClasses[3]) ? 'hidden' : 'overlay';
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

    render() {

        const schema = Yup.object({
            summ: Yup.string().test('', 'Минимальная сумма для вывода 300₽', value => value > 299 ),
        });

        const schemaSupport = Yup.object({
            theme: Yup.string().required("Поле не может быть пустым!"),
            message: Yup.string().required("Поле не может быть пустым!"),
        });

        const activeClasses = this.state.activeClasses.slice();
        let type  = ["Технический", "Не технический", "Гипер технический"];
        let filter  = ["подтвержденные", "неподтвержденные", "все записи"];

        return (
            <>
                <Popup clickClose={() => this.addClass(3)} className={activeClasses[3]? "open" : ""} title="Создать обращение">
                    <Formik
                        initialValues={{
                            type: '',
                            theme: '',
                            message: '',
                        }}
                        validationSchema={schemaSupport}
                        onSubmit = {(values) => {console.log(values)}}>
                        {({ errors, handleSubmit, handleChange, values }) => {

                        const ChangeLink = () => {
                            if (values.theme.length && values.message.length > 0 ) {
                                this.state.linkPage = "/dialog_support";
                            } else {
                                this.state.linkPage = "";
                            }
                        }

                        const sendSupport = () => {
                            if (values.theme.length && values.message.length > 0 ) {
                                this.addClass(3)
                            } 
                        }

                        return (
                        <>
                            <div>
                                <CustomSelector addClassName={styles["margin-selector"]} addIMG="pen" title="Выберите тип обращения" items={type}/>
                                <InputWithError className="chat" name="theme" onChange={handleChange} onKeyUp={ChangeLink()} 
                                    placeholder='Тема обращения' type="text"
                                    classError={errors.theme ? "view" : ""} addClassInput="main-input"
                                    textError={errors.theme || "ОК"} value={values.theme}/>
                                <TextArea name="message" onChange={handleChange}  onKeyUp={ChangeLink()} 
                                    placeholder='Напишите сообщение' type="text"
                                    classError={errors.message ? "view" : ""} addClassInput="main-input"
                                    textError={errors.message || "ОК"} value={values.message}/>
                            </div>
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
                <Popup clickClose={() => this.addClass(2)} className={activeClasses[2]? "open" : ""} title="Выведение средств на баланс">
                    <Formik
                        initialValues={{ 
                            summ: 300,
                        }}
                        validationSchema={schema}
                        onSubmit = {(values) => {console.log(values)}}>
                        {({ errors, handleSubmit, handleChange, values }) => {

                        const outputMoney = () => {
                            if (values.summ > 299) {
                                this.addClass(2)
                            } 
                        }
                        
                        return (
                        <>
                            <InputWithError className="wallet" name="summ" onChange={handleChange} 
                                placeholder='Сумма' type="number"
                                classError={errors.summ ? "view" : ""} addClassInput="main-input"
                                textError={errors.summ || "ОК"} value={values.summ}/>
                            <div className={styles["for-note"]}>
                                <p>Вы уверены, что хотите перевести <span>{`${values.summ}₽`}</span> на свой баланс?</p>
                            </div> 
                            <BetweenBlock>
                                <ButtonYes type="submit" onClick={() => {handleSubmit(), outputMoney()}}/> 
                                <ButtonNo onClick={() => this.addClass(2)}/>
                            </BetweenBlock>   
                        </>
                        );}}
                    </Formik>
                </Popup>

                <Popup namePopup="popup-text" clickClose={() => this.addClass(1)} className={activeClasses[1]? "open" : ""} title="Выведение средств">
                    <div>
                        <p>Чтобы вывести средства на платежную систему, необходимо 
                            составить обращение в поддержку
                        </p>
                    </div>
                    <MainButton onMouseUp={() => this.addClass(1)} onClick={() => this.addClass(3)} classButton="link-button">Создать обращение</MainButton>
                </Popup>

                <Popup namePopup="popup-text" clickClose={() => this.addClass(0)} className={activeClasses[0]? "open" : ""} title="Выведение средств">
                    <div>
                        <p>Вы можете <span onMouseUp={() => this.addClass(2)} onClick={() => this.addClass(0)} className='transition_0_3 cursor-pointer'>
                            вывести средства на баланс
                        </span></p>
                        <p>или <span onMouseUp={() => this.addClass(1)} onClick={() => this.addClass(0)} className='transition_0_3 cursor-pointer'>
                            вывести средства на платежную систему
                        </span></p>
                    </div>
                    <LinkButton onClick={() => this.addClass(0)} href="/my_orders">Перейти в мои заказы</LinkButton>
                </Popup>
                <Container>
                    <section className={styles["page-referral"]}>
                        <BetweenBlock>
                            <PanelNavigationMainMini/>
                            <PanelNavigationMain/>
                            <div className={styles["right-side"]}>
                                <Media>
                                    {({ breakpoints, currentBreakpoint }) =>
                                        breakpoints[currentBreakpoint] < breakpoints.mobile360 ? (
                                        <>
                                            <BetweenBlock className={`items-center ${styles["for-title"]} ${styles["title-margin-23"]}`}>
                                                <MainTitle className={styles.balance}>Рефералы</MainTitle>
                                            </BetweenBlock>
                                            <div className={styles["for-information-ref"]}>
                                                <p>
                                                    Комиссионная ставка 
                                                    <span> 7%</span>
                                                </p>
                                                <p>
                                                    Минимальная выплата
                                                    <span> 300.00₽</span>
                                                </p>
                                            </div>
                                            <ButtonWithArrow className="margin-auto" onClick={() => this.addClass(0)}>Вывести деньги</ButtonWithArrow>
                                        </>
                                        ) : (
                                        <>
                                            <BetweenBlock className={`items-center ${styles["for-title"]} ${styles["title-margin-23"]}`}>
                                                <MainTitle className={styles.balance}>Рефералы</MainTitle>
                                                <ButtonWithArrow onClick={() => this.addClass(0)}>Вывести деньги</ButtonWithArrow>
                                            </BetweenBlock>
                                            <div className={styles["for-information-ref"]}>
                                                <p>
                                                    Комиссионная ставка 
                                                    <span> 7%</span>
                                                </p>
                                                <p>
                                                    Минимальная выплата
                                                    <span> 300.00₽</span>
                                                </p>
                                            </div>
                                        </>
                                        )
                                    }
                                </Media>


                                






                                <div className={styles["for-copy"]}>
                                    <p><strong>Реферальная ссылка</strong></p>
                                    <CopyInput className="ref" value="357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P"
                                        description="Реферальная ссылка успешно скопирована"/>
                                </div>
                                <CustomTable className="table-statistics-ref">
                                    <HeadTable>
                                        <TitleHead>Всего<br/>переходов</TitleHead>
                                        <TitleHead>Регистрации</TitleHead>
                                        <TitleHead>Активные</TitleHead>
                                        <TitleHead>Конверсия</TitleHead>
                                        <TitleHead>Доход (общий)</TitleHead>
                                    </HeadTable>
                                    <tbody>
                                        <tr>
                                            <TableData>17</TableData>
                                            <TableData>10</TableData>
                                            <TableData>2</TableData>
                                            <TableData>3.00%</TableData>
                                            <TableData>49.00₽</TableData>
                                        </tr>
                                    </tbody>
                                </CustomTable>
                                <BetweenBlock className={`items-center ${styles["for-title-two"]} ${styles["for-double-title"]}`}>
                                    <HTitle>История</HTitle>
                                    <FilterSelector title="подтвержденные" items={filter}/>
                                </BetweenBlock>
                                <CustomTable className="table-referrals">
                                    <HeadTable>
                                        <TitleHead>Дата</TitleHead>
                                        <TitleHead>Логин</TitleHead>
                                        <TitleHead>Сумма</TitleHead>
                                        <TitleHead>Статус</TitleHead>
                                    </HeadTable>
                                    <tbody>
                                        <tr>
                                            <TableData>20.02.2022</TableData>
                                            <TableData>vladikmadik</TableData>
                                            <TableData>500.00₽</TableData>
                                            <TableDataStatus ColorStatus="green">подтвержден</TableDataStatus>
                                            
                                        </tr>
                                        <tr>
                                            <TableData>15.02.2022</TableData>
                                            <TableData>anastasiagord</TableData>
                                            <TableData>200.00₽</TableData>
                                            <TableDataStatus ColorStatus="green">подтвержден</TableDataStatus>
                                        </tr>
                                    </tbody>
                                </CustomTable>
                                <BetweenBlock className={`items-center ${styles["for-pagination"]}`}>
                                    <Pagination>
                                        <NumberPage className="select">1</NumberPage>
                                        <NumberPage>2</NumberPage>
                                        <NumberPage>3</NumberPage>
                                        <NumberPage>...</NumberPage>
                                        <NumberPage>10</NumberPage>
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

export default Referrals;