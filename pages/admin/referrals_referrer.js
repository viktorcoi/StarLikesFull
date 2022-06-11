import { Component } from 'react'
import ContainerForPages from "../../components/Assets/moduls/ContainerForPages";
import styles from '/public/assets/css/AdminsPages.module.css'
import BetweenBlock from '../../components/Assets/Blocks/BetweenBlock';
import MainTitle from '../../components/Assets/tags/MainTitle'
import HTitle from '../../components/Assets/tags/HTitle'
import PanelNavigationAdmin from '../../components/Assets/Navigations/PanelNavigationAdmin';
import LinkBack from '../../components/Assets/tags/LinkBack';
import CustomTable from '../../components/Assets/Table/CustomTable';
import HeadTable from '../../components/Assets/Table/HeadTable';
import TitleHead from '../../components/Assets/Table/TitleHead';
import TableData from '../../components/Assets/Table/TableData';
import TableDataStatus from '../../components/Assets/Table/TableDataStatus';
import Pagination from '../../components/Assets/Pagination/Pagination';
import NumberPage from '../../components/Assets/Pagination/NumberPage';
import CopyInput from '../../components/Assets/Inputs/CopyInput';
import FilterSelector from '../../components/Assets/tags/FilterSelector';
import PanelNavigationAdminMini from '../../components/Assets/Navigations/PanelNavigationAdminMini';
import DataReferrer from '../../components/Assets/Table/Data/Admin/DataReferrer';

class ReferralsReferrer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeClasses: [false, false, false, false],
            addFile: [],

            filter: ["подтвержденные", "не подтвержденные", "все записи"],
            id: "",
            date: "",
            login: "",
            summ: "",
            status: "",
            color: "",
            statusFilter: "",
            Data: [...DataReferrer],
            tableData: [],
        };
        this.state.tableData = this.state.Data
    }

    changeClickStatus = (e) => {
        let filter = [];
        for (var i = 0; i < 3; i++) {
            if (e.target.innerText.toLowerCase() == this.state.filter[i]) {
                filter[0] = "подтвержден"
                filter[1] = "не подтвержден"
                filter[2] = ""
                this.setState({ ...this.state, statusFilter: filter[i]});
            }
        }
    }

    render() {

        const renderTableReferrer = (data) => {
            return data.filter((v) => (((!this.state.statusFilter) || v.status == this.state.statusFilter))).map((v,idx) => {
                return (
                    <>
                        <tr key={`v-${idx}`}>
                            <TableData>{v.date}</TableData>
                            <TableData>{v.login}</TableData>
                            <TableData>{v.summ}</TableData>
                            <TableDataStatus ColorStatus={v.color}>{v.status}</TableDataStatus>
                        </tr>
                    </>
                );
            });
        }

        return (
            <>  
               <ContainerForPages>
                    <section className={styles["referral-referrer"]}>
                        <BetweenBlock>
                            <PanelNavigationAdminMini/>
                            <PanelNavigationAdmin/>
                            <div className={`pos-relative ${styles["right-side"]}`}>
                                <LinkBack addClass={styles["margin-left"]}/>
                                <MainTitle className={styles.title}>Реферер <span>karapuz</span> </MainTitle>
                                <div className={styles["for-copy"]}>
                                    <p className={styles.parameter}>Реферальная ссылка реферера</p>
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
                                    <FilterSelector onClick={(e)=> this.changeClickStatus(e)}
                                        title={this.state.filter[2]} items={this.state.filter}/>
                                </BetweenBlock>
                                <CustomTable className="admin-table">
                                    <HeadTable>
                                        <TitleHead>Дата</TitleHead>
                                        <TitleHead>Логин</TitleHead>
                                        <TitleHead>Сумма</TitleHead>
                                        <TitleHead>Статус</TitleHead>
                                    </HeadTable>
                                    <tbody>
                                        {renderTableReferrer(this.state.tableData)}
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
               </ContainerForPages>
            </>
        ) 
    }
}

export default ReferralsReferrer;