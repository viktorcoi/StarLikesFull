import UploadImage from '../moduls/UploadImage';
import styles from './Buttons.module.css'
import { useRef } from 'react';

const ButtonAddFile = (props) => {

    const FileInput = useRef(null);

    const getFile = () => {
        FileInput.current.click();
    }

    return (
        <button onClick={getFile}
            className={`${styles["add-file"]} pos-relative d-flex items-center ${styles[props.classButton] ?? ""} ${props.className ?? ""}`}>
            <UploadImage {...props} ref={FileInput} multiple={true}/>
            {props.children}
        </button>
    )
}

export default ButtonAddFile;