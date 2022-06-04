const BetweenBlock = (props) => {
    return (
        <div {...props} className={`d-flex between ${props.className ?? ""}`}>{props.children}</div>
    )
}

export default BetweenBlock;