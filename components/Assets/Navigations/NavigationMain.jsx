import styles from './Navigations.module.css'

const NavigationMain = (props) => {
    return (
        <>
            <nav className={ styles[props.className] ?? styles.navigation}>
                {props.children}
            </nav>
        </>
    )
}

export default NavigationMain;