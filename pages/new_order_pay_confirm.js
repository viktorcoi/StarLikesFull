import { Component } from 'react';
import BetweenBlock from '../components/Assets/Blocks/BetweenBlock';
import ContainerForPages from "../components/Assets/moduls/ContainerForPages";
import PanelNavigationMain from '../components/Assets/Navigations/PanelNavigationMain';
import styles from '/public/assets/css/MainPages.module.css'
import MainTitle from '../components/Assets/tags/MainTitle';
import ButtonWithArrow from '../components/Assets/Buttons/ButtonWithArrow';
import LinkBack from '../components/Assets/tags/LinkBack';
import ChoosePaymentMethod from '../components/Assets/Blocks/ChoosePaymentMethod';
import LinkButton from '../components/Assets/Buttons/LinkButton';
import InfoOrder from '../components/Assets/Blocks/InfoOrder';
import DarkPurpleBlock from '../components/Assets/Blocks/DarkPurpleBlock';
import PanelNavigationMainMini from '../components/Assets/Navigations/PanelNavigationMainMini';

class NewOrderConfirm extends Component {

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
                                <div className={`pos-relative ${styles["for-back-mobil"]}`}>
                                    <LinkBack/>
                                    <MainTitle>Новый заказ</MainTitle>
                                </div>
                                <div className={styles["for-title"]}>
                                    <MainTitle>Подтверждение заказa</MainTitle>
                                </div>
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
                                        <p className={styles.price}>
                                            Сумма к оплате
                                            <span>{price}</span>
                                        </p>
                                    </div>
                                </BetweenBlock>
                                <ChoosePaymentMethod online={
                                <>
                                    <BetweenBlock className={`items-center ${styles["management-order"]} ${styles["margin-left"]}`}>
                                        <div className={`${styles["between-mobil"]} d-flex items-center`}>
                                            <LinkBack className="white-link">К 3 шагу</LinkBack>
                                            <ButtonWithArrow classButton="link-button">Оплатить</ButtonWithArrow> 
                                        </div>
                                    </BetweenBlock>
                                </>}
                                cryptocurrency={
                                <>
                                    <BetweenBlock className={`items-center ${styles["management-order"]} ${styles["margin-left"]}`}>
                                        <div className={`${styles["between-mobil"]} d-flex items-center`}>
                                            <LinkBack className="white-link">К 3 шагу</LinkBack>
                                            <LinkButton href="/new_order_crypto">
                                                Оплатить
                                            </LinkButton> 
                                        </div>
                                    </BetweenBlock>
                                </>}/>
                                
                            </div>
                        </BetweenBlock>
                    </section>
                </ContainerForPages>
            </>
        )
    }
}

export default NewOrderConfirm;