
import BetweenBlock from '../Blocks/BetweenBlock';
import BlockStatus from '../Table/BlockStatus';
import styles from './DialogSupport.module.css'

const HeaderDialog = (props) => {
    return (
        <BetweenBlock className={`items-center ${styles["header-dialog"]}`}>
            <div className='d-flex items-center'>
                <p className={styles.status}>Статус</p>
                <BlockStatus {...props}>{props.status}</BlockStatus>
            </div>
            <div className={`d-flex items-center ${styles["last-message"]}`}>
                <p className='d-flex items-center'>
                    <img alt='date last message' src='/assets/img/calendar.svg'></img>
                    Последнее обновление
                </p>
                <p className={styles.date}>{props.date}</p>
            </div>
        </BetweenBlock>
    )
}

export default HeaderDialog;