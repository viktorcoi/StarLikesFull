import { Component } from 'react';
import BetweenBlock from '../components/Assets/Blocks/BetweenBlock';
import Container from "../components/Assets/moduls/Container";
import PanelNavigationMain from '../components/Assets/Navigations/PanelNavigationMain';
import CustomTable from '../components/Assets/Table/CustomTable';
import styles from '/public/assets/css/MainPages.module.css'
import HeadTable from '../components/Assets/Table/HeadTable';
import TitleHead from '../components/Assets/Table/TitleHead';
import TableData from '../components/Assets/Table/TableData';
import TableDataStatus from '../components/Assets/Table/TableDataStatus';
import LinkButton from '../components/Assets/Buttons/LinkButton';
import Pagination from '../components/Assets/Pagination/Pagination';
import NumberPage from '../components/Assets/Pagination/NumberPage';
import FilterSelector from '../components/Assets/tags/FilterSelector';
import MainTitle from '../components/Assets/tags/MainTitle';
import HTitle from '../components/Assets/tags/HTitle';
import PanelNavigationMainMini from '../components/Assets/Navigations/PanelNavigationMainMini';
import LinkBack from '../components/Assets/tags/LinkBack';

class Balance extends Component {

    render() {

        let filter  = ["подтвержденные", "не подтвержденные", "все записи"];

        return (
            <>
                <Container>
                    <section className={styles["page-balance"]}>
                        <BetweenBlock>
                            <PanelNavigationMainMini/>
                            <PanelNavigationMain/>
                            <div className={styles["right-side"]}>
                                <div className={`pos-relative ${styles["for-back-mobil"]}`}>
                                    <LinkBack/>
                                    <MainTitle className={styles.balance}>Баланс<span>0.00₽</span></MainTitle>
                                </div>
                                <BetweenBlock className={`items-center ${styles["for-title"]}  ${styles["title-margin-57"]}`}>
                                    <MainTitle className={styles.balance}>
                                        Баланс
                                        <span>0.00₽</span>
                                    </MainTitle>
                                    <LinkButton href="/balance_insert">Пополнить баланс</LinkButton>
                                </BetweenBlock>
                                <BetweenBlock className={`items-center ${styles["for-title-two"]}`}>
                                    <HTitle>История пополнений</HTitle>
                                    <FilterSelector title="подтвержденные" items={filter}/>
                                </BetweenBlock>
                                <CustomTable className="balance-table">
                                    <HeadTable>
                                        <TitleHead>Дата</TitleHead>
                                        <TitleHead>Метод<br/>пополнения</TitleHead>
                                        <TitleHead>Сумма</TitleHead>
                                        <TitleHead>Номер заказа</TitleHead>
                                        <TitleHead>Статус</TitleHead>
                                    </HeadTable>
                                    <tbody>
                                        <tr>
                                            <TableData>20.02.2022</TableData>
                                            <TableData>Онлайн-касса</TableData>
                                            <TableData>33.00₽</TableData>
                                            <TableData color="purple">#20033</TableData>
                                            <TableDataStatus ColorStatus="green">подтвержден</TableDataStatus>
                                            
                                        </tr>
                                        <tr>
                                            <TableData>15.02.2022</TableData>
                                            <TableData>Криптовалюта</TableData>
                                            <TableData>200.00₽</TableData>
                                            <TableData color="purple">#21033</TableData>
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

export default Balance;