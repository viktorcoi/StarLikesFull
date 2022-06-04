import { useState } from 'react';
import styles from './Input.module.css'
import InputMask from 'react-input-mask';

const PhoneInput = (props) => {

    const [value, set_value] = useState(0);
 
    return (
        <div className={`${styles["for-input"]} ${styles["for-input-error"]} pos-relative d-flex ${styles[props.class] ?? ""}`}>
            <div className={`${styles["for-error"]} d-flex pos-absolute transition_0_3 border-8px ${styles[props.classError] ?? ""}`}>
                <div className='pos-relative'>
                    <div className={`pos-absolute ${styles.triangle}`}></div>
                </div>
                <p className={styles.error}>
                    {props.textError}
                </p>
            </div>
            <InputMask {...props} onKeyUp={(e) => set_value(e.target.value[4] != "_")} 
                className={`${styles[props.className]} ${styles[props.addClassInput] ?? ""} transition_0_3 border-8px ${value ? styles.active : ""}`}
                mask='+7 (999) 999 9999'>
            </InputMask>
            <div className={`${styles["left-line"]} pos-absolute transition_0_3`}></div>
        </div>
    )
}

export default PhoneInput;