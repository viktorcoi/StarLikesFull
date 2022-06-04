import styles from './MangementElements.module.css'

const DeleteElement = (props) => {
    return (
        <img onClick={props.clickDelete} className={`${styles["recycle"]} cursor-pointer 
        ${props.imgName}`} src="/assets/img/recycle-bin.svg" alt="delete file"/>
    )
}

export default DeleteElement;