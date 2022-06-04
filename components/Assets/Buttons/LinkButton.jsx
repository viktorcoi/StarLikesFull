import LinkA from '../tags/LinkA';
import styles from './Buttons.module.css'

const LinkButton = (props) => {
    return (
        <LinkA {...props} className={`${styles["link-button"]} d-flex items-center pos-relative ${props.className ?? ""}`}>
            <span className='d-flex items-center'>
                {props.children}
                <img alt='image link' src='/assets/img/circle-arrow.svg'></img>
            </span>
        </LinkA>
    )
}

export default LinkButton;