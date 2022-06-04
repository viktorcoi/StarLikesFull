import { useState } from 'react';
import styles from './Input.module.css'
import InputWithError from './InputWithError';

const PasswordInput = (props) => {

    const [addclass, add_class] = useState(false);

    const AddClass = () => {
        add_class(!addclass);
    };

    const password = props.type;
    const [type, set_type] = useState(password);

    const CheсkPass = () => {
        if (type == props.type) {
            password = "text";
            set_type("text", type)
        } else {
            password = props.type;
            set_type(props.type, type)
        }
    }

    return (
        <>
            <InputWithError {...props} type={type}>
                <img onClick={() => {CheсkPass(), AddClass()}} className={`${styles["view-pass"]} 
                    cursor-pointer pos-absolute transition_0_3
                    ${addclass ? styles.view : ""}`} alt='view password' src={`/assets/img/view.svg`}>
                </img>
            </InputWithError>
        </>
    )
}

export default PasswordInput;