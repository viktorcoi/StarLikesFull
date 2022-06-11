import { useState } from 'react';
import styles from './Input.module.css'

const Input = (props) => {

    const [value, set_value] = useState(0);

    return (
        <>
            <div className={`${styles["for-input"]} pos-relative d-flex ${styles[props.classDiv] ?? ""} ${styles[props.showPage] ?? ""}`}>
                <input {...props} onKeyUp={(e) => {set_value(e.target.value.length), props.onKeyUp}} type={props.type}
                    className={`transition_0_3 none-select border-7px ${value ? styles.active : ""} ${styles[props.className] ?? ""} ${styles[props.addClassInput] ?? ""}`}>
                    {props.none}
                </input>
                {props.children}
            </div>
        </>
    )
}

export default Input;