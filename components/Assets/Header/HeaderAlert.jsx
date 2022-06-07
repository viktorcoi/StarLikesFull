import LinkA from '../tags/LinkA';
import styles from './Header.module.css'

const HeaderAlert = (props) => {
    return (
        <LinkA {...props} className={`${styles.alert} d-flex pos-relative`} href="../../notifications">
            <div className='d-flex items-center'>
                <img className='transition_0_3' alt="alerts" src='/assets/img/alert.svg'></img>
                <p className='none-select'>Уведомления</p>
            </div>
            <div className={`pos-absolute border-circle d-flex ${styles["count-alert"]} ${styles[props.statusAlert] ?? ""}`}>
                <p className='margin-auto none-select'>{props.countAlert}</p>
            </div>
        </LinkA>
    )
}

export default HeaderAlert;