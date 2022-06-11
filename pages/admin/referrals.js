import { Component } from 'react'
import ContainerForPages from "../../components/Assets/moduls/ContainerForPages";
import styles from '/public/assets/css/AdminsPages.module.css'
import BetweenBlock from '../../components/Assets/Blocks/BetweenBlock';
import CustomTable from '../../components/Assets/Table/CustomTable';
import HeadTable from '../../components/Assets/Table/HeadTable';
import TitleHead from '../../components/Assets/Table/TitleHead';
import TableData from '../../components/Assets/Table/TableData';
import TableDataLink from '../../components/Assets/Table/TableDataLink';
import MainTitle from '../../components/Assets/tags/MainTitle'
import PanelNavigationAdmin from '../../components/Assets/Navigations/PanelNavigationAdmin';
import Pagination from '../../components/Assets/Pagination/Pagination';
import NumberPage from '../../components/Assets/Pagination/NumberPage';
import SearchInput from '../../components/Assets/Inputs/SearchInput';
import CustomSelector from '../../components/Assets/tags/CustomSelector';
import PanelNavigationAdminMini from '../../components/Assets/Navigations/PanelNavigationAdminMini';
import DataReferrals from '../../components/Assets/Table/Data/Admin/DataReferrals';

class Referrals extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterSelector: ["По рефералу", "По рефереру", "По сумме", "По кол-ву", "По дате"],
            id: "",
            numberOrder: "",
            social: "",
            type: "",
            price: "",
            status: "",
            color: "",
            statusFilter: "",
            Data: [...DataReferrals],
            tableData: [],
            filterField: "По рефералу"
        };
    }

    render() {

        const renderTableReferrals = (data) => {
            return data.map((v,idx) => {
                return (
                    <>
                        <tr key={`v-${idx}`}>
                            <TableDataLink href="/admin/referrals_referral" color="purple">{v.referral}</TableDataLink>
                            <TableDataLink href="/admin/referrals_referrer" color="purple">{v.referrer}</TableDataLink>
                            <TableData>{v.summ}</TableData>
                            <TableData>{v.count}</TableData>
                            <TableData>{v.dateLast}</TableData>
                        </tr>
                    </>
                );
            });
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
                                <CustomTable className="admin-table">
                                    <HeadTable>
                                        <TitleHead>Реферал</TitleHead>
                                        <TitleHead>Реферер</TitleHead>
                                        <TitleHead>Сумма<br/>реферала</TitleHead>
                                        <TitleHead>Кол-во<br/>заказов</TitleHead>
                                        <TitleHead>Дата последнего<br/>пополнения</TitleHead>
                                    </HeadTable>
                                    <tbody>
                                        {renderTableReferrals(this.state.tableData)}
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

export default Referrals;