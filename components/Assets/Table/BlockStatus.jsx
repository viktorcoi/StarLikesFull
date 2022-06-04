import styles from './CustomTable.module.css'

const BlockStatus = (props) => {
    return (
        <div className={`border-8px margin-auto ${styles[props.ColorStatus]}`}>
            <p>{props.children}</p>
        </div>
       
    )
}

export default BlockStatus;