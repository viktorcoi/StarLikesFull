import styles from './PurpleBlocks.module.css'

const PurpleBlock = (props) => {
    return (
        <div {...props} className={`${styles["purple-block"]} border-7px ${props.className ?? ""}`}>
            {props.children}
        </div>
    )
}

export default PurpleBlock;