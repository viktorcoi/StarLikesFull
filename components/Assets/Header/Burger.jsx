import styles from './Header.module.css'

const Burger = (props) => {
    return (
        <div onClick={props.onClick} className={`${styles.burger} between transition_0_3 cursor-pointer ${styles[props.className] ?? ""}`}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    ) 
}

export default Burger;