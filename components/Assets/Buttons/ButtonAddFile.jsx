import styles from './Buttons.module.css'

const ButtonAddFile = (props) => {
    return (
        <button {...props} className={`${styles["add-file"]} d-flex items-center ${styles[props.classButton] ?? ""} ${props.className ?? ""}`}>
            {props.children}
        </button>
    )
}

export default ButtonAddFile;