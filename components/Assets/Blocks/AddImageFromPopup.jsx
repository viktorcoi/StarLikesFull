import { useState } from 'react';
import ButtonAddFile from '../Buttons/ButtonAddFile'
import AddFile from './AddFile'
import styles from '/public/assets/css/MainPages.module.css'

const AddImageFromPopup = () => {

    const [files, setFiles] = useState([]);

    const getFiles = (files) => {
        setFiles(files)
    } 

    const onRemove = (i) => {
        setFiles(files => files.filter((file, id) => id !== i))
    }

    return (
        <>
            <ButtonAddFile onDone={getFiles.bind(this)}>Добавить файл</ButtonAddFile>
            <div className={`${styles["for-added"]} d-flex`}>
                {
                    files.map((file, i)=>(
                        file ?
                           <AddFile key={i} nameFile={file.name.substr(0, 8).concat(file.name.length > 8 ? "..." : "")} clickDelete={() => onRemove(i)}/>
                        : null
                    ))
                }
            </div>
        </>
    )
}

export default AddImageFromPopup
