import LinkA from '../tags/LinkA';
import styles from './Buttons.module.css'

const ButtonCoupon = (props) => {
    return (
        <LinkA {...props} className={`${styles["add-coupon"]} d-flex items-center ${styles[props.classButton] ?? ""} ${props.className ?? ""}`}>
            {props.children}
        </LinkA>
    )
}

export default ButtonCoupon;