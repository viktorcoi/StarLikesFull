import BetweenBlock from '../components/Assets/Blocks/BetweenBlock';
import Container from '../components/Assets/moduls/Container';
import HTitle from '../components/Assets/tags/HTitle';
import HThird from '../components/Assets/tags/HThird';
import styles from '/public/assets/css/ErorresPages.module.css'
import LinkButton from '../components/Assets/Buttons/LinkButton';

const Error404 = () => {
    return (
        <Container>
            <BetweenBlock className={`items-center ${styles["error-page"]}`}>
                <div>
                    <HTitle>Упс..</HTitle>
                    <HThird>Страницы не существует</HThird>
                    <p>Эта страница не существует или была удалена! Мы предлагаем вам вернуться на главную.</p>
                    <LinkButton href="/">Вернуться на главную</LinkButton>
                </div>
                <img alt='error 404' src='/assets/img/404.png'></img>
            </BetweenBlock>
        </Container>
    )
}

export default Error404;