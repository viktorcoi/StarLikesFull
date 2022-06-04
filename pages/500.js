import BetweenBlock from '../components/Assets/Blocks/BetweenBlock';
import Container from '../components/Assets/moduls/Container';
import HTitle from '../components/Assets/tags/HTitle';
import HThird from '../components/Assets/tags/HThird';
import styles from '/public/assets/css/ErorresPages.module.css'
import LinkButton from '../components/Assets/Buttons/LinkButton';

const Error500 = () => {
    return (
        <Container>
            <BetweenBlock className={`items-center ${styles["error-page"]}`}>
                <div>
                    <HTitle>Упс..</HTitle>
                    <HThird>Ошибка загрузки страницы</HThird>
                    <p className={styles["text-500"]}>Произошло какое-то недоразумение при загрузке страницы! Мы уже это исправляем!</p>
                    <LinkButton href="/">Вернуться на главную</LinkButton>
                </div>
                <img alt='error 500' src='/assets/img/500.png'></img>
            </BetweenBlock>
        </Container>
    )
}

export default Error500;