import { Component } from 'react/cjs/react.production.min';
import PurpleBlock from "../components/Assets/Blocks/PurpleBlock";
import MainButton from '../components/Assets/Buttons/MainButton';
import LinkA from '../components/Assets/tags/LinkA';
import MainTitle from '../components/Assets/tags/MainTitle';
import ContainerForPages from "../components/Assets/moduls/ContainerForPages";
import styles from '/public/assets/css/AuthPages.module.css'
import PasswordInput from '../components/Assets/Inputs/PasswordInput';
import InputWithError from '../components/Assets/Inputs/InputWithError';
import { Formik } from "formik";
import * as Yup from "yup";

class Registration extends Component {

    render() {

        const schema = Yup.object({
            login: Yup.string().required("Поле не может быть пустым!"),
            email: Yup.string()
                .email("Введите корректный адрес почты")
                .required("Поле не может быть пустым!"),
            pass: Yup.string().required("Поле не может быть пустым!"),
            confirmPass: Yup.string().required("Поле не может быть пустым!").oneOf([Yup.ref('pass')], "Пароли не совпадают")
        });
        
        return (
            <>
                <ContainerForPages>
                    <section className={`${styles.main} d-flex`}>
                        <PurpleBlock className={`${styles["for-authorization"]} margin-auto d-flex`}>
                            <MainTitle>Регистрация</MainTitle>
                            <Formik
                                initialValues={{ 
                                    email: '',
                                    login: '',
                                    pass: '',
                                    confirmPass: '',
                                }}
                                validationSchema={schema}
                                onSubmit = {(values) => {console.log(values)}}>
                                {({ errors, handleSubmit, handleChange, values }) => {
                                return (
                                <>
                                    <InputWithError onChange={handleChange}
                                        placeholder='Введите логин' name='login'
                                        classError={errors.login ? "view" : ""} 
                                        textError={errors.login || "ОК"} value={values.login}/>
                                    <InputWithError onChange={handleChange}
                                        placeholder='Введите e-mail' name='email'
                                        classError={errors.email ? "view" : ""} 
                                        textError={errors.email || "ОК"} value={values.email}/>
                                    <PasswordInput name="pass" onChange={handleChange} 
                                        placeholder='Введите пароль' type="password"
                                        classError={errors.pass ? "view" : ""} 
                                        textError={errors.pass || "ОК"} value={values.pass}/>
                                    <PasswordInput name="confirmPass" onChange={handleChange} 
                                        placeholder='Подтвердите пароль' type="password"
                                        classError={errors.confirmPass ? "view" : ""} 
                                        textError={errors.confirmPass || "ОК"} value={values.confirmPass}/>
                                    <MainButton type="submit" onClick={handleSubmit}>Зарегистрироваться</MainButton>
                                </>
                                );}}
                            </Formik>
                            <p>У вас есть аккаунт? <LinkA href="/authorization">Войти</LinkA></p>
                        </PurpleBlock>
                    </section>
                </ContainerForPages>
            </>
        )
    }
}

export default Registration;