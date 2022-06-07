import styles from './Pagination.module.css'

const NumberPage = (props) => {
    return (
        <div {...props} className={`${styles["number-page"]} d-flex cursor-pointer transition_0_3 ${styles[props.className] ?? ""}`}>
            <p className='margin-auto none-select'>{props.children}</p>
        </div>
    )
}

export default NumberPage;