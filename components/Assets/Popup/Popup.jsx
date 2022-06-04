import BetweenBlock from '../Blocks/BetweenBlock';
import styles from './Popups.module.css'
import HTitle from '../tags/HTitle';
import DarkPurpleBlock from '../Blocks/DarkPurpleBlock';

const Popup = (props) => {
    return (
        <>
        <div className={`d-flex transition_0_3 ${styles['bg-popup']} ${styles[props.className] ?? ""}`}>
            <div onClick={props.clickClose} className={styles['for-close']}></div>
            <DarkPurpleBlock className={`${styles[props.namePopup] ?? ""} ${styles.popup} margin-auto transition_0_3`}>
                <BetweenBlock className={`${styles["popup-title"]}`}>
                    <HTitle>{props.title}</HTitle>
                    <img onClick={props.clickClose} className='cursor-pointer' alt='close popup' src='/assets/img/close.svg'></img>
                </BetweenBlock>
                {props.children}
            </DarkPurpleBlock>
        </div>
        </>
    )
}

export default Popup;