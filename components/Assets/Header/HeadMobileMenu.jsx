import BetweenBlock from '../Blocks/BetweenBlock'
import styles from './Header.module.css'

const HeadMobileMenu = (props) => {
    return (
        <BetweenBlock className={`items-center ${styles["head-menu"]}`}>
            <img alt='logo site' src='/assets/img/logo-mobil.svg'></img>
            <img onClick={props.clickClose} className={`cursor-pointer ${styles["menu-close"]}`} alt='close menu' src='/assets/img/close-menu.svg'></img>
        </BetweenBlock>
    )
}

export default HeadMobileMenu