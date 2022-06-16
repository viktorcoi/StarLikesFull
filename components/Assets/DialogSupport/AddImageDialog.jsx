import styles from '/public/assets/css/MainPages.module.css'
import UploadImage from '../moduls/UploadImage';
import { useRef } from 'react';

const AddImageDialog = (props) => {

    const FileInput = useRef(null);

    const getFile = () => {
        FileInput.current.click();
    }

    return (
        <div className='d-flex' style={{width: "unset"}}>
            <img onClick={getFile} className={`transition_0_3 cursor-pointer ${styles["add-file-message"]}`} 
                alt="add file" src="/assets/img/add-file-message.svg">
            </img>
            <UploadImage {...props} ref={FileInput} multiple={true}/>
        </div>
        
    )
}

export default AddImageDialog