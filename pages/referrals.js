import { Component } from 'react';
import BetweenBlock from '../components/Assets/Blocks/BetweenBlock';
import ContainerForPages from "../components/Assets/moduls/ContainerForPages";
import PanelNavigationMain from '../components/Assets/Navigations/PanelNavigationMain';
import styles from '/public/assets/css/MainPages.module.css'
import TableData from '../components/Assets/Table/TableData';
import TableDataStatus from '../components/Assets/Table/TableDataStatus';
import MainButton from '../components/Assets/Buttons/MainButton';
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
import FilterSelector from '../components/Assets/tags/FilterSelector';
import MainTitle from '../components/Assets/tags/MainTitle';
import HTitle from '../components/Assets/tags/HTitle';
import ButtonWithArrow from '../components/Assets/Buttons/ButtonWithArrow';
import PanelNavigationMainMini from '../components/Assets/Navigations/PanelNavigationMainMini';
import { Media } from 'react-breakpoints'
import DataReferral from '../components/Assets/Table/Data/Users/DataReferral';
import DataTable from '../components/Assets/Table/DataTable';
import CPlaceholders from '../models/Placeholders/Client/index';
import DataTableColumn from '../components/Assets/Table/DataTableColumn';
import DataInfoRefferal from '../components/Assets/Table/Data/DataInfoRefferals';
import AddImageFromPopup from '../components/Assets/Blocks/AddImageFromPopup';

class Referrals extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeClasses: [false, false, false, false],
            filterStatus: ["подтвержденные", "не подтвержденные", "все записи"],
            Data: [...DataReferral],
            DataInfo: [...DataInfoRefferal],
            tableData: [],
            tableDataInfo: [],
            typeSelector: ["Технический", "Не технический", "Гипер технический"],
            theme: "",
            type: "",
            message: "",
        };
        this.state.tableData = this.state.DataInfo
        this.state.tableData = this.state.Data
        this.addClass = this.addClass.bind(this);
    }
    
    addClass(index) {
        const activeClasses = [...this.state.activeClasses.slice(0, index), !this.state.activeClasses[index], this.state.activeClasses.slice(index + 1)].flat();
        this.setState({activeClasses});
        document.body.style.overflow = (activeClasses[0] || activeClasses[1] || activeClasses[2] || activeClasses[3]) ? 'hidden' : 'overlay';
    }

    render() {

        const renderDataInfo = (v, i) => {
            return (
                <DataTableColumn key={i}>
                    <TableData>{v.transitions}</TableData>
                    <TableData>{v.registration}</TableData>
                    <TableData>{v.active}</TableData>
                    <TableData>{`${v.conversion}%`}</TableData>
                    <TableData>{`${v.income}₽`}</TableData>
                </DataTableColumn>
            );
        }

        const renderData = (v, i) => {
            return (
                <DataTableColumn key={i}>
                    <TableData>{v.date}</TableData>
                    <TableData>{v.login}</TableData>
                    <TableData>{v.summ}</TableData>
                    <TableDataStatus ColorStatus={v.color}>{v.status}</TableDataStatus>
                </DataTableColumn>
            );
        }

        const schema = Yup.object({
            summ: Yup.string().test('', 'Минимальная сумма для вывода 300₽', value => value > 299 ),
        });

        const schemaSupport = Yup.object({
            theme: Yup.string().required("Поле не может быть пустым!"),
            message: Yup.string().required("Поле не может быть пустым!"),
        });

        const activeClasses = this.state.activeClasses.slice();

        const linkPage = ""

        return (
            <>
                <Popup clickClose={() => this.addClass(3)} className={activeClasses[3]? "open" : ""} title="Создать обращение">
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
                                    linkPage = "/dialog_support";
                                } else {
                                    linkPage = "";
                                }
                            } else {
                                linkPage = "";
                            }
                        }

                        const sendSupport = () => {
                            if (values.theme && values.message != undefined) {
                                if (values.theme.length && values.message.length > 0) {
                                    setTimeout(() => {
                                        this.addClass(3)
                                    }, 1);
                                }
                            } 
                        }

                        return (
                        <>
                            <div>
                                <CustomSelector onClick={(e)=> (this.setState({ ...this.state, type: e.target.innerText}))}
                                    title={values.type} items={this.state.typeSelector}
                                    addClassName={styles["margin-selector"]} addIMG="pen"/>
                                <InputWithError onChange={(e)=> {this.setState({ theme: e.target.value })}} 
                                    className="chat" name="theme" onKeyUp={ChangeLink()} 
                                    placeholder='Тема обращения' type="text"
                                    classError={errors.theme ? "view" : ""} addClassInput="main-input"
                                    textError={errors.theme || "ОК"} value={values.theme}/>
                                <TextArea onChange={(e)=> this.setState({ message: e.target.value })} 
                                    name="message" onKeyUp={ChangeLink()} 
                                    placeholder='Напишите сообщение' type="text"
                                    classError={errors.message ? "view" : ""} addClassInput="main-input"
                                    textError={errors.message || "ОК"} value={values.message}/>
                            </div>
                            <AddImageFromPopup/>
                            <LinkButton onClick={()=>{handleSubmit(), sendSupport()}} href={linkPage}>Создать обращение</LinkButton> 
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
                <ContainerForPages>
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
                                <DataTable classTable="table-statistics-ref" emptyText={`Информация отсутствует`} 
                                    linesLimit={`5`} data={this.state.DataInfo} pagination="hide"
                                    columns={CPlaceholders.Fields.InfoReferrals["ru"]} render={renderDataInfo}>
                                </DataTable>
                                <BetweenBlock className={`items-center ${styles["for-title-two"]} ${styles["for-double-title"]}`}>
                                    <HTitle>История</HTitle>
                                    <FilterSelector title={this.state.filterStatus[2]} items={this.state.filterStatus}
                                        callback={(data) => {this.setState({...this.state, tableData: data})}}
                                        filter = {["подтвержден", "не подтвержден", ""]} filterStatus={this.state.filterStatus}
                                        data={this.state.Data}>
                                    </FilterSelector>
                                </BetweenBlock>
                                <DataTable classTable="table-referrals" emptyText={`Информация отсутствует`} 
                                    linesLimit={5} data={this.state.tableData} pagination="hide"
                                    columns={CPlaceholders.Fields.Referrals["ru"]} render={renderData}>
                                </DataTable>
                            </div>
                        </BetweenBlock>
                    </section>
                </ContainerForPages>
            </>
        )
    }
}

export default Referrals;