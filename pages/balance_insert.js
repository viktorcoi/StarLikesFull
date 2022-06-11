import { Component } from 'react';
import BetweenBlock from '../components/Assets/Blocks/BetweenBlock';
import ContainerForPages from "../components/Assets/moduls/ContainerForPages";
import PanelNavigationMain from '../components/Assets/Navigations/PanelNavigationMain';
import styles from '/public/assets/css/MainPages.module.css'
import PaymentForBalance from '../components/Assets/Blocks/PaymentForBalance';
import MainTitle from '../components/Assets/tags/MainTitle';
import PanelNavigationMainMini from '../components/Assets/Navigations/PanelNavigationMainMini';

class BalanceInsert extends Component {

    render() {

        return (
            <>
                <ContainerForPages>
                    <section className={styles["balance-insert"]}>
                        <BetweenBlock>
                            <PanelNavigationMainMini/>
                            <PanelNavigationMain/>
                            <div className={styles["right-side"]}>
                                <div className={`${styles["for-title-two"]}`}>
                                    <MainTitle>Пополнение баланса</MainTitle>
                                </div>
                                <PaymentForBalance/>
                            </div>
                        </BetweenBlock>
                    </section>
                </ContainerForPages>
            </>
        )
    }
}

export default BalanceInsert;