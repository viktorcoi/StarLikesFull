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
import Pagination from '../components/Assets/Pagination/Pagination';
import NumberPage from '../components/Assets/Pagination/NumberPage';
import FilterSelector from '../components/Assets/tags/FilterSelector';
import MainTitle from '../components/Assets/tags/MainTitle';
import TableDataLink from '../components/Assets/Table/TableDataLink';
import PanelNavigationMainMini from '../components/Assets/Navigations/PanelNavigationMainMini';
import LinkBack from '../components/Assets/tags/LinkBack';
import DataMyOrders from "../components/Assets/Context/UserContext/DataMyOrders";

class MyOrders extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: ["активные", "завершенные", "все записи"],
            id: "",
            numberOrder: "",
            social: "",
            type: "",
            price: "",
            status: "",
            color: "",
            statusFilter: "",
            Data: [...DataMyOrders],
            tableData: [],
        };
        this.state.tableData = this.state.Data
    }

    changeClickStatus = (e) => {
        let filter = [];
        for (var i = 0; i < 3; i++) {
            if (e.target.innerText.toLowerCase() == this.state.filter[i]) {
                filter[0] = "активен"
                filter[1] = "завершен"
                filter[2] = ""
                this.setState({ ...this.state, statusFilter: filter[i]});
            }
        }
    }

    render() {

        const renderTableMyOrders = (data) => {
            return data.filter((v) => (((!this.state.statusFilter) || v.status == this.state.statusFilter))).map((v,idx) => {
                return (
                    <>
                        <tr key={`v-${idx}`}>
                            <TableDataLink color="purple" href="my_orders_info">{v.numberOrder}</TableDataLink>
                            <TableData>{v.social}</TableData>
                            <TableData>{v.type}</TableData>
                            <TableData>{v.price}</TableData>
                            <TableDataStatus ColorStatus={v.color}>{v.status}</TableDataStatus>
                        </tr>
                    </>
                );
            });
        }

        return (
            <>
                <Container>
                    <section className={styles["my-orders"]}>
                        <BetweenBlock>
                            <PanelNavigationMainMini/>
                            <PanelNavigationMain/>
                            <div className={styles["right-side"]}>
                                <div className={`pos-relative ${styles["for-back-mobil"]}`}>
                                    <LinkBack/>
                                    <MainTitle>Мои заказы</MainTitle>
                                </div>
                                <BetweenBlock className={`items-center ${styles["for-title-two"]}`}>
                                    <MainTitle>Мои заказы</MainTitle>
                                    <FilterSelector onClick={(e)=> this.changeClickStatus(e)} 
                                        title={this.state.filter[2]} items={this.state.filter}/>
                                </BetweenBlock>
                                <CustomTable className="my-service-table">
                                    <HeadTable>
                                        <TitleHead>Номер заказа</TitleHead>
                                        <TitleHead>Соц. сеть</TitleHead>
                                        <TitleHead>Вид накрутки</TitleHead>
                                        <TitleHead>Цена</TitleHead>
                                        <TitleHead>Статус</TitleHead>
                                    </HeadTable>
                                    <tbody>
                                        {renderTableMyOrders(this.state.tableData)}
                                    </tbody>
                                </CustomTable>
                                <BetweenBlock className={`items-center ${styles["for-pagination"]}`}>
                                    <Pagination disabled>
                                        <NumberPage className="select">1</NumberPage>
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

export default MyOrders;