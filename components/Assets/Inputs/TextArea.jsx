import { useState } from 'react';
import styles from './Input.module.css'

const TextArea = (props) => {

    const [value, set_value] = useState(0);
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
                <div className={`${styles["for-input"]} pos-relative d-flex ${styles[props.classDiv] ?? ""}`}>
                    <textarea {...props} onBlur={() => setError(false)} onFocus={() => setError(true)} onKeyUp={(e) => {set_value(e.target.value.length), props.onKeyUp}} type={props.type}
                        className={`transition_0_3 border-8px ${value ? styles.active : ""} ${styles[props.className] ?? ""} ${styles[props.addClassInput] ?? ""}`}>
                        {props.none}
                    </textarea>
                    <div className={`${styles["left-line"]} pos-absolute transition_0_3`}></div>
                    {props.children}
                </div>
            </div>  
        </>
    )
}

export default TextArea;