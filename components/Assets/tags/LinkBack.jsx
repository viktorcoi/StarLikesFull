import styles from './LinkBack.module.css'

const LinkBack = (props) => {

    const BackPage = () => {
        history.back(); 
    }

    return (
        <p {...props} onClick={props.onClick ?? BackPage} className={`${styles["link-back"]} ${props.addClass} ${styles[props.className] ?? ""} cursor-pointer pos-absolute d-flex items-center transition_0_3`}>
            <img className='transition_0_3' alt='arrow-back' src='/assets/img/back-arrow.svg'></img>
            {props.children ?? "Назад"}
        </p>
    )
}

export default LinkBack;