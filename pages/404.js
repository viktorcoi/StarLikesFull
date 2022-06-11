import BetweenBlock from '../components/Assets/Blocks/BetweenBlock';
import ContainerForPages from '../components/Assets/moduls/ContainerForPages';
import HTitle from '../components/Assets/tags/HTitle';
import HThird from '../components/Assets/tags/HThird';
import styles from '/public/assets/css/ErorresPages.module.css'
import LinkButton from '../components/Assets/Buttons/LinkButton';

const Error404 = () => {
    return (
        <ContainerForPages>
            <BetweenBlock className={`items-center ${styles["error-page"]}`}>
                <div>
                    <HTitle>Упс..</HTitle>
                    <HThird>Страницы не существует</HThird>
                    <p>Эта страница не существует или была удалена! Мы предлагаем вам вернуться на главную.</p>
                    <LinkButton href="/">Вернуться на главную</LinkButton>
                </div>
                <img alt='error 404' src='/assets/img/404.png'></img>
            </BetweenBlock>
        </ContainerForPages>
    )
}

export default Error404;