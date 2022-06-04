import DeleteElement from '../tags/DeleteElement';
import styles from './AddFile.module.css'

const AddFile = (props) => {
    return (
        <div className={`${styles["add-file"]} d-flex items-center ${props.className}`}>
            <p className='d-flex'>{props.nameFile}</p>
            <DeleteElement {...props}/>
        </div>
    )
}

export default AddFile;