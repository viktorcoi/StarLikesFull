import styles from './AlertBlock.module.css'

const AlertBlock = (props) => {

    const { callback, Alert } = props;

    const closeAlert = () => {
        callback(false)
    }

    if (callback && (Alert == true) ) {
        setTimeout(() => {
            callback(false)
        }, 3000)
    }

    return (
        <div className={`border-7px transition_0_3 ${styles.alert} ${(Alert ? styles.open : "")}`}>
            <div className={`pos-relative`}>
                <img alt='alert status' src={`/assets/img/${props.img}.svg`} className={`${styles.status} pos-absolute`}></img>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <img alt='close' src='/assets/img/alert-close.svg' onClick={closeAlert} className={`${styles["close"]} cursor-pointer pos-absolute`}></img>
            </div>
        </div>
    )
}

export default AlertBlock;