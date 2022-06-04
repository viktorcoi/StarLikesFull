import styles from './MangementElements.module.css'

const EditElement = (props) => {
    return (
        <img onClick={props.clickEdit} className={`${styles["edit"]} cursor-pointer 
        ${props.imgName}`} src="/assets/img/pen-edit.svg" alt="edit file"/>
    )
}

export default EditElement;