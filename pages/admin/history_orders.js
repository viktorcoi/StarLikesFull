import { Component } from 'react'
import Container from "../../components/Assets/moduls/Container";
import styles from '/public/assets/css/AdminsPages.module.css'
import BetweenBlock from '../../components/Assets/Blocks/BetweenBlock';
import CustomTable from '../../components/Assets/Table/CustomTable';
import HeadTable from '../../components/Assets/Table/HeadTable';
import TitleHead from '../../components/Assets/Table/TitleHead';
import TableData from '../../components/Assets/Table/TableData';
import TableDataLink from '../../components/Assets/Table/TableDataLink';
import TableDataStatus from '../../components/Assets/Table/TableDataStatus';
import MainTitle from '../../components/Assets/tags/MainTitle'
import PanelNavigationAdmin from '../../components/Assets/Navigations/PanelNavigationAdmin';
import Pagination from '../../components/Assets/Pagination/Pagination';
import NumberPage from '../../components/Assets/Pagination/NumberPage';
import SearchInput from '../../components/Assets/Inputs/SearchInput';
import CustomSelector from '../../components/Assets/tags/CustomSelector';
import FilterSelector from '../../components/Assets/tags/FilterSelector';
import PanelNavigationAdminMini from '../../components/Assets/Navigations/PanelNavigationAdminMini';
import LinkBack from '../../components/Assets/tags/LinkBack';

class HistoryOrders extends Component {


    render() {

        let  search  = ["Вот это нашлось", "Вот это нашлось 2", "Вот это нашлось 3", "Вот это нашлось 4"];
        let  filter  = ["По логину", "По виду", "По сумме", "По соц. сети", "По номеру", "по статусу"];
        let filterStatus  = ["активные", "завершеные", "все записи"];

        return (
            <>  
               <Container>
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
                                        <SearchInput addClassDiv={styles["admin-search"]} classOption="for-dark-selector" classDiv="admin-search" items={search}/>
                                        <CustomSelector className="admin-selector" title="По телефону" items={filter}/>
                                    </div>
                                    <FilterSelector title="активные" items={filterStatus}/>
                                </BetweenBlock>
                                <CustomTable className="admin-table">
                                    <HeadTable>
                                        <TitleHead>Номер заказа</TitleHead>
                                        <TitleHead>Логин</TitleHead>
                                        <TitleHead>Соц. сеть</TitleHead>
                                        <TitleHead>Вид накрутки</TitleHead>
                                        <TitleHead>Сумма</TitleHead>
                                        <TitleHead>Статус</TitleHead>
                                    </HeadTable>
                                    <tbody>
                                        <tr>
                                            <TableDataLink href="/admin/history_orders_order" color="purple">#1</TableDataLink>
                                            <TableData>karapuz</TableData>
                                            <TableData>Instagram</TableData>
                                            <TableData>👥 Instagram Followers - [REAL+ AUTREFILL 30...</TableData>
                                            <TableData>330.00₽</TableData>
                                            <TableDataStatus ColorStatus="purple">активен</TableDataStatus>
                                        </tr>
                                        <tr>
                                            <TableDataLink href="/admin/history_orders_order" color="purple">#2</TableDataLink>
                                            <TableData>bigkarapuz</TableData>
                                            <TableData>Instagram</TableData>
                                            <TableData>👥 Instagram Followers - [REAL+ AUTREFILL 30...</TableData>
                                            <TableData>330.00₽</TableData>
                                            <TableDataStatus ColorStatus="purple">активен</TableDataStatus>
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

export default HistoryOrders;