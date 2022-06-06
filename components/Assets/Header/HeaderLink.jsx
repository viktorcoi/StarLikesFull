import LinkA from '../tags/LinkA'
import styles from './Header.module.css'

const HeaderLink = (props) => {
    return (
        <div className={styles[props.className]}>
            <LinkA {...props} className="d-flex items-center" href={props.href}>
                <img className={styles[props.classIMG]} src={`/assets/img/${props.img}.svg`} alt="image link" />
                {props.children}
            </LinkA>
        </div>
    )
}

export default HeaderLink