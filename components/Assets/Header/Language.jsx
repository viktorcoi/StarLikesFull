import { useState } from 'react';
import BetweenBlock from '../Blocks/BetweenBlock';
import styles from './Header.module.css'

const Language = (props) => {

    const en = "en";
    const ru = "ru"
    const [valueEN, setvalueEN] = useState(en);
    const [valueRU, setvalueRU] = useState(ru);

    const handleClick = () => {
        if (valueEN == "en") {
            en = "ru";
            setvalueEN("ru", valueEN)
            ru = "en";
            setvalueRU("en", valueRU)
        } else {
            en = "en";
            setvalueEN("en", valueEN)
            ru = "ru";
            setvalueRU("ru", valueEN)
        }
    }

    const [choose, open_choose] = useState(false);

    const OpenChoose = () => {
        open_choose(!choose);
    };

    return (
        <div tabIndex={0} onBlur={() => open_choose(false)} className={`${styles["for-language"] ?? ""} pos-relative`}>
            <BetweenBlock onClick={() => OpenChoose(choose)} className={`${props.className} d-flex items-center cursor-pointer transition_0_3`}>
                <img alt='language' src={`/assets/img/${valueRU}.svg`}></img>
                <p className='none-select'>{valueRU}</p>
            </BetweenBlock>
            <BetweenBlock onClick={() => {handleClick(), OpenChoose(choose)}} 
                className={`${props.className} d-flex pos-absolute items-center cursor-pointer transition_0_3 ${props.class} ${(choose ? props.addClass : "")}`}>
                <img alt='language' src={`/assets/img/${valueEN}.svg`}></img>
                <p className='none-select'>{valueEN}</p>     
            </BetweenBlock>
        </div>
    )
}

export default Language;