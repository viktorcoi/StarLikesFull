import { Component } from 'react/cjs/react.production.min';
import styles from '/public/assets/css/AdminsPages.module.css'
import MainTitle from '../../components/Assets/tags/MainTitle';
import ContainerForPages from "../../components/Assets/moduls/ContainerForPages";
import LinkBack from '../../components/Assets/tags/LinkBack';
import InformationSupport from '../../components/Assets/DialogSupport/InformationSuppot';
import DarkPurpleBlock from '../../components/Assets/Blocks/DarkPurpleBlock';
import HeaderDialog from '../../components/Assets/DialogSupport/HeaderDialog';
import BetweenBlock from '../../components/Assets/Blocks/BetweenBlock';
import PanelNavigationAdmin from '../../components/Assets/Navigations/PanelNavigationAdmin';
import PanelNavigationAdminMini from '../../components/Assets/Navigations/PanelNavigationAdminMini';
import Messenger from '../../components/Assets/DialogSupport/Messenger';

class SupportDialog extends Component {

    render() {  

        return (
            <>
                <ContainerForPages>
                    <section className={`${styles["dialog-support"]}`}>
                    <BetweenBlock>
                        <PanelNavigationAdminMini/>
                        <PanelNavigationAdmin/>
                            <div className={`pos-relative ${styles["right-side"]}`}>
                            <LinkBack/>
                                <MainTitle className={styles.title}>Обращение <span>vladislove</span></MainTitle>
                                <InformationSupport theme="Выведение средств" type="Выведение средств на платежную систему" service="[#2] Test"/>
                                <HeaderDialog ColorStatus="red" status="активен" date="01.04.2022 @ 02:14:21"/>
                                <DarkPurpleBlock className={`d-flex ${styles["for-dialog"]} pos-relative`}>
                                    <p className={`pos-absolute ${styles.date}`}>21 августа</p>
                                    <Messenger name="Админ" avatar="admin"/>
                                </DarkPurpleBlock>
                            </div>
                        </BetweenBlock>
                    </section>
                </ContainerForPages>
            </>
        )
    }
}

export default SupportDialog;