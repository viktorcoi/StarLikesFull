import { Component } from 'react'
import Container from "../../components/Assets/moduls/Container";
import styles from '/public/assets/css/AdminsPages.module.css'
import BetweenBlock from '../../components/Assets/Blocks/BetweenBlock';
import MainTitle from '../../components/Assets/tags/MainTitle'
import PanelNavigationAdmin from '../../components/Assets/Navigations/PanelNavigationAdmin';
import DarkPurpleBlock from '../../components/Assets/Blocks/DarkPurpleBlock';
import AuthorizationPrm4u from '../../components/Assets/Blocks/AuthorizationPrm4u';
import LinkButton from '../../components/Assets/Buttons/LinkButton';
import PanelNavigationAdminMini from '../../components/Assets/Navigations/PanelNavigationAdminMini';
import LinkBack from '../../components/Assets/tags/LinkBack';

class Prm4u extends Component {

    render() {

        return (
            <>  
               <Container>
                    <section className={`${styles["admins-page"]}`}>
                        <BetweenBlock>
                            <PanelNavigationAdminMini/>
                            <PanelNavigationAdmin/>
                            <div className={styles["right-side"]}>
                                <div className={`pos-relative ${styles["for-back-mobil"]} ${styles["for-back-prm4u"]}`}>
                                    <LinkBack/>
                                    <MainTitle>Взаимодействие с Prm4u</MainTitle>
                                </div>
                                <div className={styles["for-title"]}>
                                    <MainTitle>Взаимодействие с Prm4u</MainTitle>
                                </div>
                                <DarkPurpleBlock className={styles["for-balance"]}>
                                    <BetweenBlock>
                                        <div className='d-flex items-center'>
                                            <img className={styles["img-wallet"]} alt='wallet' src='/assets/img/input-wallet-white.svg'></img>
                                            <p className={`${styles["margin-0"]} ${styles.price}`}>Баланс: <span>0.00₽</span></p>
                                        </div>
                                        <LinkButton href="">Пополнить баланс</LinkButton>
                                    </BetweenBlock>
                                </DarkPurpleBlock>
                                <AuthorizationPrm4u login="vladislove" pass="vladislove2281488ZOV">
                                    <LinkButton href="">Изменить данные</LinkButton>
                                </AuthorizationPrm4u>
                            </div>
                        </BetweenBlock>
                    </section>
               </Container>
            </>
        ) 
    }
}

export default Prm4u;