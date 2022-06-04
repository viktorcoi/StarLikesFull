import { Component } from 'react/cjs/react.production.min';
import Container from "../components/Assets/moduls/Container";
import styles from '/public/assets/css/MainPages.module.css'
import LinkBack from '../components/Assets/tags/LinkBack';
import BetweenBlock from '../components/Assets/Blocks/BetweenBlock';
import PanelNavigationMain from '../components/Assets/Navigations/PanelNavigationMain';
import CopyInput from '../components/Assets/Inputs/CopyInput';
import BlockStatus from '../components/Assets/Table/BlockStatus';
import CustomTable from '../components/Assets/Table/CustomTable';
import HeadTable from '../components/Assets/Table/HeadTable';
import TitleHead from '../components/Assets/Table/TitleHead';
import TableData from '../components/Assets/Table/TableData';
import TableDataStatus from '../components/Assets/Table/TableDataStatus';
import MainTitle from '../components/Assets/tags/MainTitle';
import PanelNavigationMainMini from '../components/Assets/Navigations/PanelNavigationMainMini';


class NewOrderCrypto extends Component {

    render() {  

        return (
            <>
                <Container>
                    <section className={`${styles["payment-crypto"]}`}>
                        <BetweenBlock>
                            <PanelNavigationMainMini/>
                            <PanelNavigationMain/>
                            <div className={`pos-relative d-flex ${styles["right-side"]}`}>
                            <LinkBack/>
                                <MainTitle className={styles.title}>Оплата заказa <span>#20033</span></MainTitle>
                                <img className={`margin-auto ${styles["img-QR"]}`} alt='QR crypto' src='/assets/img/qr.png'></img>
                                <CopyInput className="btc" value="357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P"
                                    description="Адрес кошелька успешно скопирован"/>
                                <BetweenBlock className={`d-flex ${styles.status} items-center`}>
                                    <BlockStatus ColorStatus="green">4 подтверждения</BlockStatus>
                                    <p><strong>Последнее подтверждение:</strong></p>
                                    <p>01.03.2022 @ 02:14:21</p>
                                </BetweenBlock> 
                                <CustomTable className="table-crypto">
                                    <HeadTable>
                                        <TitleHead>Номер заказа</TitleHead>
                                        <TitleHead>Сумма</TitleHead>
                                        <TitleHead>Дата оплаты</TitleHead>
                                        <TitleHead>Статус оплаты</TitleHead>
                                    </HeadTable>
                                    <tbody>
                                        <tr>
                                            <TableData color="purple">#2003</TableData>
                                            <TableData>33.00₽</TableData>
                                            <TableData>20.02.2022</TableData>
                                            <TableDataStatus ColorStatus="green">решенные</TableDataStatus>
                                        </tr>
                                    </tbody>
                                </CustomTable>
                            </div>
                        </BetweenBlock>
                    </section>
                </Container>
            </>
        )
    }
}

export default NewOrderCrypto;