import { Component } from 'react/cjs/react.production.min';
import BetweenBlock from '../components/Assets/Blocks/BetweenBlock';
import PurpleBlock from "../components/Assets/Blocks/PurpleBlock";
import MainButton from '../components/Assets/Buttons/MainButton';
import LinkA from '../components/Assets/tags/LinkA';
import MainTitle from '../components/Assets/tags/MainTitle';
import Container from "../components/Assets/moduls/Container";
import styles from '/public/assets/css/AuthPages.module.css'
import InputWithError from '../components/Assets/Inputs/InputWithError';
import { Formik } from "formik";
import { Media } from 'react-breakpoints'
import * as Yup from "yup";

class PasswordRecovery extends Component {

      render() {

        const schema = Yup.object({
            passRecovery: Yup.string()
              .email("Введите корректный адрес почты")
              .required("Поле не может быть пустым!"),
        });

        return (
            <>
                <Container>
                    <section className={`${styles.main} ${styles["recovery-pass"]} d-flex`}>
                        <PurpleBlock className={`${styles["for-authorization"]} margin-auto d-flex`}>
                            <MainTitle>Восстановление пароля</MainTitle>
                            <Formik
                                initialValues={{ 
                                    passRecovery: '',
                                }}
                                validationSchema={schema}
                                onSubmit = {(values) => {console.log(values)}}>
                                {({ errors, handleSubmit, handleChange, values }) => {
                                return (
                                <>
                                    <InputWithError name="passRecovery" onChange={handleChange} 
                                        placeholder='Почта'
                                        classError={errors.passRecovery ? "view" : ""} 
                                        textError={errors.passRecovery || "ОК"} value={values.passRecovery}/>
                                    <MainButton type="submit" onClick={handleSubmit}>Отправить</MainButton>
                                </>
                                );}}
                            </Formik>
                            <BetweenBlock className={styles["for-links"]}>
                                <Media>
                                    {({ breakpoints, currentBreakpoint }) =>
                                        breakpoints[currentBreakpoint] < breakpoints.menuMobile ? (
                                        <>
                                            <LinkA href="/authorization">Вход</LinkA>
                                            <LinkA href="/registration">Регистрация</LinkA>
                                        </>
                                        ) : (
                                        <>
                                            <LinkA href="/authorization">Авторизироваться</LinkA>
                                            <LinkA href="/registration">Зарегистрироваться</LinkA>
                                        </>
                                        )
                                    }
                                </Media>
                            </BetweenBlock>
                        </PurpleBlock>
                    </section>
                </Container>
            </>
        )
    }
}

export default PasswordRecovery;