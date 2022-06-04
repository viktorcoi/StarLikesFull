import styles from './Buttons.module.css'

const ButtonYes = (props) => {
    return (
        <button {...props} className={`${styles["button-yes"]} d-flex items-center ${styles[props.classButton] ?? ""} ${props.className ?? ""}`}>
            Да
        </button>
    )
}

export default ButtonYes;