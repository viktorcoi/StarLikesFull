import { useState } from 'react';
import Input from './Input';
import styles from './Input.module.css'

const InputWithError = (props) => {

    const [error, setError] = useState(false);

    return (
        <>
            <div className={`pos-relative ${styles["for-input-error"]}`}>
                <div className={`${styles["for-error"]} d-flex pos-absolute transition_0_3 border-7px ${error ? styles["view-ok"] : ""} ${styles[props.classError] ?? ""}`}>
                    <div className='pos-relative'>
                        <div className={`pos-absolute ${styles.triangle}`}></div>
                    </div>
                    <p className={styles.error}>
                        {props.textError}
                    </p>
                </div>
                <Input onBlur={() => setError(false)} onFocus={() => setError(true)} {...props}></Input>
            </div>
            
        </>
    )
}

export default InputWithError;