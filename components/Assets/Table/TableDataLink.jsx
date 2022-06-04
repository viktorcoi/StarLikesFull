import LinkA from '../tags/LinkA';
import styles from './CustomTable.module.css'

const TableDataLink = (props) => {
    return (
        <td className={styles[props.color]} {...props}>
            <LinkA href={props.href}>{props.children}</LinkA>
        </td>
    )
}

export default TableDataLink;