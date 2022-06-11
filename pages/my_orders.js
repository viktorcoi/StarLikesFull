import { Component } from 'react';
import BetweenBlock from '../components/Assets/Blocks/BetweenBlock';
import ContainerForPages from "../components/Assets/moduls/ContainerForPages";
import PanelNavigationMain from '../components/Assets/Navigations/PanelNavigationMain';
import styles from '/public/assets/css/MainPages.module.css'
import TableData from '../components/Assets/Table/TableData';
import TableDataStatus from '../components/Assets/Table/TableDataStatus';
import Pagination from '../components/Assets/Pagination/Pagination';
import NumberPage from '../components/Assets/Pagination/NumberPage';
import FilterSelector from '../components/Assets/tags/FilterSelector';
import MainTitle from '../components/Assets/tags/MainTitle';
import TableDataLink from '../components/Assets/Table/TableDataLink';
import PanelNavigationMainMini from '../components/Assets/Navigations/PanelNavigationMainMini';
import LinkBack from '../components/Assets/tags/LinkBack';
import DataMyOrders from "../components/Assets/Table/Data/Users/DataMyOrders";
import DataTableColumn from "../components/Assets/Table/DataTableColumn";
import DataTable from "../components/Assets/Table/DataTable";
import CPlaceholders from '../models/Placeholders/Client/index';

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

        const renderData = (v, i) => {
            return (
                <DataTableColumn key={i}>
                    <TableDataLink color="purple" href="my_orders_info">{v.numberOrder}</TableDataLink>
                    <TableData>{v.social}</TableData>
                    <TableData>{v.type}</TableData>
                    <TableData>{v.price}</TableData>
                    <TableDataStatus ColorStatus={v.color}>{v.status}</TableDataStatus>
                </DataTableColumn>
            );
        }

        return (
            <>
                <ContainerForPages>
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
                                {/* <CustomTable className="my-service-table">
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
                                </CustomTable> */}


                                <DataTable classTable="my-service-table" emptyText={`Услуги не найдены`} 
                                    linesLimit={5} data={this.state.tableData} 
                                    columns={CPlaceholders.Fields.Dashboard["ru"]} render={renderData}
                                    filter={v=>(!this.state.statusFilter) || v.status == this.state.statusFilter}>
                                </DataTable>
                                

                                {/* <BetweenBlock className={`items-center ${styles["for-pagination"]}`}>
                                    <Pagination disabled>
                                        <NumberPage className="select">1</NumberPage>
                                    </Pagination>
                                </BetweenBlock> */}
                            </div>
                        </BetweenBlock>
                    </section>
                </ContainerForPages>
            </>
        )
    }
}

export default MyOrders;