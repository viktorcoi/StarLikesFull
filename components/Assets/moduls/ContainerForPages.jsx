const ContainerForPages = (props) => {
    return (
        <div {...props} className={`container ${props.className ?? ""}`}>
            {props.children}
        </div>
    )
}

export default ContainerForPages;