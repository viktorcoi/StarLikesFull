import { Component } from 'react'
import Container from "../../components/Assets/moduls/Container";
import styles from '/public/assets/css/AdminsPages.module.css'
import BetweenBlock from '../../components/Assets/Blocks/BetweenBlock';
import MainTitle from '../../components/Assets/tags/MainTitle'
import HTitle from '../../components/Assets/tags/HTitle'
import PanelNavigationAdmin from '../../components/Assets/Navigations/PanelNavigationAdmin';
import LinkBack from '../../components/Assets/tags/LinkBack';
import CustomTable from '../../components/Assets/Table/CustomTable';
import HeadTable from '../../components/Assets/Table/HeadTable';
import TitleHead from '../../components/Assets/Table/TitleHead';
import TableData from '../../components/Assets/Table/TableData';
import TableDataStatus from '../../components/Assets/Table/TableDataStatus';
import Pagination from '../../components/Assets/Pagination/Pagination';
import NumberPage from '../../components/Assets/Pagination/NumberPage';
import CopyInput from '../../components/Assets/Inputs/CopyInput';
import FilterSelector from '../../components/Assets/tags/FilterSelector';
import PanelNavigationAdminMini from '../../components/Assets/Navigations/PanelNavigationAdminMini';

class ReferralsReferrer extends Component {


    render() {

        let filter  = ["подтвержденные", "неподтвержденные", "все записи"];

        return (
            <>  
               <Container>
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
                                <CustomTable className="table-statistics-ref">
                                    <HeadTable>
                                        <TitleHead>Всего<br/>переходов</TitleHead>
                                        <TitleHead>Регистрации</TitleHead>
                                        <TitleHead>Активные</TitleHead>
                                        <TitleHead>Конверсия</TitleHead>
                                        <TitleHead>Доход (общий)</TitleHead>
                                    </HeadTable>
                                    <tbody>
                                        <tr>
                                            <TableData>17</TableData>
                                            <TableData>10</TableData>
                                            <TableData>2</TableData>
                                            <TableData>3.00%</TableData>
                                            <TableData>49.00₽</TableData>
                                        </tr>
                                    </tbody>
                                </CustomTable>
                                <BetweenBlock className={`items-center ${styles["for-title-two"]} ${styles["for-double-title"]}`}>
                                    <HTitle>История</HTitle>
                                    <FilterSelector title="подтвержденные" items={filter}/>
                                </BetweenBlock>
                                <CustomTable className="admin-table">
                                    <HeadTable>
                                        <TitleHead>Дата</TitleHead>
                                        <TitleHead>Логин</TitleHead>
                                        <TitleHead>Сумма</TitleHead>
                                        <TitleHead>Статус</TitleHead>
                                    </HeadTable>
                                    <tbody>
                                        <tr>
                                            <TableData>20.02.2022</TableData>
                                            <TableData>vladikmadik</TableData>
                                            <TableData>500.00₽</TableData>
                                            <TableDataStatus ColorStatus="green">подтвержден</TableDataStatus>
                                        </tr>
                                        <tr>
                                            <TableData>15.02.2022</TableData>
                                            <TableData>anastasiagord</TableData>
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

export default ReferralsReferrer;