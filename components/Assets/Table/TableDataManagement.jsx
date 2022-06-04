import styles from './CustomTable.module.css'
import DeleteElement from '../tags/DeleteElement'
import EditElement from '../tags/EditElement'

const TableDataManagement = (props) => {
    return (
        <td>
            <div className={`${styles.management} d-flex items-center`}>
                <EditElement {...props}></EditElement>
                <DeleteElement {...props}></DeleteElement>
                {props.children}
            </div>
        </td>
    )
}

export default TableDataManagement;