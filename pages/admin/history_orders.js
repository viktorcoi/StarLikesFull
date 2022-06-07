import { Component } from 'react'
import Container from "../../components/Assets/moduls/Container";
import styles from '/public/assets/css/AdminsPages.module.css'
import BetweenBlock from '../../components/Assets/Blocks/BetweenBlock';
import CustomTable from '../../components/Assets/Table/CustomTable';
import HeadTable from '../../components/Assets/Table/HeadTable';
import TitleHead from '../../components/Assets/Table/TitleHead';
import TableData from '../../components/Assets/Table/TableData';
import TableDataLink from '../../components/Assets/Table/TableDataLink';
import TableDataStatus from '../../components/Assets/Table/TableDataStatus';
import MainTitle from '../../components/Assets/tags/MainTitle'
import PanelNavigationAdmin from '../../components/Assets/Navigations/PanelNavigationAdmin';
import Pagination from '../../components/Assets/Pagination/Pagination';
import NumberPage from '../../components/Assets/Pagination/NumberPage';
import SearchInput from '../../components/Assets/Inputs/SearchInput';
import CustomSelector from '../../components/Assets/tags/CustomSelector';
import FilterSelector from '../../components/Assets/tags/FilterSelector';
import PanelNavigationAdminMini from '../../components/Assets/Navigations/PanelNavigationAdminMini';
import LinkBack from '../../components/Assets/tags/LinkBack';
import DataHistoryOrders from '../../components/Assets/Context/AdminContext.js/DataHistoryOrders';

class HistoryOrders extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeClasses: [false, false, false, false],
            addFile: [],

            filterStatus: ["активные", "завершеные", "все записи"],
            id: "",
            date: "",
            login: "",
            summ: "",
            status: "",
            color: "",
            statusFilter: "",
            filter: 'Сортировка',
            Data: [...DataHistoryOrders],
            filterSelector: ["По логину", "По виду", "По сумме", "По соц. сети", "По номеру", "По статусу"],
        };
    }

    changeClickStatus = (e) => {
        let filter = [];
        for (var i = 0; i < 3; i++) {
            if (e.target.innerText.toLowerCase() == this.state.filterStatus[i]) {
                filter[0] = "активен"
                filter[1] = "завершен"
                filter[2] = ""
                this.setState({ ...this.state, statusFilter: filter[i]});
            }
        }
    }

    render() {

        let  search  = ["Вот это нашлось", "Вот это нашлось 2", "Вот это нашлось 3", "Вот это нашлось 4"];

        const tableOrders = this.state.Data.filter(v => ((!this.state.statusFilter) || v.status == this.state.statusFilter)).map((v, idx) => { 
            return (
            <tr key={`v-${idx}`}>
                <TableDataLink href="/admin/history_orders_order" color="purple">{v.numberOrder}</TableDataLink>
                <TableData>{v.login}</TableData>
                <TableData>{v.social}</TableData>
                <TableData>{v.type}</TableData>
                <TableData>{v.summ}</TableData>
                <TableDataStatus ColorStatus={v.color}>{v.status}</TableDataStatus>
            </tr>
        )});

        return (
            <>  
               <Container>
                    <section className={`${styles["history-ordres"]}`}>
                        <BetweenBlock>
                            <PanelNavigationAdminMini/>
                            <PanelNavigationAdmin/>
                            <div className={styles["right-side"]}>
                                <div className={`pos-relative ${styles["for-back-mobil"]}`}>
                                    <LinkBack/>
                                    <MainTitle>История заказов</MainTitle>
                                </div>
                                <div className={styles["for-title"]}>
                                    <MainTitle>История заказов</MainTitle>
                                </div>
                                <BetweenBlock className={`${styles["for-search"]} items-center`}>
                                    <div className="d-flex">
                                        <SearchInput addClassDiv={styles["admin-search"]} classOption="for-dark-selector" classDiv="admin-search" items={search}/>
                                        <CustomSelector className="admin-selector" 
                                            onClick={(e)=> (this.setState({ ...this.state, filter: e.target.innerText}))} 
                                            title={this.state.filter} items={this.state.filterSelector}/>
                                    </div>
                                    <FilterSelector onClick={(e)=> this.changeClickStatus(e)}
                                    title={this.state.filterStatus[2]} items={this.state.filterStatus}/>
                                </BetweenBlock>
                                <CustomTable className="admin-table">
                                    <HeadTable>
                                        <TitleHead>Номер заказа</TitleHead>
                                        <TitleHead>Логин</TitleHead>
                                        <TitleHead>Соц. сеть</TitleHead>
                                        <TitleHead>Вид накрутки</TitleHead>
                                        <TitleHead>Сумма</TitleHead>
                                        <TitleHead>Статус</TitleHead>
                                    </HeadTable>
                                    <tbody>
                                        {tableOrders}
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

export default HistoryOrders;