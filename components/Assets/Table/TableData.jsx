import styles from './CustomTable.module.css'

const TableData = (props) => {
    return (
        <td  {...props} className={`${styles[props.color] ?? ""} ${styles[props.dataName] ?? ""}`}>
            {props.children}
        </td>
    )
}

export default TableData;