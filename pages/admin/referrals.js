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

class Referrals extends Component {


    render() {

        let  search  = ["Вот это нашлось", "Вот это нашлось 2", "Вот это нашлось 3", "Вот это нашлось 4"];
        let  filter  = ["По рефералу", "По рефереру", "По сумме", "По кол-ву", "По дате"];

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
                                    <CustomSelector className="admin-selector" title="По дате" items={filter}/>
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
                                        <tr>
                                            <TableDataLink href="/admin/referrals_referral" color="purple">misterx</TableDataLink>
                                            <TableDataLink href="/admin/referrals_referrer" color="purple">karapuz</TableDataLink>
                                            <TableData>500.00₽</TableData>
                                            <TableData>2</TableData>
                                            <TableData>20.02.2022</TableData>
                                        </tr>
                                        <tr>
                                            <TableDataLink href="/admin/referrals_referral" color="purple">missz</TableDataLink>
                                            <TableDataLink href="/admin/referrals_referrer" color="purple">karapuzik</TableDataLink>
                                            <TableData>2434.00₽</TableData>
                                            <TableData>4</TableData>
                                            <TableData>15.02.2022</TableData>
                                        </tr>
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