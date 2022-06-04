import DarkPurpleBlock from './DarkPurpleBlock'
import styles from './InfoOrder.module.css'

const InfoOrder = (props) => {
    return (
        <DarkPurpleBlock className={styles["info"]}>
            <div className={styles["for-info"]}>
                <p className={styles.parameter}>Социальная сеть</p>
                <p>{props.social}</p>
            </div>
            <div className={styles["for-info"]}>
                <p className={styles.parameter}>Вид накрутки</p>
                <p>{props.type}</p>
            </div>
            <div className={styles["for-info"]}>
                <p className={styles.parameter}>Количество</p>
                <p>{props.count}</p>
            </div>
            <div className={styles["for-info"]}>
                <p className={styles.parameter}>Цена</p>
                <p>{props.price}</p>
            </div>
            <div className={styles["for-info"]}>
                <p className={styles.parameter}>Ссылка</p>
                <p>{props.link}</p>
            </div>
        </DarkPurpleBlock>
    )
}

export default InfoOrder;