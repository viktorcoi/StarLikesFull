import { Component } from 'react'
import Container from "../../components/Assets/moduls/Container";
import styles from '/public/assets/css/AdminsPages.module.css'
import BetweenBlock from '../../components/Assets/Blocks/BetweenBlock';
import CustomTable from '../../components/Assets/Table/CustomTable';
import HeadTable from '../../components/Assets/Table/HeadTable';
import TitleHead from '../../components/Assets/Table/TitleHead';
import TableData from '../../components/Assets/Table/TableData';
import TableDataStatus from '../../components/Assets/Table/TableDataStatus';
import MainTitle from '../../components/Assets/tags/MainTitle'
import PanelNavigationAdmin from '../../components/Assets/Navigations/PanelNavigationAdmin';
import Pagination from '../../components/Assets/Pagination/Pagination';
import NumberPage from '../../components/Assets/Pagination/NumberPage';
import FilterSelector from '../../components/Assets/tags/FilterSelector';
import PanelNavigationAdminMini from '../../components/Assets/Navigations/PanelNavigationAdminMini';
import LinkBack from '../../components/Assets/tags/LinkBack';

class HistoryWallet extends Component {


    render() {

        let filterStatus  = ["подтвержденные", "не подтвержденные", "все записи"];

        return (
            <>  
               <Container>
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
                                    <FilterSelector title="подтвержденные" items={filterStatus}/>
                                </BetweenBlock>
                                <CustomTable className="admin-table">
                                    <HeadTable>
                                        <TitleHead>Номер заказа</TitleHead>
                                        <TitleHead>Логин</TitleHead>
                                        <TitleHead>Метод пополнения</TitleHead>
                                        <TitleHead>Сумма</TitleHead>
                                        <TitleHead>Статус</TitleHead>
                                    </HeadTable>
                                    <tbody>
                                        <tr>
                                            <TableData>#1</TableData>
                                            <TableData>karapuz</TableData>
                                            <TableData>Онлайн-касса</TableData>
                                            <TableData>330.00₽</TableData>
                                            <TableDataStatus ColorStatus="green">подтвержден</TableDataStatus>
                                        </tr>
                                        <tr>
                                            <TableData>#2</TableData>
                                            <TableData>bigkarapuz</TableData>
                                            <TableData>Онлайн-касса</TableData>
                                            <TableData>200.00₽</TableData>
                                            <TableDataStatus ColorStatus="green">подтвержден</TableDataStatus>
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

export default HistoryWallet;