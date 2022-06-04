import styles from './CustomTable.module.css'

const TableDataNotifications = (props) => {
    return (
        <td>
            <div className={`${styles.notifications} d-flex border-circle margin-auto`}>
                <p className='margin-auto'>
                    {props.children}
                </p>
            </div>
        </td>
    )
}

export default TableDataNotifications;