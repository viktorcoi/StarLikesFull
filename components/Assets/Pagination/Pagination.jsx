import styles from './Pagination.module.css'

const Pagination = (props) => {
    return (
        <div className={`d-flex items-center ${styles.pagination}`}>
            <button {...props} className="d-flex items-center cursor-pointer transition_0_3">
                <img className={`margin-auto`} alt='next page' src='/assets/img/arrow-back.png'></img>
            </button>
                <div className='d-flex'>{props.children}</div>
            <button {...props} className="d-flex items-center cursor-pointer transition_0_3">
                <img className={styles['arrow-next']} alt='back page' src='/assets/img/arrow-next.png'></img>
            </button>
        </div>
    )
}

export default Pagination;