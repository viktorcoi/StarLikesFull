import styles from './MangementElements.module.css'

const CopyElement = (props) => {
    return (
        <img className={`${styles["copy"]} transition_0_3 cursor-pointer ${props.className}`}
            onClick={props.clickCopy} alt='copy' src='/assets/img/copy.svg'>
        </img>
    )
}

export default CopyElement;