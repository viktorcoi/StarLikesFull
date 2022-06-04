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
import Pagination from '../components/Assets/Pagination/Pagination';
import NumberPage from '../components/Assets/Pagination/NumberPage';
import FilterSelector from '../components/Assets/tags/FilterSelector';
import MainTitle from '../components/Assets/tags/MainTitle';
import TableDataLink from '../components/Assets/Table/TableDataLink';
import PanelNavigationMainMini from '../components/Assets/Navigations/PanelNavigationMainMini';
import LinkBack from '../components/Assets/tags/LinkBack';

class MyOrders extends Component {

    render() {

        let filter  = ["активные", "завершеные", "все записи"];

        return (
            <>
                <Container>
                    <section className={styles["my-orders"]}>
                        <BetweenBlock>
                            <PanelNavigationMainMini/>
                            <PanelNavigationMain/>
                            <div className={styles["right-side"]}>
                                <div className={`pos-relative ${styles["for-back-mobil"]}`}>
                                    <LinkBack/>
                                    <MainTitle>Мои заказы</MainTitle>
                                </div>
                                <BetweenBlock className={`items-center ${styles["for-title-two"]}`}>
                                    <MainTitle>Мои заказы</MainTitle>
                                    <FilterSelector title="активные" items={filter}/>
                                </BetweenBlock>
                                <CustomTable className="my-service-table">
                                    <HeadTable>
                                        <TitleHead>Номер заказа</TitleHead>
                                        <TitleHead>Соц. сеть</TitleHead>
                                        <TitleHead>Вид накрутки</TitleHead>
                                        <TitleHead>Цена</TitleHead>
                                        <TitleHead>Статус</TitleHead>
                                    </HeadTable>
                                    <tbody>
                                        <tr>
                                            <TableDataLink color="purple" href="my_orders_info">#20033</TableDataLink>
                                            <TableData>instagram</TableData>
                                            <TableData>👥 Instagram Followers - [REAL+ AUTREFILL 30...</TableData>
                                            <TableData>33.00₽</TableData>
                                            <TableDataStatus ColorStatus="purple">активен</TableDataStatus>
                                            
                                        </tr>
                                        <tr>
                                            <TableDataLink color="purple" href="my_orders_info">#21033</TableDataLink>
                                            <TableData>instagram</TableData>
                                            <TableData>👥 Instagram Followers - [REAL+ AUTREFILL 30...</TableData>
                                            <TableData>200.00₽</TableData>
                                            <TableDataStatus ColorStatus="green">завершен</TableDataStatus>
                                        </tr>
                                    </tbody>
                                </CustomTable>
                                <BetweenBlock className={`items-center ${styles["for-pagination"]}`}>
                                    <Pagination disabled>
                                        <NumberPage className="select">1</NumberPage>
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

export default MyOrders;