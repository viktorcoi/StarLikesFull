import LinkA from "../tags/LinkA";
import styles from './Navigations.module.css'

const ElementNavigation = (props) => {
    return (
        <LinkA href={props.href} className={`${styles[props.className] ?? ""} d-flex items-center`}>
            {props.children}
        </LinkA>
    )
}

export default ElementNavigation;