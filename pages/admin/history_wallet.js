import { Component } from 'react'
import Container from "../../components/Assets/moduls/Container";
import styles from '/public/assets/css/AdminsPages.module.css'
import BetweenBlock from '../../components/Assets/Blocks/BetweenBlock';
import CustomTable from '../../components/Assets/Table/CustomTable';
import HeadTable from '../../components/Assets/Table/HeadTable';
import TitleHead from '../../components/Assets/Table/TitleHead';
import TableData from '../../components/Assets/Table/TableData';
import TableDataStatus from '../../components/Assets/Table/TableDataStatus';
import MainTitle from '../../components/Assets/tags/MainTitle'
import PanelNavigationAdmin from '../../components/Assets/Navigations/PanelNavigationAdmin';
import Pagination from '../../components/Assets/Pagination/Pagination';
import NumberPage from '../../components/Assets/Pagination/NumberPage';
import FilterSelector from '../../components/Assets/tags/FilterSelector';
import PanelNavigationAdminMini from '../../components/Assets/Navigations/PanelNavigationAdminMini';
import LinkBack from '../../components/Assets/tags/LinkBack';
import DataHistoryWallets from '../../components/Assets/Context/AdminContext.js/DataHistoryWallets';

class HistoryWallet extends Component {

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
            Data: [...DataHistoryWallets]
        };
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

        const tableHistoryWallets = this.state.Data.filter(v => ((!this.state.statusFilter) || v.status == this.state.statusFilter)).map((v, idx) => { 
            return (
            <tr key={`v-${idx}`}>
                <TableData>{v.numberOrder}</TableData>
                <TableData>{v.login}</TableData>
                <TableData>{v.method}</TableData>
                <TableData>{v.summ}</TableData>
                <TableDataStatus ColorStatus={v.color}>{v.status}</TableDataStatus>
            </tr>
        )});

        return (
            <>  
               <Container>
                    <section className={styles["history-wallet"]}>
                        <BetweenBlock>
                            <PanelNavigationAdminMini/>
                            <PanelNavigationAdmin/>
                            <div className={styles["right-side"]}>
                                <div className={`pos-relative ${styles["for-back-mobil"]}`}>
                                    <LinkBack/>
                                    <MainTitle>История счетов</MainTitle>
                                </div>
                                <BetweenBlock className={`${styles["for-search"]} items-center`}>
                                    <MainTitle className={styles["margin-left"]}>История счетов</MainTitle>
                                    <FilterSelector onClick={(e)=> this.changeClickStatus(e)} 
                                        title={this.state.filter[2]} items={this.state.filter}/>
                                </BetweenBlock>
                                <CustomTable className="admin-table">
                                    <HeadTable>
                                        <TitleHead>Номер заказа</TitleHead>
                                        <TitleHead>Логин</TitleHead>
                                        <TitleHead>Метод пополнения</TitleHead>
                                        <TitleHead>Сумма</TitleHead>
                                        <TitleHead>Статус</TitleHead>
                                    </HeadTable>
                                    <tbody>
                                        {tableHistoryWallets}
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

export default HistoryWallet;