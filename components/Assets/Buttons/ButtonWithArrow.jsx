import MainButton from './MainButton';

const ButtonWithArrow = (props) => {
    return (
        <MainButton {...props} classButton="button-with-arrow">
            {props.children}
            <img alt='image link' src='/assets/img/circle-arrow.svg'></img>
        </MainButton>
    )
}

export default ButtonWithArrow;