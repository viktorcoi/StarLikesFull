import { Component } from 'react';
import BetweenBlock from '../components/Assets/Blocks/BetweenBlock';
import ContainerForPages from "../components/Assets/moduls/ContainerForPages";
import PanelNavigationMain from '../components/Assets/Navigations/PanelNavigationMain';
import CustomTable from '../components/Assets/Table/CustomTable';
import styles from '/public/assets/css/MainPages.module.css'
import HeadTable from '../components/Assets/Table/HeadTable';
import TitleHead from '../components/Assets/Table/TitleHead';
import TableData from '../components/Assets/Table/TableData';
import TableDataStatus from '../components/Assets/Table/TableDataStatus';
import LinkButton from '../components/Assets/Buttons/LinkButton';
import Pagination from '../components/Assets/Pagination/Pagination';
import NumberPage from '../components/Assets/Pagination/NumberPage';
import FilterSelector from '../components/Assets/tags/FilterSelector';
import MainTitle from '../components/Assets/tags/MainTitle';
import HTitle from '../components/Assets/tags/HTitle';
import PanelNavigationMainMini from '../components/Assets/Navigations/PanelNavigationMainMini';
import LinkBack from '../components/Assets/tags/LinkBack';
import DataBalance from '../components/Assets/Table/Data/Users/DataBalance';

class Balance extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: ["подтвержденные", "не подтвержденные", "все записи"],
            id: "",
            date: "",
            method: "",
            summ: "",
            number: "",
            status: "",
            color: "",
            statusFilter: "",
            Data: [...DataBalance],
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

        const renderTableBalance = (data) => {
            return data.filter((v) => (((!this.state.statusFilter) || v.status == this.state.statusFilter))).map((v,idx) => {
                return (
                    <>
                        <tr key={`v-${idx}`}>
                            <TableData>{v.date}</TableData>
                            <TableData>{v.method}</TableData>
                            <TableData>{v.summ}</TableData>
                            <TableData color="purple">{v.number}</TableData>
                            <TableDataStatus ColorStatus={v.color}>{v.status}</TableDataStatus>
                        </tr>
                    </>
                );
            });
        }

        return (
            <>
                <ContainerForPages>
                    <section className={styles["page-balance"]}>
                        <BetweenBlock>
                            <PanelNavigationMainMini/>
                            <PanelNavigationMain/>
                            <div className={styles["right-side"]}>
                                <div className={`pos-relative ${styles["for-back-mobil"]}`}>
                                    <LinkBack/>
                                    <MainTitle className={styles.balance}>Баланс<span>0.00₽</span></MainTitle>
                                </div>
                                <BetweenBlock className={`items-center ${styles["for-title"]}  ${styles["title-margin-57"]}`}>
                                    <MainTitle className={styles.balance}>
                                        Баланс
                                        <span>0.00₽</span>
                                    </MainTitle>
                                    <LinkButton href="/balance_insert">Пополнить баланс</LinkButton>
                                </BetweenBlock>
                                <BetweenBlock className={`items-center ${styles["for-title-two"]}`}>
                                    <HTitle>История пополнений</HTitle>
                                    <FilterSelector onClick={(e)=> this.changeClickStatus(e)}
                                    title={this.state.filter[2]} items={this.state.filter}/>
                                </BetweenBlock>
                                <CustomTable className="balance-table">
                                    <HeadTable>
                                        <TitleHead>Дата</TitleHead>
                                        <TitleHead>Метод<br/>пополнения</TitleHead>
                                        <TitleHead>Сумма</TitleHead>
                                        <TitleHead>Номер заказа</TitleHead>
                                        <TitleHead>Статус</TitleHead>
                                    </HeadTable>
                                    <tbody>
                                        {renderTableBalance(this.state.tableData)}
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

export default Balance;