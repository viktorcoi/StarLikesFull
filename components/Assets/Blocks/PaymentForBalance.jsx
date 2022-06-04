import BetweenBlock from './BetweenBlock';
import Input from '../Inputs/Input';
import styles from './ChoosePaymentMethod.module.css'
import LinkButton from '../Buttons/LinkButton';
import ButtonCoupon from '../Buttons/ButtonCoupon';
import ChoosePaymentMethod from './ChoosePaymentMethod';
import { Formik } from "formik";
import * as Yup from "yup";
import InputWithError from '../Inputs/InputWithError';
import { useState } from 'react';

const PaymentForBalance = () => {

    const schema = Yup.object({
        summInsert: Yup.string().required("Поле не может быть пустым!"),
    });

    const [linkPage, SetLinkPage] = useState('')

    return (
        <ChoosePaymentMethod 
        online={
            <>
                <p><strong>Сумма пополнения</strong></p>
                <Formik
                    initialValues={{ 
                        summInsert: '',
                        coupon: '',
                    }}
                    validationSchema={schema}
                    onSubmit = {(values) => {console.log(values)}}>
                    {({ errors, handleSubmit, handleChange, values }) => {
                    return (
                        <>
                            <InputWithError onChange={handleChange} classDiv="main-dark-input" type="number"
                                className="money" placeholder='Введите сумму пополнения' name='summInsert'
                                classError={errors.summInsert ? "view" : ""} 
                                textError={errors.summInsert || "ОК"} value={values.summInsert}/>
                            <div className={styles["for-coupon"]}>
                                <p><strong>Или введите промокод</strong></p>
                                <BetweenBlock className={styles["for-input-coupon"]}>
                                    <Input onChange={handleChange} classDiv="main-dark-input"
                                        className="money" placeholder='Введите промокод баланса' name='coupon'
                                        classError={errors.coupon ? "view" : ""} 
                                        textError={errors.coupon || "ОК"} value={values.coupon}/>
                                    <ButtonCoupon href="">Хочу промокод!</ButtonCoupon>
                                </BetweenBlock>
                            </div>
                            <LinkButton onClick={handleSubmit} className={styles["mini-button"]} href="">Оплатить</LinkButton>  
                        </>
                    );}}
                </Formik>
            </>
        }
        cryptocurrency={
            <>
                <p><strong>Сумма пополнения</strong></p>
                <Formik
                    initialValues={{ 
                        summInsert: '',
                        coupon: '',
                    }}
                    validationSchema={schema}
                    onSubmit = {(values) => {console.log(values)}}>
                    {({ errors, handleSubmit, handleChange, values }) => {

                        const ChangeLink = () => {
                            if (values.summInsert > 0) {
                                SetLinkPage('/balance_crypto')
                            } else {
                                SetLinkPage('')
                            }
                        }

                    return (
                        <>
                            <InputWithError onChange={handleChange} classDiv="main-dark-input" type="number"
                                className="money" placeholder='Введите сумму пополнения' name='summInsert'
                                classError={errors.summInsert ? "view" : ""} onKeyUp={ChangeLink()} 
                                textError={errors.summInsert || "ОК"} value={values.summInsert}/>
                            <div className={styles["for-coupon"]}>
                                <p><strong>Или введите промокод</strong></p>
                                <BetweenBlock className={styles["for-input-coupon"]}>
                                    <Input onChange={handleChange} classDiv="main-dark-input"
                                        className="money" placeholder='Введите промокод баланса' name='coupon'
                                        classError={errors.coupon ? "view" : ""} 
                                        textError={errors.coupon || "ОК"} value={values.coupon}/>
                                    <ButtonCoupon href="">Хочу промокод!</ButtonCoupon>
                                </BetweenBlock>
                            </div>
                            <LinkButton href={linkPage} onClick={() => handleSubmit()} className={styles["mini-button"]}>Оплатить</LinkButton>  
                        </>
                    );}}
                </Formik>
            </>
        }/>
    )
}

export default PaymentForBalance;