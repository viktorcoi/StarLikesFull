import { Component } from 'react/cjs/react.production.min';
import LinkA from '../components/Assets/tags/LinkA';
import MainTitle from '../components/Assets/tags/MainTitle';
import Container from "../components/Assets/moduls/Container";
import styles from '/public/assets/css/AuthPages.module.css'
import InputWithError from '../components/Assets/Inputs/InputWithError';
import PasswordInput from '../components/Assets/Inputs/PasswordInput';
import { Formik } from "formik";
import * as Yup from "yup";
import PurpleBlock from '../components/Assets/Blocks/PurpleBlock';
import MainButton from '../components/Assets/Buttons/MainButton';

class Authorization extends Component {

    render() {

        const schema = Yup.object({
            loginAuth: Yup.string().required("Поле не может быть пустым!"),
            passAuth: Yup.string().required("Поле не может быть пустым!")
        });

        return (
            <>
                <Container>
                    <section className={`${styles.main} d-flex`}>
                        <PurpleBlock className={`${styles["for-authorization"]} margin-auto d-flex`}>
                            <MainTitle>Авторизация</MainTitle>
                            <Formik
                                initialValues={{ 
                                    loginAuth: '', 
                                    passAuth: '' 
                                }}
                                validationSchema={schema}
                                onSubmit = {(values) => {console.log(values)}}>
                                {({ errors, handleSubmit, handleChange, values }) => {
                                return (
                                <>
                                    <InputWithError name="loginAuth" onChange={handleChange} 
                                        placeholder='Введите логин'
                                        classError={errors.loginAuth ? "view" : ""} 
                                        textError={errors.loginAuth || "ОК"} value={values.loginAuth}/>
                                    <PasswordInput type="password" name="passAuth" onChange={handleChange}
                                        placeholder='Введите пароль'
                                        classError={errors.passAuth ? "view" : ""} 
                                        textError={errors.passAuth || "ОК"} value={values.passAuth}/>
                                    <MainButton type="submit" onClick={handleSubmit}>Авторизоваться</MainButton>
                                </>
                                );}}
                            </Formik>
                            <p className={styles["new-user"]}>Новый Пользователь? <LinkA href="/registration">Создать учётную запись</LinkA></p>
                            <LinkA href="/password_recovery">Забыли пароль?</LinkA>
                        </PurpleBlock>
                    </section>
                </Container>
            </>
        )
    }
}

export default Authorization;