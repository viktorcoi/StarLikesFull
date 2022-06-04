import { Component } from 'react';
import BetweenBlock from '../components/Assets/Blocks/BetweenBlock';
import Container from "../components/Assets/moduls/Container";
import PanelNavigationMain from '../components/Assets/Navigations/PanelNavigationMain';
import styles from '/public/assets/css/MainPages.module.css'
import MainTitle from '../components/Assets/tags/MainTitle';
import { Formik } from "formik";
import * as Yup from "yup";
import Input from '../components/Assets/Inputs/Input';
import ButtonCoupon from '../components/Assets/Buttons/ButtonCoupon';
import LinkButton from '../components/Assets/Buttons/LinkButton';
import ButtonWithArrow from '../components/Assets/Buttons/ButtonWithArrow';
import LinkBack from '../components/Assets/tags/LinkBack';
import Popup from '../components/Assets/Popup/Popup';
import LinkA from '../components/Assets/tags/LinkA';
import PanelNavigationMainMini from '../components/Assets/Navigations/PanelNavigationMainMini';

class NewOrderPay extends Component {

    constructor(props) {
        super(props);
        this.state = {activeClasses: [false, false]};
        this.addClass = this.addClass.bind(this);
    }

    addClass(index) {
        const activeClasses = [...this.state.activeClasses.slice(0, index), !this.state.activeClasses[index], this.state.activeClasses.slice(index + 1)].flat();
        this.setState({activeClasses});
        document.body.style.overflow = (activeClasses[0] || activeClasses[1]) ? 'hidden' : 'overlay';
    }

    render() {

        const activeClasses = this.state.activeClasses.slice();
        const schema = Yup.object({
            coupon: Yup.string(),
        });

        return (
            <>
                <Popup clickClose={() => this.addClass(0)} className={activeClasses[0]? "open" : ""} title="Оплата прошла успешна!">
                    <LinkButton onClick={() => this.addClass(1)} href="/my_orders">Перейти в мои заказы</LinkButton>
                </Popup>

                <Popup namePopup="popup-text" clickClose={() => this.addClass(1)} className={activeClasses[1]? "open" : ""} title="На балансе недостаточно средств">
                    <div>
                        <p>Вы можете
                            <span> <LinkA onClick={() => this.addClass(1)} href="/balance_insert">пополнить баланс</LinkA> </span>
                            или
                            <span> <LinkA onClick={() => this.addClass(1)} href="/new_order_pay_confirm">оплатить заказ отдельно</LinkA> </span>
                        </p>
                    </div>
                    <LinkButton onClick={() => this.addClass(1)} href="/my_orders">Перейти в мои заказы</LinkButton>
                </Popup>
                <Container>
                    <section className={`${styles["order_settings"]} ${styles["order-pay"]}`}>
                        <BetweenBlock>
                            <PanelNavigationMainMini/>
                            <PanelNavigationMain/>
                            <div className={styles["right-side"]}>
                                <BetweenBlock className={`items-center ${styles["for-title-two"]}`}>
                                    <MainTitle>Оплата</MainTitle>
                                    <p className={styles.step}>Шаг 3/3</p>
                                </BetweenBlock>
                                <Formik
                                    initialValues={{ 
                                        coupon: '',
                                    }}
                                    validationSchema={schema}
                                    onSubmit = {(values) => {console.log(values)}}>
                                    {({ errors, handleSubmit, handleChange, values }) => {
                                    return (
                                        <>
                                            <div className={styles["for-coupon"]}>
                                                <p><strong>Есть промокод?</strong></p>
                                                <BetweenBlock className={styles["for-input-coupon"]}>
                                                    <Input onChange={handleChange} classDiv="main-dark-input"
                                                        className="coupon" placeholder='Введите промокод' name='coupon'
                                                        classError={errors.coupon ? "view" : ""} 
                                                        textError={errors.coupon || "ОК"} value={values.coupon}/>
                                                    <ButtonCoupon href="">Хочу промокод!</ButtonCoupon>
                                                </BetweenBlock>
                                            </div>
                                            <BetweenBlock className={`items-center ${styles["management-order"]}`}>
                                                <div className='d-flex items-center'>
                                                    <p className={styles.price}>
                                                        Сумма к оплате
                                                        <span>0.00₽</span>
                                                    </p>
                                                </div>
                                                <div className='d-flex items-center'>
                                                    <LinkBack className="white-link">К 2 шагу</LinkBack>
                                                    <ButtonWithArrow onClick={()=>{handleSubmit(), this.addClass(1)}}>Оплатить</ButtonWithArrow> 
                                                </div>
                                            </BetweenBlock>
                                        </>
                                    );}}
                                </Formik>
                                
                            </div>
                        </BetweenBlock>
                    </section>
                </Container>
            </>
        )
    }
}

export default NewOrderPay;