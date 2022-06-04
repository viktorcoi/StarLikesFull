import styles from './CustomTable.module.css'

const CustomTable = (props) => {
    return (
        <div className={`${props.blockName ?? ""} ${styles.scroll}`}>
            <table className={`${styles['custom-table']} ${styles[props.className] ?? ""}`}>
                {props.children}
            </table>
        </div>
    )
}

export default CustomTable;