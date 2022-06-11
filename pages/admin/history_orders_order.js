import { Component } from 'react'
import ContainerForPages from "../../components/Assets/moduls/ContainerForPages";
import styles from '/public/assets/css/AdminsPages.module.css'
import BetweenBlock from '../../components/Assets/Blocks/BetweenBlock';
import MainTitle from '../../components/Assets/tags/MainTitle'
import PanelNavigationAdmin from '../../components/Assets/Navigations/PanelNavigationAdmin';
import LinkBack from '../../components/Assets/tags/LinkBack';
import InfoOrder from '../../components/Assets/Blocks/InfoOrder';
import DarkPurpleBlock from '../../components/Assets/Blocks/DarkPurpleBlock';
import PanelNavigationAdminMini from '../../components/Assets/Navigations/PanelNavigationAdminMini';

class HistoryOrdersOrder extends Component {


    render() {

        const price = "33.00₽"

        return (
            <>  
               <ContainerForPages>
                    <section>
                        <BetweenBlock>
                            <PanelNavigationAdminMini/>
                            <PanelNavigationAdmin/>
                            <div className={`pos-relative ${styles["right-side"]}`}>
                                <LinkBack addClass={styles["margin-left"]}/>
                                <MainTitle className={styles.title}>Заказ #1</MainTitle>
                                <p className={styles.parameter}>Пользователь <span>karapuz</span></p>
                                <BetweenBlock className={styles["info-order"]}>
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
                                <p className={`${styles.price}`}>Сумма заказа<span>{price}</span></p>
                            </div>
                        </BetweenBlock>
                    </section>
               </ContainerForPages>
            </>
        ) 
    }
}

export default HistoryOrdersOrder;