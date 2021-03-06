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
            filterStatus: ["????????????????????????????", "???? ????????????????????????????", "?????? ????????????"],
            Data: [...DataReferral],
            DataInfo: [...DataInfoRefferal],
            tableData: [],
            tableDataInfo: [],
            typeSelector: ["??????????????????????", "???? ??????????????????????", "?????????? ??????????????????????"],
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
                    <TableData>{`${v.income}???`}</TableData>
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
            summ: Yup.string().test('', '?????????????????????? ?????????? ?????? ???????????? 300???', value => value > 299 ),
        });

        const schemaSupport = Yup.object({
            theme: Yup.string().required("???????? ???? ?????????? ???????? ????????????!"),
            message: Yup.string().required("???????? ???? ?????????? ???????? ????????????!"),
        });

        const activeClasses = this.state.activeClasses.slice();

        const linkPage = ""

        return (
            <>
                <Popup clickClose={() => this.addClass(3)} className={activeClasses[3]? "open" : ""} title="?????????????? ??????????????????">
                   <Formik
                    enableReinitialize={true}
                        initialValues={{
                            type: this.state.type ? this.state.type : "???????????????? ?????? ??????????????????",
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
                                    placeholder='???????? ??????????????????' type="text"
                                    classError={errors.theme ? "view" : ""} addClassInput="main-input"
                                    textError={errors.theme || "????"} value={values.theme}/>
                                <TextArea onChange={(e)=> this.setState({ message: e.target.value })} 
                                    name="message" onKeyUp={ChangeLink()} 
                                    placeholder='???????????????? ??????????????????' type="text"
                                    classError={errors.message ? "view" : ""} addClassInput="main-input"
                                    textError={errors.message || "????"} value={values.message}/>
                            </div>
                            <AddImageFromPopup/>
                            <LinkButton onClick={()=>{handleSubmit(), sendSupport()}} href={linkPage}>?????????????? ??????????????????</LinkButton> 
                        </>
                        );}}
                    </Formik>
                </Popup>
                <Popup clickClose={() => this.addClass(2)} className={activeClasses[2]? "open" : ""} title="?????????????????? ?????????????? ???? ????????????">
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
                                placeholder='??????????' type="number"
                                classError={errors.summ ? "view" : ""} addClassInput="main-input"
                                textError={errors.summ || "????"} value={values.summ}/>
                            <div className={styles["for-note"]}>
                                <p>???? ??????????????, ?????? ???????????? ?????????????????? <span>{`${values.summ}???`}</span> ???? ???????? ?????????????</p>
                            </div> 
                            <BetweenBlock>
                                <ButtonYes type="submit" onClick={() => {handleSubmit(), outputMoney()}}/> 
                                <ButtonNo onClick={() => this.addClass(2)}/>
                            </BetweenBlock>   
                        </>
                        );}}
                    </Formik>
                </Popup>
                <Popup namePopup="popup-text" clickClose={() => this.addClass(1)} className={activeClasses[1]? "open" : ""} title="?????????????????? ??????????????">
                    <div>
                        <p>?????????? ?????????????? ???????????????? ???? ?????????????????? ??????????????, ???????????????????? 
                            ?????????????????? ?????????????????? ?? ??????????????????
                        </p>
                    </div>
                    <MainButton onMouseUp={() => this.addClass(1)} onClick={() => this.addClass(3)} classButton="link-button">?????????????? ??????????????????</MainButton>
                </Popup>
                <Popup namePopup="popup-text" clickClose={() => this.addClass(0)} className={activeClasses[0]? "open" : ""} title="?????????????????? ??????????????">
                    <div>
                        <p>???? ???????????? <span onMouseUp={() => this.addClass(2)} onClick={() => this.addClass(0)} className='transition_0_3 cursor-pointer'>
                            ?????????????? ???????????????? ???? ????????????
                        </span></p>
                        <p>?????? <span onMouseUp={() => this.addClass(1)} onClick={() => this.addClass(0)} className='transition_0_3 cursor-pointer'>
                            ?????????????? ???????????????? ???? ?????????????????? ??????????????
                        </span></p>
                    </div>
                    <LinkButton onClick={() => this.addClass(0)} href="/my_orders">?????????????? ?? ?????? ????????????</LinkButton>
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
                                                <MainTitle className={styles.balance}>????????????????</MainTitle>
                                            </BetweenBlock>
                                            <div className={styles["for-information-ref"]}>
                                                <p>
                                                    ???????????????????????? ???????????? 
                                                    <span> 7%</span>
                                                </p>
                                                <p>
                                                    ?????????????????????? ??????????????
                                                    <span> 300.00???</span>
                                                </p>
                                            </div>
                                            <ButtonWithArrow className="margin-auto" onClick={() => this.addClass(0)}>?????????????? ????????????</ButtonWithArrow>
                                        </>
                                        ) : (
                                        <>
                                            <BetweenBlock className={`items-center ${styles["for-title"]} ${styles["title-margin-23"]}`}>
                                                <MainTitle className={styles.balance}>????????????????</MainTitle>
                                                <ButtonWithArrow onClick={() => this.addClass(0)}>?????????????? ????????????</ButtonWithArrow>
                                            </BetweenBlock>
                                            <div className={styles["for-information-ref"]}>
                                                <p>
                                                    ???????????????????????? ???????????? 
                                                    <span> 7%</span>
                                                </p>
                                                <p>
                                                    ?????????????????????? ??????????????
                                                    <span> 300.00???</span>
                                                </p>
                                            </div>
                                        </>
                                        )
                                    }
                                </Media>
                                <div className={styles["for-copy"]}>
                                    <p><strong>?????????????????????? ????????????</strong></p>
                                    <CopyInput className="ref" value="357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P"
                                        description="?????????????????????? ???????????? ?????????????? ??????????????????????"/>
                                </div>
                                <DataTable classTable="table-statistics-ref" emptyText={`???????????????????? ??????????????????????`} 
                                    linesLimit={`5`} data={this.state.DataInfo} pagination="hide"
                                    columns={CPlaceholders.Fields.InfoReferrals["ru"]} render={renderDataInfo}>
                                </DataTable>
                                <BetweenBlock className={`items-center ${styles["for-title-two"]} ${styles["for-double-title"]}`}>
                                    <HTitle>??????????????</HTitle>
                                    <FilterSelector title={this.state.filterStatus[2]} items={this.state.filterStatus}
                                        callback={(data) => {this.setState({...this.state, tableData: data})}}
                                        filter = {["??????????????????????", "???? ??????????????????????", ""]} filterStatus={this.state.filterStatus}
                                        data={this.state.Data}>
                                    </FilterSelector>
                                </BetweenBlock>
                                <DataTable classTable="table-referrals" emptyText={`???????????????????? ??????????????????????`} 
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