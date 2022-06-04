import { Component } from 'react/cjs/react.production.min';
import Container from "../components/Assets/moduls/Container";
import styles from '/public/assets/css/MainPages.module.css'
import LinkBack from '../components/Assets/tags/LinkBack';
import DarkPurpleBlock from '../components/Assets/Blocks/DarkPurpleBlock';
import BetweenBlock from '../components/Assets/Blocks/BetweenBlock';
import { Formik } from "formik";
import * as Yup from "yup";
import InputWithError from '../components/Assets/Inputs/InputWithError';
import PasswordInput from '../components/Assets/Inputs/PasswordInput';
import MainButton from '../components/Assets/Buttons/MainButton';
import Input from '../components/Assets/Inputs/Input';
import PhoneInput from '../components/Assets/Inputs/PhoneInput';
import Popup from '../components/Assets/Popup/Popup';
import ButtonYes from '../components/Assets/Buttons/ButtonYes';
import ButtonNo from '../components/Assets/Buttons/ButtonNo';
import AlertBlock from '../components/Assets/Blocks/AlertBlock';
import MainTitle from '../components/Assets/tags/MainTitle';

class SettingProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeClasses: [false, false]
        };
        this.addClass = this.addClass.bind(this);
    }
    
    addClass(index) {
        const activeClasses = [...this.state.activeClasses.slice(0, index), !this.state.activeClasses[index], this.state.activeClasses.slice(index + 1)].flat();
        this.setState({activeClasses});
        document.body.style.overflow = activeClasses[0] ? 'hidden' : 'overlay';
    }

    closeAlert = () => {
        this.setState({
            passAlert: false,
            changeAlert: false
        });
    }

    render() {

        const activeClasses = this.state.activeClasses.slice();

        const schema = Yup.object({
            login: Yup.string().required("Поле не может быть пустым!"),
            email: Yup.string()
                .email("Введите корректный адрес почты")
                .required("Поле не может быть пустым!"),
        });

        const schemaPass = Yup.object({
            oldPass: Yup.string().required("Поле не может быть пустым!"),
            newPass: Yup.string().required("Поле не может быть пустым!"),
            confirmNewPass: Yup.string().required("Поле не может быть пустым!").oneOf([Yup.ref('newPass')], "Пароли не совпадают")
        });

        return (
            <>
                <AlertBlock img="alert-success" clickClose={this.closeAlert} title="Готово!"  
                    description="Пароль успешно изменен!" className={this.state.passAlert ? "open" : ""}>
                </AlertBlock>
                <AlertBlock img="alert-success" clickClose={this.closeAlert} title="Готово!"  
                    description="Данные сохранены!" className={this.state.changeAlert ? "open" : ""}>
                </AlertBlock>
                <Popup namePopup="yes-no" clickClose={() => this.addClass(0)} className={activeClasses[0]? "open" : ""} title="Изменение пароля">
                    <Formik
                        initialValues={{ 
                            oldPass: '',
                            newPass: '',
                            confirmNewPass: '',
                        }}
                        validationSchema={schemaPass}
                        onSubmit = {(values) => {console.log(values)}}>
                        {({ errors, handleSubmit, handleChange, values }) => {

                        const ChangePassrord = () => {
                            if (((values.oldPass.length && values.newPass.length && values.confirmNewPass.length) != 0)) {
                                if (errors.confirmNewPass == undefined) {
                                    this.addClass(0)
                                    this.state.passAlert = true
                                }
                            }
                        } 

                        return (
                        <>
                            <div>
                                <PasswordInput className="pass" name="oldPass" onChange={handleChange} 
                                    placeholder='Введите старый пароль' type="password"
                                    classError={errors.oldPass ? "view" : ""} addClassInput="main-input"
                                    textError={errors.oldPass || "ОК"} value={values.oldPass}/>
                                <PasswordInput className="pass" name="newPass" onChange={handleChange} 
                                    placeholder='Введите новый пароль' type="password"
                                    classError={errors.newPass ? "view" : ""} addClassInput="main-input"
                                    textError={errors.newPass || "ОК"} value={values.newPass}/>
                                <PasswordInput className="pass" name="confirmNewPass" onChange={handleChange} 
                                    placeholder='Подтвердите новый пароль' type="password"
                                    classError={errors.confirmNewPass ? "view" : ""} addClassInput="main-input"
                                    textError={errors.confirmNewPass || "ОК"} value={values.confirmNewPass}/>
                            </div>  
                            <BetweenBlock>
                                <ButtonYes type="submit" onClick={() => {handleSubmit()}} onMouseUp={ChangePassrord}/> 
                                <ButtonNo onClick={() => this.addClass(0)}/>
                            </BetweenBlock>     
                        </>
                        );}}
                    </Formik>
                </Popup>
                <Container> 
                    <section className={`${styles["setting-profile"]} pos-relative`}>
                        <LinkBack/>
                        <MainTitle className={styles.title}>Настройка профиля</MainTitle>
                        <DarkPurpleBlock className={styles["settings"]}>
                            <div>
                                <Formik
                                    initialValues={{ 
                                        email: 'vladislove@yandex.ru',
                                        login: 'vladislove',
                                        phone: '',
                                        country: ''
                                    }}
                                    validationSchema={schema}
                                    onSubmit = {(values) => {console.log(values)}}>
                                    {({ errors, handleSubmit, handleChange, values }) => {

                                    const ChangeData = () => {
                                        if (((values.email.length && values.login.length) != 0)) {
                                            if (errors.email == undefined) {
                                                this.addClass(1)
                                                this.state.changeAlert = true
                                            }
                                        }
                                    } 

                                    return (
                                    <>
                                        <div>
                                            <BetweenBlock className={styles["settings-inputs"]}>
                                                <div className={styles["for-inputs"]}>
                                                    <InputWithError onChange={handleChange} addClassInput="main-input"
                                                        className="enter" placeholder='Логин' name='login'
                                                        classError={errors.login ? "view" : ""} 
                                                        textError={errors.login || "ОК"} value={values.login}/>
                                                </div>
                                                <div className={styles["for-inputs"]}>
                                                    <InputWithError onChange={handleChange} addClassInput="main-input"
                                                        className="mail" placeholder='E-mail' name='email'
                                                        classError={errors.email ? "view" : ""} 
                                                        textError={errors.email || "ОК"} value={values.email}/>
                                                </div>
                                            </BetweenBlock>
                                            <BetweenBlock className={styles["settings-inputs"]}>
                                                <div className={styles["for-inputs"]}>
                                                    <PhoneInput onChange={handleChange} 
                                                        className="phone" name="phone" placeholder="Телефон" 
                                                        addClassInput="main-input" value={values.phone}/>
                                                </div>
                                                <div className={styles["for-inputs"]}>
                                                    <Input onChange={handleChange} addClassInput="main-input"
                                                        className="world" placeholder='Страна' name='country'
                                                        value={values.country}/>
                                                </div>
                                            </BetweenBlock>
                                        </div>
                                        <BetweenBlock className={styles["settings-inputs"]}>
                                            <MainButton classButton="link-button" type="submit" onMouseUp={ChangeData} onClick={handleSubmit}>Сохранить изменения</MainButton>
                                            <MainButton onClick={() => this.addClass(0)} classButton="link-button">Изменить пароль</MainButton>
                                        </BetweenBlock>
                                    </>
                                    );}}
                                </Formik>
                            </div>
                        </DarkPurpleBlock>
                    </section>
                </Container>
            </>
        )
    }
}

export default SettingProfile;