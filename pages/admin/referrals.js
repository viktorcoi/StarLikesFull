import { Component } from 'react'
import ContainerForPages from "../../components/Assets/moduls/ContainerForPages";
import styles from '/public/assets/css/AdminsPages.module.css'
import BetweenBlock from '../../components/Assets/Blocks/BetweenBlock';
import TableData from '../../components/Assets/Table/TableData';
import TableDataLink from '../../components/Assets/Table/TableDataLink';
import MainTitle from '../../components/Assets/tags/MainTitle'
import PanelNavigationAdmin from '../../components/Assets/Navigations/PanelNavigationAdmin';
import SearchInput from '../../components/Assets/Inputs/SearchInput';
import CustomSelector from '../../components/Assets/tags/CustomSelector';
import PanelNavigationAdminMini from '../../components/Assets/Navigations/PanelNavigationAdminMini';
import DataReferrals from '../../components/Assets/Table/Data/Admin/DataReferrals';
import DataTable from '../../components/Assets/Table/DataTable';
import CPlaceholders from '../../models/Placeholders/Client/index';
import DataTableColumn from '../../components/Assets/Table/DataTableColumn';

class Referrals extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterSelector: ["По рефералу", "По рефереру", "По сумме", "По кол-ву", "По дате"],
            statusFilter: "",
            Data: [...DataReferrals],
            tableData: [],
            filterField: "По рефералу"
        };
    }

    render() {

        const renderData = (v, i) => {
            return (
                <DataTableColumn key={i}>
                    <TableDataLink href="/admin/referrals_referral" color="purple">{v.referral}</TableDataLink>
                    <TableDataLink href="/admin/referrals_referrer" color="purple">{v.referrer}</TableDataLink>
                    <TableData>{`${v.summ}₽`}</TableData>
                    <TableData>{v.count}</TableData>
                    <TableData>{v.dateLast}</TableData>
                </DataTableColumn>
            );
        }

        return (
            <>  
               <ContainerForPages>
                    <section>
                        <BetweenBlock>
                            <PanelNavigationAdminMini/>
                            <PanelNavigationAdmin/>
                            <div className={styles["right-side"]}>
                                <div className={styles["for-title"]}>
                                    <MainTitle>Рефералы</MainTitle>
                                </div>
                                <div className={`${styles["for-search"]} d-flex`}>
                                    <SearchInput filterField={this.state.filterField} 
                                        data={this.state.Data} callback={(data) => {this.setState({...this.state, tableData: data})}}
                                        classOption="for-dark-selector" classDiv="admin-search"/>
                                    <CustomSelector className="admin-selector" 
                                        onClick={(e)=> (this.setState({ ...this.state, filterField: e.target.innerText}))} 
                                        title={this.state.filterField} items={this.state.filterSelector}/>
                                </div>
                                <DataTable classTable="admin-table" emptyText={`Информация отсутсвует`} 
                                    linesLimit={5} data={this.state.tableData} 
                                    columns={CPlaceholders.Fields.AdminReferrals["ru"]} render={renderData}>
                                </DataTable>
                            </div>
                        </BetweenBlock>
                    </section>
               </ContainerForPages>
            </>
        ) 
    }
}

export default Referrals;