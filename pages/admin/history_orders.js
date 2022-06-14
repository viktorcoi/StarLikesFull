import { Component } from 'react'
import ContainerForPages from "../../components/Assets/moduls/ContainerForPages";
import styles from '/public/assets/css/AdminsPages.module.css'
import BetweenBlock from '../../components/Assets/Blocks/BetweenBlock';
import TableData from '../../components/Assets/Table/TableData';
import TableDataLink from '../../components/Assets/Table/TableDataLink';
import TableDataStatus from '../../components/Assets/Table/TableDataStatus';
import MainTitle from '../../components/Assets/tags/MainTitle'
import PanelNavigationAdmin from '../../components/Assets/Navigations/PanelNavigationAdmin';
import SearchInput from '../../components/Assets/Inputs/SearchInput';
import CustomSelector from '../../components/Assets/tags/CustomSelector';
import FilterSelector from '../../components/Assets/tags/FilterSelector';
import PanelNavigationAdminMini from '../../components/Assets/Navigations/PanelNavigationAdminMini';
import LinkBack from '../../components/Assets/tags/LinkBack';
import DataHistoryOrders from '../../components/Assets/Table/Data/Admin/DataHistoryOrders';
import CPlaceholders from '../../models/Placeholders/Client/index';
import DataTable from '../../components/Assets/Table/DataTable';
import DataTableColumn from '../../components/Assets/Table/DataTableColumn';

class HistoryOrders extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterStatus: ["активные", "завершеные", "все записи"],
            Data: [...DataHistoryOrders],
            filterSelector: ["По логину", "По виду", "По сумме", "По соц. сети", "По номеру"],
            tableData: [],
            filterField: "По логину",
            statusFilter: "",
            searchFilter: "",
            valueSearch: "",
        };
    }

    render() {

        const renderData = (v, i) => {
            return (
                <DataTableColumn key={i}>
                    <TableDataLink href="/admin/history_orders_order" color="purple">{`#${v.number}`}</TableDataLink>
                    <TableData>{v.login}</TableData>
                    <TableData>{v.social}</TableData>
                    <TableData>{v.type.substr(0, 44).concat(v.type.length > 44 ? "..." : "")}</TableData>
                    <TableData>{`${v.summ}₽`}</TableData>
                    <TableDataStatus ColorStatus={v.color}>{v.status}</TableDataStatus>
                </DataTableColumn>
            );
        }

        return (
            <>  
               <ContainerForPages>
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
                                        <SearchInput addClassDiv={styles["admin-search"]} classOption="for-dark-selector" classDiv="admin-search"
                                            filterField={this.state.filterField} data={this.state.Data} 
                                            callback={(data, x, y) => {this.setState({...this.state, tableData: 
                                                data.filter((v) => (!this.state.statusFilter || v.status == this.state.statusFilter)),
                                                searchFilter: x, valueSearch: y
                                            })}}>
                                        </SearchInput>
                                        <CustomSelector className="admin-selector" 
                                            onClick={(e)=> {this.setState({ ...this.state, filterField: e.target.innerText})}} 
                                            title={this.state.filterField} items={this.state.filterSelector}>
                                        </CustomSelector>
                                    </div>
                                    <FilterSelector title={this.state.filterStatus[2]} items={this.state.filterStatus}
                                        callback={(data, x) => {this.setState({...this.state, 
                                            tableData: data.filter(v => v[this.state.searchFilter].indexOf(this.state.valueSearch) != -1), 
                                            statusFilter: x
                                        })}}
                                        filter = {["активен", "завершен", ""]} filterStatus={this.state.filterStatus}
                                        data={this.state.Data}>
                                    </FilterSelector>
                                </BetweenBlock>
                                <DataTable classTable="admin-table" emptyText={`Заказы не найдены`} 
                                    linesLimit={5} data={this.state.tableData} 
                                    columns={CPlaceholders.Fields.AdminHistoryOrders["ru"]} render={renderData}>
                                </DataTable>
                            </div>
                        </BetweenBlock>
                    </section>
               </ContainerForPages>
            </>
        ) 
    }
}

export default HistoryOrders;