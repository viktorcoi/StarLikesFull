import { Component } from 'react';
import BetweenBlock from '../components/Assets/Blocks/BetweenBlock';
import ContainerForPages from "../components/Assets/moduls/ContainerForPages";
import PanelNavigationMain from '../components/Assets/Navigations/PanelNavigationMain';
import styles from '/public/assets/css/MainPages.module.css'
import SocialBlock from '../components/Assets/Blocks/SocialBlock';
import SocialRoutes from '../components/Assets/SocialRoutes';
import LinkButton from '../components/Assets/Buttons/LinkButton';
import MainTitle from '../components/Assets/tags/MainTitle';
import PanelNavigationMainMini from '../components/Assets/Navigations/PanelNavigationMainMini';
import LinkA from '../components/Assets/tags/LinkA';
import LinkBack from '../components/Assets/tags/LinkBack'

class NewOrder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeClasses: [false, false, false]};
    }

    addClass(index) {
        const activeClasses = [...this.state.activeClasses.slice(0, index), !this.state.activeClasses[index], this.state.activeClasses.slice(index + 1)].flat();
        this.setState({activeClasses});
    }

    render() {

        const activeClasses = this.state.activeClasses.slice();

        return (
            <>
                <ContainerForPages>
                    <section className={styles["for-menu"]}>
                        <BetweenBlock>
                            <div className={`${styles["menu-navigation"]} ${activeClasses[0] ? styles.hide : ""}`}>
                                <p className='d-flex cursor-pointer items-center' onClick={() => this.addClass(0)}>
                                    <img alt='New order' src='/assets/img/nav-plus.svg'></img>
                                    Новый заказ
                                </p>
                                <LinkA className='d-flex items-center' href="/my_orders">
                                    <img alt='New order' src='/assets/img/nav-folder.svg'></img>
                                    Мои заказы
                                </LinkA>
                                <LinkA className='d-flex items-center' href="/balance">
                                    <img alt='New order' src='/assets/img/input-wallet.svg'></img>
                                    Баланс
                                </LinkA>
                            </div>
                            <PanelNavigationMainMini/>
                            <PanelNavigationMain/>
                            <div className={`${styles["right-side"]} ${activeClasses[0] ? styles["not-hide"] : ""}`}>
                                <div className={`pos-relative ${styles["for-back-mobil"]}`}>
                                    <LinkBack onClick={() => this.addClass(0)}/>
                                    <MainTitle>Новый заказ</MainTitle>
                                </div>
                                <BetweenBlock className={`items-center ${styles["for-title-two"]}`}>
                                    <MainTitle>Выберите социальную сеть</MainTitle>
                                    <p className={styles.step}>Шаг 1/3</p>
                                </BetweenBlock>
                                <div className={`${styles["for-social"]} d-flex wrap`}>
                                    {
                                        SocialRoutes.slice(0, 13).map(v => {
                                            return (
                                                <SocialBlock key={v} className={v.select} img={v.img}>
                                                    {v.name}
                                                </SocialBlock>
                                            );
                                        })
                                    }
                                </div>
                                <LinkButton className={styles["margin-link"]} href="/new_order_settings">Вперёд</LinkButton>
                            </div>
                        </BetweenBlock>
                    </section>
                </ContainerForPages>
            </>
        )
    }
}

export default NewOrder;