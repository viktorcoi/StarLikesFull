import BlockStatus from './BlockStatus';

const TableDataStatus = (props) => {
    return (
        <td>
            <BlockStatus ColorStatus={props.ColorStatus}>{props.children}</BlockStatus>
        </td>
    )
}

export default TableDataStatus;