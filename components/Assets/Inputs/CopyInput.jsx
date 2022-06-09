import Input from './Input';
import styles from './Input.module.css'
import copy from "copy-to-clipboard"; 
import { useState } from 'react';
import CopyElement from '../tags/CopyElement';
import AlertBlock from '../Blocks/AlertBlock';

const CopyInput = (props) => {

    const [copyWallet] = useState(props.value);
    const [alert, setAlert] = useState(false)

    const copyToWallet = () => {
        copy(copyWallet);
        setAlert(true)
    }

    return (
        <>
            <AlertBlock Alert={alert} callback = {(v) => {setAlert(v)}}
                img="alert-success" title="Готово!"  
                description={props.description} className={alert ? "open" : ""}>
            </AlertBlock>
            <div className={`pos-relative ${styles["copy-input"]}`}>
                <Input {...props} value={props.value} readOnly>
                    <CopyElement className="pos-absolute" clickCopy={copyToWallet}/>
                </Input>
            </div>
            
        </>
    )
}

export default CopyInput;