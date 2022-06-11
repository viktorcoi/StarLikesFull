import { Component } from 'react';
import BetweenBlock from '../components/Assets/Blocks/BetweenBlock';
import ContainerForPages from "../components/Assets/moduls/ContainerForPages";
import PanelNavigationMain from '../components/Assets/Navigations/PanelNavigationMain';
import CustomTable from '../components/Assets/Table/CustomTable';
import styles from '/public/assets/css/MainPages.module.css'
import HeadTable from '../components/Assets/Table/HeadTable';
import TitleHead from '../components/Assets/Table/TitleHead';
import TableData from '../components/Assets/Table/TableData';
import TableDataStatus from '../components/Assets/Table/TableDataStatus';
import InfoOrder from '../components/Assets/Blocks/InfoOrder';
import DarkPurpleBlock from '../components/Assets/Blocks/DarkPurpleBlock';
import LinkBack from '../components/Assets/tags/LinkBack';
import ButtonWithArrow from '../components/Assets/Buttons/ButtonWithArrow';
import MainTitle from '../components/Assets/tags/MainTitle';
import BlockStatus from '../components/Assets/Table/BlockStatus';
import PanelNavigationMainMini from '../components/Assets/Navigations/PanelNavigationMainMini';

class MyOrdersInfo extends Component {

    render() {

        const price = "33.00₽"
        return (
            <>
                <ContainerForPages>
                    <section className={styles["order_settings"]}>
                        <BetweenBlock>
                            <PanelNavigationMainMini/>
                            <PanelNavigationMain/>
                            <div className={styles["right-side"]}>
                                <BetweenBlock className={`pos-relative items-center ${styles["number-order"]}`}>
                                    <LinkBack/>
                                    <div>
                                        <div className={`${styles["for-number"]} d-flex`}>
                                            <MainTitle>Заказ №20033</MainTitle>
                                            <BlockStatus ColorStatus="purple">активен</BlockStatus>
                                        </div>
                                        <p className={styles.date}>Дата заказа: 20.03.2022 </p>
                                    </div>
                                    <ButtonWithArrow >Повторить</ButtonWithArrow>
                                </BetweenBlock>
                                <BetweenBlock className={styles["for-info-order"]}>
                                    <div className={styles["info-left"]}>
                                        <p className={styles.parameter}><stong>Данные о заказе</stong></p>
                                        <InfoOrder 
                                            social="instagram"
                                            type="👥 Instagram Followers - 
                                            [REAL+ AUTOREFILL 30D]"
                                            count="300 шт."
                                            price={price}
                                            link="www.instagram.com/vladislove/"/>
                                    </div>
                                    <div className={styles["info-right"]}>
                                        <p className={styles.parameter}><stong>Описание</stong></p>
                                        <DarkPurpleBlock className={styles.description}>
                                            <p>
                                                🔴 AFTER ORDERING, YOU NEED
                                                TO WRITE TO SUPPORT YOUR
                                                ORDER NUMBER AND WAIT FOR 
                                                SUPPORT TO LAUNCH YOUR
                                                ORDER<br/>
                                                ⏱ ️Start: 1-30 min<br/>
                                                ⚡ ️Speed: 10000/D<br/>
                                                ✔ ️Quality : REAL AND NO DROP
                                                ⚠️ Cancel Button: Disabled<br/>
                                                🔴 Drop: 0%<br/>
                                                🟢 REFILL 30D<br/>
                                            </p>
                                        </DarkPurpleBlock>
                                    </div>
                                </BetweenBlock>
                                <p className={`${styles["for-title"]} ${styles["title-margin-23"]}`}>Информация об оплате</p>
                                <CustomTable className="order-info-table">
                                    <HeadTable>
                                        <TitleHead>Дата</TitleHead>
                                        <TitleHead>Метод пополнения</TitleHead>
                                        <TitleHead>Сумма</TitleHead>
                                        <TitleHead>Номер заказа</TitleHead>
                                        <TitleHead>Статус</TitleHead>
                                    </HeadTable>
                                    <tbody>
                                        <tr>
                                            <TableData>22.02.2022</TableData>
                                            <TableData>Онлайн-касса</TableData>
                                            <TableData>33.00₽</TableData>
                                            <TableData color="purple">#20033</TableData>
                                            <TableDataStatus ColorStatus="green">подтвержден</TableDataStatus>
                                        </tr>
                                    </tbody>
                                </CustomTable>
                            </div>
                        </BetweenBlock>
                    </section>
                </ContainerForPages>
            </>
        )
    }
}

export default MyOrdersInfo;