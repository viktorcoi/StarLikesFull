import { Component } from 'react/cjs/react.production.min';
import MainTitle from '../components/Assets/tags/MainTitle';
import ContainerForPages from "../components/Assets/moduls/ContainerForPages";
import styles from '/public/assets/css/MainPages.module.css'
import LinkBack from '../components/Assets/tags/LinkBack';
import InformationSupport from '../components/Assets/DialogSupport/InformationSuppot';
import DarkPurpleBlock from '../components/Assets/Blocks/DarkPurpleBlock';
import HeaderDialog from '../components/Assets/DialogSupport/HeaderDialog';
import BetweenBlock from '../components/Assets/Blocks/BetweenBlock';
import PanelNavigationMain from '../components/Assets/Navigations/PanelNavigationMain';
import PanelNavigationMainMini from '../components/Assets/Navigations/PanelNavigationMainMini';
import Messenger from '../components/Assets/DialogSupport/Messenger';

class DialogSupport extends Component {

    render() {  

        return (
            <>
                <ContainerForPages>
                    <section className={`${styles["dialog-support"]}`}>
                    <BetweenBlock>
                        <PanelNavigationMainMini/>
                        <PanelNavigationMain/>
                            <div className={`pos-relative ${styles["right-side"]}`}>
                            <LinkBack/>
                                <MainTitle className={styles.title}>Обращение #2</MainTitle>
                                <InformationSupport theme="Выведение средств" type="Выведение средств на платежную систему" service="[#2] Test"/>
                                <HeaderDialog ColorStatus="purple" status="активен" date="01.04.2022 @ 02:14:21"/>
                                <DarkPurpleBlock className={`d-flex ${styles["for-dialog"]} pos-relative`}>
                                    <p className={`pos-absolute ${styles.date}`}>21 августа</p>
                                    <Messenger name="Владик" avatar="user"/>
                                </DarkPurpleBlock>
                            </div>
                        </BetweenBlock>
                    </section>
                </ContainerForPages>
            </>
        )
    }
}

export default DialogSupport;