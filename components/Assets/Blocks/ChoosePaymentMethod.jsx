import { useState } from 'react';
import RadioInput from '../Inputs/RadioInput';
import styles from './ChoosePaymentMethod.module.css'
import SocialBlock from '../Blocks/SocialBlock';

const ChoosePaymentMethod = (props) => {

    const [value, setValue] = useState('online');

    const setGender = (event) => {
        setValue(event.target.value)
    }

    const PayOnlineRoutes = [
        {
            img: 'pay-card',
            name: 'Банковская карта',
            select: 'select'
        },
        {
            img: 'pay-umoney',
            name: 'ЮMoney'
        },
        {
            img: 'pay-qiwi',
            name: 'QIWI'
        }, 
        {
            img: 'pay-sber',
            name: 'SberPay'
        },
    ];

    const PayCryptoRoutes = [
        {
            img: 'pay-btc',
            name: 'BTC',
            select: 'select'
        },
        {
            img: 'pay-etc',
            name: 'ETC'
        },
        {
            img: 'pay-bnb',
            name: 'BNB'
        }, 
        {
            img: 'pay-usdc',
            name: 'USDC'
        },
        {
            img: 'pay-usdt',
            name: 'USDT'
        }, 
        {
            img: 'pay-doge',
            name: 'DOGE'
        },
    ];

    return (
        <>
            <p className={styles["choose-pay"]}><strong>Способ оплаты</strong></p>
            <div className={`d-flex ${styles['for-radio']}`}>
                <RadioInput value="online" defaultChecked onChange={(e)=>setGender(e)} 
                    className={styles.radio} id="online" for="online" name="your-wallet">Онлайн-касса
                </RadioInput>
                <RadioInput value="cryptocurrency" onChange={(e)=>setGender(e)} id="cryptocurrency" 
                    for="cryptocurrency" name="your-wallet">Криптовалюта
                </RadioInput>
            </div>
            <div className={`${styles.online} ${value == "online" ? styles.open : ""}`}>
                <div className={`${styles["for-pays"]} d-flex wrap`}>
                    {
                        PayOnlineRoutes.slice(0, 4).map(v => {
                            return (
                                <SocialBlock key={v} addClass={styles["pay-online"]} className={v.select} img={v.img}>
                                    {v.name}
                                </SocialBlock>
                            );
                        })
                    }
                </div>
                {props.online}
            </div>
            <div className={`${styles.cryptocurrency} ${value == "cryptocurrency" ? styles.open : ""}`}>
                <div className={`${styles["for-pays"]} d-flex wrap`}>
                    {
                        PayCryptoRoutes.slice(0, 6).map(v => {
                            return (
                                <SocialBlock key={v} addClass={styles["pay-crypto"]} className={v.select} img={v.img}>
                                    {v.name}
                                </SocialBlock>
                            );
                        })
                    }
                </div>
                {props.cryptocurrency}
            </div>
        </>
    )
}

export default ChoosePaymentMethod;