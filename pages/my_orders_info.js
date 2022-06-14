import { Component } from 'react';
import BetweenBlock from '../components/Assets/Blocks/BetweenBlock';
import ContainerForPages from "../components/Assets/moduls/ContainerForPages";
import PanelNavigationMain from '../components/Assets/Navigations/PanelNavigationMain';
import styles from '/public/assets/css/MainPages.module.css'
import TableData from '../components/Assets/Table/TableData';
import TableDataStatus from '../components/Assets/Table/TableDataStatus';
import InfoOrder from '../components/Assets/Blocks/InfoOrder';
import DarkPurpleBlock from '../components/Assets/Blocks/DarkPurpleBlock';
import LinkBack from '../components/Assets/tags/LinkBack';
import ButtonWithArrow from '../components/Assets/Buttons/ButtonWithArrow';
import MainTitle from '../components/Assets/tags/MainTitle';
import BlockStatus from '../components/Assets/Table/BlockStatus';
import PanelNavigationMainMini from '../components/Assets/Navigations/PanelNavigationMainMini';
import DataInfoPayOrder from '../components/Assets/Table/Data/Users/DataInfoPayOrder';
import DataTableColumn from '../components/Assets/Table/DataTableColumn';
import DataTable from '../components/Assets/Table/DataTable';
import CPlaceholders from '../models/Placeholders/Client/index';

class MyOrdersInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Data: [...DataInfoPayOrder],
            tableData: [],
        };
        this.state.tableData = this.state.Data
    }

    render() {

        const renderData = (v, i) => {
            return (
                <DataTableColumn key={i}>
                    <TableData>{v.date}</TableData>
                    <TableData>{v.method}</TableData>
                    <TableData>{`${v.summ}₽`}</TableData>
                    <TableData color={"purple"}>{`#${v.number}`}</TableData>
                    <TableDataStatus ColorStatus={v.color}>{v.status}</TableDataStatus>
                </DataTableColumn>
            );
        }

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
                                <DataTable classTable="order-info-table" emptyText={`Информация отсутствует`} 
                                    linesLimit={5} data={this.state.tableData} 
                                    columns={CPlaceholders.Fields.InfoPayOrder["ru"]} render={renderData}>
                                </DataTable>
                            </div>
                        </BetweenBlock>
                    </section>
                </ContainerForPages>
            </>
        )
    }
}

export default MyOrdersInfo;