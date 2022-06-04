import styles from '/public/assets/css/AdminsPages.module.css'
import AutosizeInput from 'react-input-autosize';
import { useState } from "react";
import BetweenBlock from './BetweenBlock';

const AuthorizationPrm4u = (props) => {

    const [addclass, add_class] = useState(false);

    const AddClass = () => {
        add_class(!addclass);
    };

    const password = "password";
    const [type, set_type] = useState(password);

    const CheсkPass = () => {
        if (type == "password") {
            password = "text";
            set_type("text", type)
        } else {
            password = "password";
            set_type("password", type)
        }
    }

    return (
        <BetweenBlock className={`items-center ${styles["auth-prm4u"]}`}>
            <div>
            <p className={styles["title-prm4u"]}>Авторизация Prm4u</p> 
                <div>
                    <div className={`d-flex ${styles["user-info"]}`}>
                        <p>login</p>
                        <AutosizeInput readOnly spellcheck="false" type="text" value={props.login}/>
                    </div> 
                    <div className={`d-flex ${styles["user-info"]} items-center`}>
                        <p>pass</p>
                        <AutosizeInput readOnly spellcheck="false" type={type} value={props.pass}/>
                        <img onClick={() => {CheсkPass(), AddClass()}} alt="view password" src="/assets/img/eye-prm4u.svg"
                            className={`cursor-pointer transition_0_3 ${addclass ? styles.view : ""}`}>
                        </img>
                    </div>   
                </div>   
            </div>
            {props.children}   
        </BetweenBlock>
    )
}

export default AuthorizationPrm4u;