import styles from './Input.module.css'
import RadioInput from './RadioInput';

const RadioInputs = () => {
    return (
        <div className={`${styles["for-radio"]} d-flex`}>
            <RadioInput id="online" for="online" name="your-wallet">Онлайн-касса</RadioInput>
            <RadioInput id="cryptocurrency" for="cryptocurrency" name="your-wallet">Криптовалюта</RadioInput>
        </div>
    )
}

export default RadioInputs;