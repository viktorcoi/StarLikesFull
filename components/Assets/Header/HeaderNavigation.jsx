import BetweenBlock from '../Blocks/BetweenBlock'
import styles from './Header.module.css'

const HeaderNavigation = (props) => {
    return (
        <nav className={`d-flex transition_0_3 ${styles.navigation} ${props.className ?? ""}`}>
            {props.children}
        </nav>
    )
}

export default HeaderNavigation