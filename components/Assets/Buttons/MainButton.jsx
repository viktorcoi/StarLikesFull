import styles from './Buttons.module.css'

const MainButton = (props) => {
    return (
        <button {...props} className={`${styles["main-button"]} d-flex items-center pos-relative ${styles[props.classButton] ?? ""} ${props.className ?? ""}`}>
            <span className='d-flex items-center'>
                {props.children}
            </span>
        </button>
    )
}

export default MainButton;