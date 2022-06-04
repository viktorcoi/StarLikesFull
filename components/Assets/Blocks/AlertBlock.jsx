import styles from './AlertBlock.module.css'

const AlertBlock = (props) => {
    return (
        <div className={`border-7px transition_0_3 ${styles.alert} ${styles[props.className] ?? ""}`}>
            <div className={`pos-relative`}>
                <img alt='alert status' src={`/assets/img/${props.img}.svg`} className={`${styles.status} pos-absolute`}></img>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <img alt='close' src='/assets/img/alert-close.svg' onClick={props.clickClose} className={`${styles["close"]} cursor-pointer pos-absolute`}></img>
            </div>
        </div>
    )
}

export default AlertBlock;