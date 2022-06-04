import styles from './BackgroundCircle.module.css'

const BackgroundCircle = () => {
    return (
        <div className={styles.back}>
            <img src='/assets/img/back-circle.png'></img>
            <img src='/assets/img/back-circle.png'></img>
        </div>
    )
}

export default BackgroundCircle;