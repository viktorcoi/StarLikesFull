import BetweenBlock from '../Blocks/BetweenBlock'
import LinkA from '../tags/LinkA'
import styles from './Header.module.css'

const HeadMobileMenu = (props) => {
    return (
        <BetweenBlock className={`items-center ${styles["head-menu"]}`}>
            <LinkA onClick={props.clickClose} className="d-flex" href={props.href}><img alt='logo site' src='/assets/img/logo-mobil.svg'></img></LinkA>
            <img onClick={props.clickClose} className={`cursor-pointer ${styles["menu-close"]}`} alt='close menu' src='/assets/img/close-menu.svg'></img>
        </BetweenBlock>
    )
}

export default HeadMobileMenu