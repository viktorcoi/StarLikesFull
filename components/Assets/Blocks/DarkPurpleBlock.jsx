import styles from './PurpleBlocks.module.css'

const DarkPurpleBlock = (props) => {
    return (
        <div {...props} className={`${styles["dark-purple-block"]} border-7px ${props.className ?? ""}`}>
            {props.children}
        </div>
    )
}

export default DarkPurpleBlock;