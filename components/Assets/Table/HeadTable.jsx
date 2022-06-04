const HeadTable = (props) => {
    return (
        <thead>
            <tr>
                {props.children}               
            </tr>
        </thead>                  
    )
}

export default HeadTable;