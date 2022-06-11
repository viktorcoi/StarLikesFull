import { Component } from 'react/cjs/react.production.min';
import BetweenBlock from '../components/Assets/Blocks/BetweenBlock';
import PurpleBlock from "../components/Assets/Blocks/PurpleBlock";
import MainButton from '../components/Assets/Buttons/MainButton';
import LinkA from '../components/Assets/tags/LinkA';
import MainTitle from '../components/Assets/tags/MainTitle';
import ContainerForPages from "../components/Assets/moduls/ContainerForPages";
import styles from '/public/assets/css/AuthPages.module.css'
import PasswordInput from '../components/Assets/Inputs/PasswordInput';
import { Media } from 'react-breakpoints'
import { Formik } from "formik";
import * as Yup from "yup";

class PasswordConfirm extends Component {

    render() {

        const schema = Yup.object({
            newPass: Yup.string().required("Поле не может быть пустым!"),
            confirmNewPass: Yup.string().required("Поле не может быть пустым!").oneOf([Yup.ref('newPass')], "Пароли не совпадают")
        });

        return (
            <>
                <ContainerForPages>
                    <section className={`${styles.main} ${styles["recovery-pass"]} d-flex`}>
                        <PurpleBlock className={`${styles["for-authorization"]} margin-auto d-flex`}>
                            <MainTitle>Восстановление пароля</MainTitle>
                            <Formik
                                initialValues={{ 
                                    newPass: '',
                                    confirmNewPass: '',
                                }}
                                validationSchema={schema}
                                onSubmit = {(values) => {console.log(values)}}>
                                {({ errors, handleSubmit, handleChange, values }) => {
                                return (
                                <>
                                    <form>
                                        <PasswordInput name="newPass" onChange={handleChange} 
                                            placeholder='Новый пароль' type="password"
                                            classError={errors.newPass ? "view" : ""} 
                                            textError={errors.newPass || "ОК"} value={values.newPass}/>
                                        <PasswordInput name="confirmNewPass" onChange={handleChange} 
                                            placeholder='Подтвердите новый пароль' type="password"
                                            classError={errors.confirmNewPass ? "view" : ""} 
                                            textError={errors.confirmNewPass || "ОК"} value={values.confirmNewPass}/>
                                    </form>
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
                </ContainerForPages>
            </>
        )
    }
}

export default PasswordConfirm;