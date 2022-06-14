import { Component } from 'react';
import BetweenBlock from '../components/Assets/Blocks/BetweenBlock';
import ContainerForPages from "../components/Assets/moduls/ContainerForPages";
import PanelNavigationMain from '../components/Assets/Navigations/PanelNavigationMain';
import styles from '/public/assets/css/MainPages.module.css'
import TableData from '../components/Assets/Table/TableData';
import TableDataStatus from '../components/Assets/Table/TableDataStatus';
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
            filterStatus: ["активные", "завершенные", "все записи"],
            Data: [...DataMyOrders],
            tableData: [],
        };
        this.state.tableData = this.state.Data
    }

    render() {

        const renderData = (v, i) => {
            return (
                <DataTableColumn key={i}>
                    <TableDataLink color="purple" href="my_orders_info">{`#${v.number}`}</TableDataLink>
                    <TableData>{v.social}</TableData>
                    <TableData>{v.type.substr(0, 44).concat(v.type.length > 44 ? "..." : "")}</TableData>
                    <TableData>{`${v.price}₽`}</TableData>
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
                                    <FilterSelector title={this.state.filterStatus[2]} items={this.state.filterStatus}
                                        callback={(data) => {this.setState({...this.state, tableData: data})}}
                                        filter = {["активен", "завершен", ""]} filterStatus={this.state.filterStatus}
                                        data={this.state.Data}>
                                    </FilterSelector>
                                </BetweenBlock>
                                <DataTable classTable="my-service-table" emptyText={`Заказы не найдены`} 
                                    linesLimit={5} data={this.state.tableData} 
                                    columns={CPlaceholders.Fields.MyOrders["ru"]} render={renderData}>
                                </DataTable>
                            </div>
                        </BetweenBlock>
                    </section>
                </ContainerForPages>
            </>
        )
    }
}

export default MyOrders;