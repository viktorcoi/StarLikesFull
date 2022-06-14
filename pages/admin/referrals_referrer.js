import { Component } from 'react'
import ContainerForPages from "../../components/Assets/moduls/ContainerForPages";
import styles from '/public/assets/css/AdminsPages.module.css'
import BetweenBlock from '../../components/Assets/Blocks/BetweenBlock';
import MainTitle from '../../components/Assets/tags/MainTitle'
import HTitle from '../../components/Assets/tags/HTitle'
import PanelNavigationAdmin from '../../components/Assets/Navigations/PanelNavigationAdmin';
import LinkBack from '../../components/Assets/tags/LinkBack';
import TableData from '../../components/Assets/Table/TableData';
import TableDataStatus from '../../components/Assets/Table/TableDataStatus';
import CopyInput from '../../components/Assets/Inputs/CopyInput';
import FilterSelector from '../../components/Assets/tags/FilterSelector';
import PanelNavigationAdminMini from '../../components/Assets/Navigations/PanelNavigationAdminMini';
import DataReferrer from '../../components/Assets/Table/Data/Admin/DataReferrer';
import DataTableColumn from '../../components/Assets/Table/DataTableColumn';
import DataTable from '../../components/Assets/Table/DataTable';
import CPlaceholders from '../../models/Placeholders/Client/index';
import DataInfoRefferal from '../../components/Assets/Table/Data/DataInfoRefferals';

class ReferralsReferrer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeClasses: [false, false, false, false],
            filterStatus: ["подтвержденные", "не подтвержденные", "все записи"],
            Data: [...DataReferrer],
            DataInfo: [...DataInfoRefferal],
            tableData: [],
            tableDataInfo: []
        };
        this.state.tableData = this.state.DataInfo
        this.state.tableData = this.state.Data
    }

    render() {

        const renderDataInfo = (v, i) => {
            return (
                <DataTableColumn key={i}>
                    <TableData>{v.transitions}</TableData>
                    <TableData>{v.registration}</TableData>
                    <TableData>{v.active}</TableData>
                    <TableData>{`${v.conversion}%`}</TableData>
                    <TableData>{`${v.income}₽`}</TableData>
                </DataTableColumn>
            );
        }

        const renderData = (v, i) => {
            return (
                <DataTableColumn key={i}>
                    <TableData>{v.date}</TableData>
                    <TableData>{v.login}</TableData>
                    <TableData>{`${v.summ}₽`}</TableData>
                    <TableDataStatus ColorStatus={v.color}>{v.status}</TableDataStatus>
                </DataTableColumn>
            );
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
                                <DataTable classTable="table-statistics-ref" emptyText={`Информация отсутствует`} 
                                    linesLimit={`5`} data={this.state.DataInfo} pagination="hide"
                                    columns={CPlaceholders.Fields.InfoReferrals["ru"]} render={renderDataInfo}>
                                </DataTable>
                                <BetweenBlock className={`items-center ${styles["for-title-two"]} ${styles["for-double-title"]}`}>
                                    <HTitle>История</HTitle>
                                    <FilterSelector title={this.state.filterStatus[2]} items={this.state.filterStatus}
                                        callback={(data) => {this.setState({...this.state, tableData: data})}}
                                        filter = {["подтвержден", "не подтвержден", ""]} filterStatus={this.state.filterStatus}
                                        data={this.state.Data}>
                                    </FilterSelector>
                                </BetweenBlock>
                                <DataTable classTable="admin-table" emptyText={`Информация отсутствует`} 
                                    linesLimit={5} data={this.state.tableData} 
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

export default ReferralsReferrer;