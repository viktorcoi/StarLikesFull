import LinkA from '../tags/LinkA';
import styles from './Header.module.css'

const ProfileDrop = (props) => {
    return (
        <div className={`pos-relative ${styles["profile"]}`}>
            <div onClick={props.onClick} className={`d-flex items-center cursor-pointer ${styles["main-profile"]}`}>
                <img alt='user avatar' src={`/assets/img/${props.img}.svg`}></img>
                <p className='transition_0_3 none-select'>{props.name}</p>
                <img className={`transition_0_3 ${styles.arrow} ${styles[props.imgClass] ?? ""}`} alt='arrow down' src='/assets/img/arrow-down-white.svg'></img>
            </div>
            <div className={`pos-absolute d-flex transition_0_3 ${styles["drop-profile"]} ${styles[props.className] ?? ""}`}>
                {props.children}
                <LinkA className="none-select" onClick={props.clickClose} href="/setting_profile">
                    <p className='d-flex items-center'>
                        <img alt='main page' src='/assets/img/profile-pen.svg'></img>
                        Изменить профиль
                    </p>
                </LinkA>
                <LinkA className="none-select" onClick={props.clickClose} href="/authorization">
                    <p className='d-flex items-center'>
                        <img alt='main page' src='/assets/img/profile-exit.svg'></img>
                        Выйти
                    </p>
                </LinkA>
            </div>
        </div>
    )
}

export default ProfileDrop;