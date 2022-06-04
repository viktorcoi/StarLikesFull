import styles from './DialogSupport.module.css'

const InformationSupport = (props) => {
    return (
        <div className={props.className}>
            <p className={styles["info-support"]}>Тема обращения<span>{props.theme}</span></p>
            <p className={styles["info-support"]}>Тип обращения<span>{props.type}</span></p>
        </div>
    )
}

export default InformationSupport;