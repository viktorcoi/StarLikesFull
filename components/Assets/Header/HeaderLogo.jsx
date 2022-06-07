import LinkA from '../tags/LinkA';
import styles from './Header.module.css'

const HeaderLogo = (props) => {
    return (
        <LinkA href={props.href} className={`${styles.logo} none-select d-flex ${styles[props.className]}`}>
            <span href='/'>star likes</span>
            <img alt='logo' src='/assets/img/logo.svg'></img>
        </LinkA>
    )
}

export default HeaderLogo;