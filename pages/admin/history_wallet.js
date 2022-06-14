import { Component } from 'react'
import ContainerForPages from "../../components/Assets/moduls/ContainerForPages";
import styles from '/public/assets/css/AdminsPages.module.css'
import BetweenBlock from '../../components/Assets/Blocks/BetweenBlock';
import TableData from '../../components/Assets/Table/TableData';
import TableDataStatus from '../../components/Assets/Table/TableDataStatus';
import MainTitle from '../../components/Assets/tags/MainTitle'
import PanelNavigationAdmin from '../../components/Assets/Navigations/PanelNavigationAdmin';
import FilterSelector from '../../components/Assets/tags/FilterSelector';
import PanelNavigationAdminMini from '../../components/Assets/Navigations/PanelNavigationAdminMini';
import LinkBack from '../../components/Assets/tags/LinkBack';
import DataHistoryWallets from '../../components/Assets/Table/Data/Admin/DataHistoryWallets';
import CPlaceholders from '../../models/Placeholders/Client/index';
import DataTableColumn from '../../components/Assets/Table/DataTableColumn';
import DataTable from '../../components/Assets/Table/DataTable';

class HistoryWallet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterStatus: ["подтвержденные", "не подтвержденные", "все записи"],
            Data: [...DataHistoryWallets],
            tableData: [],
        };
        this.state.tableData = this.state.Data
    }

    render() {

        const renderData = (v, i) => {
            return (
                <DataTableColumn key={i}>
                    <TableData>{`#${v.number}`}</TableData>
                    <TableData>{v.login}</TableData>
                    <TableData>{v.method}</TableData>
                    <TableData>{`${v.summ}₽`}</TableData>
                    <TableDataStatus ColorStatus={v.color}>{v.status}</TableDataStatus>
                </DataTableColumn>
            );
        }

        return (
            <>  
               <ContainerForPages>
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
                                    <FilterSelector title={this.state.filterStatus[2]} items={this.state.filterStatus}
                                        callback={(data) => {this.setState({...this.state, tableData: data})}}
                                        filter = {["подтвержден", "не подтвержден", ""]} filterStatus={this.state.filterStatus}
                                        data={this.state.Data}>
                                    </FilterSelector>
                                </BetweenBlock>
                                <DataTable classTable="admin-table" emptyText={`Информация отсутсвует`} 
                                    linesLimit={5} data={this.state.tableData} 
                                    columns={CPlaceholders.Fields.AdminHistoryWallet["ru"]} render={renderData}>
                                </DataTable>
                            </div>
                        </BetweenBlock>
                    </section>
               </ContainerForPages>
            </>
        ) 
    }
}

export default HistoryWallet;