import styles from './CustomTable.module.css'

const TableDataDate = (props) => {
    return (
        <td className={styles[props.color]} {...props}>
            <p className='pos-relative cursor-pointer'>{props.date}
                <span>{props.time}</span>
                <div className={`${styles["info-date"]} transition_0_3 pos-absolute`}>
                    <div className='pos-absolute'></div>
                    <p>{props.daysAgo}</p>
                </div>
            </p>
        </td>
    )
}

export default TableDataDate;