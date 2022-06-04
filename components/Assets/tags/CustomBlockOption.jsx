import styles from './CustomSelector.module.css'

const CustomBlockOption = (props) => {
    return (
        <div {...props} className={`pos-absolute transition_0_3 ${styles["for-option"]} ${styles[props.classOption] ?? ""} ${styles[props.addClass] ?? ""}`}>
            {props.children}
        </div>
    )
}

export default CustomBlockOption;