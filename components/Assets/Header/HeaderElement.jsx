import LinkA from '../tags/LinkA'
import styles from './Header.module.css'

const HeaderElement = (props) => {
    return (
        <LinkA {...props} className={`d-flex items-center none-select ${styles[props.className]}`}>
            <img alt='icon navigation' src={`/assets/img/${props.img}.svg`}></img>
            {props.children}
        </LinkA>
    )
}

export default HeaderElement