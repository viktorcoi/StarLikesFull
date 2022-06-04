import styles from './Buttons.module.css'

const ButtonNo = (props) => {
    return (
        <button {...props} className={`${styles["button-no"]} d-flex items-center ${styles[props.classButton] ?? ""} ${props.className ?? ""}`}>
            Нет
        </button>
    )
}

export default ButtonNo;