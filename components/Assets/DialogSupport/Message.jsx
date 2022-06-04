import DeleteElement from '../tags/DeleteElement';
import EditElement from '../tags/EditElement';
import styles from './DialogSupport.module.css'

const Message = (props) => {
    return (
        <div className={`${styles[props.className] ?? ""} ${styles.message} transition_0_3`}>
            <div>
                <div className='d-flex'>
                    <img className={styles["img-profile"]} src={`/assets/img/${props.avatar}.svg`} alt='avatar user'></img>
                    <div className={`d-flex items-center`}>
                        <p className={styles.name}>{props.name}</p>
                        <p className={styles.time}>{props.time}</p>
                        <div>
                            <EditElement onClick={props.clickEdit} imgName={styles.pen}/>
                            <DeleteElement clickDelete={props.clickDelete}/>
                        </div>
                    </div>
                </div>
                <p className={styles["text-message"]}>{props.message}</p>
            </div>
        </div>
    )
}

export default Message;