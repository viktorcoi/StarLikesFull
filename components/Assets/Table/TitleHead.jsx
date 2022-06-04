import styles from './CustomTable.module.css'

const TitleHead = (props) => {
    return (
        <th className={styles[props.titleName] ?? ""}>{props.children}</th>                        
    )
}

export default TitleHead;