import styles from './Input.module.css'

const RadioInput = (props) => {
    return (
        <div className={`${styles.radio} ${props.className ?? ""} d-flex items-center pos-relative`}>
            <input {...props} type="radio" className="cursor-pointer pos-absolute">{props.none}</input>
            <div className='d-flex border-circle'>
                <div className='margin-auto border-circle transition_0_3'></div>
            </div>
            <label {...props} className="cursor-pointer transition_0_3">{props.children}</label>
        </div>
    )
}

export default RadioInput;