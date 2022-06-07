import { Component } from 'react'
import Container from "../../components/Assets/moduls/Container";
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
import DataReferrals from '../../components/Assets/Context/AdminContext.js/DataReferrals';

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
            filter: "Сортировка",
            Data: [...DataReferrals]
        };
    }

    render() {

        let  search  = ["Вот это нашлось", "Вот это нашлось 2", "Вот это нашлось 3", "Вот это нашлось 4"];

        const tableReferrals = this.state.Data.filter(v => ((!this.state.statusFilter) || v.status == this.state.statusFilter)).map((v, idx) => { 
            return (
            <tr key={`v-${idx}`}>
                <TableDataLink href="/admin/referrals_referral" color="purple">{v.referral}</TableDataLink>
                <TableDataLink href="/admin/referrals_referrer" color="purple">{v.referrer}</TableDataLink>
                <TableData>{v.summ}</TableData>
                <TableData>{v.count}</TableData>
                <TableData>{v.dateLast}</TableData>
            </tr>
        )});

        return (
            <>  
               <Container>
                    <section>
                        <BetweenBlock>
                            <PanelNavigationAdminMini/>
                            <PanelNavigationAdmin/>
                            <div className={styles["right-side"]}>
                                <div className={styles["for-title"]}>
                                    <MainTitle>Рефералы</MainTitle>
                                </div>
                                <div className={`${styles["for-search"]} d-flex`}>
                                    <SearchInput classOption="for-dark-selector" classDiv="admin-search" items={search}/>
                                    <CustomSelector className="admin-selector" 
                                        onClick={(e)=> (this.setState({ ...this.state, filter: e.target.innerText}))} 
                                        title={this.state.filter} items={this.state.filterSelector}/>
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
                                        {tableReferrals}
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

export default Referrals;