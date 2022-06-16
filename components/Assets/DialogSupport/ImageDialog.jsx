
import { useState } from 'react';
import styles from './DialogSupport.module.css'

const ImageDialog = (props) => {

    const [open, setOpen] = useState(false)

    document.body.style.overflow = open ? 'hidden' : 'overlay';

    return (
        <>
            <div onClick={() => setOpen(!open)} className={`${styles["bg-image"]} d-flex cursor-pointer transition_0_3 ${open ? styles.open : ""}`}>
                <img {...props} className="transition_0_3"/>
            </div>
            <div onClick={() => setOpen(!open)} className={`${open ? styles.open : ""} d-flex border-7px cursor-pointer ${styles["image-dialog"]}`}>
                <img {...props} className="transition_0_3"/>
            </div>
        </>
    )
}

export default ImageDialog;