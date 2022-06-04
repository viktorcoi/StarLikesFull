import LinkA from '../tags/LinkA';
import styles from './Header.module.css'
import { Media } from 'react-breakpoints'

const HeaderBalance = (props) => {
    return (
        <div className={`${styles.balance} d-flex pos-relative items-center`}>
            <p className="items-center">
                <img alt='balance' src='/assets/img/wallet.svg'></img>
                <Media>
                    {({ breakpoints, currentBreakpoint }) =>
                        breakpoints[currentBreakpoint] < breakpoints.menuMobile ? 
                        (<>Баланс</>) : (<>Баланс:</>)
                    }
                </Media>
            </p>
            <p className={styles["your-balance"]}>{`${props.balance}₽`}</p>
            <LinkA {...props} href="/balance_insert">
                <img className='cursor-pointer' alt='add money' src='/assets/img/plus-money.svg'></img>
            </LinkA>
        </div>
    )
}

export default HeaderBalance;