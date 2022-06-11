import { Component } from 'react';
import BetweenBlock from '../components/Assets/Blocks/BetweenBlock';
import ContainerForPages from "../components/Assets/moduls/ContainerForPages";
import PanelNavigationMain from '../components/Assets/Navigations/PanelNavigationMain';
import styles from '/public/assets/css/MainPages.module.css'
import { Formik } from "formik";
import * as Yup from "yup";
import InputWithError from '../components/Assets/Inputs/InputWithError';
import LinkButton from '../components/Assets/Buttons/LinkButton';
import CustomSelector from '../components/Assets/tags/CustomSelector';
import TextArea from '../components/Assets/Inputs/TextArea';
import LinkBack from '../components/Assets/tags/LinkBack';
import MainTitle from '../components/Assets/tags/MainTitle';
import PanelNavigationMainMini from '../components/Assets/Navigations/PanelNavigationMainMini';

class NewOrderSettings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            linkPage: ''
        };
    }

    render() {

        const schema = Yup.object({
            link: Yup.string()
            .url('Введите корректную сыллку!')
            .required("Поле не может быть пустым!"),
            count: Yup.string()
            .test('', 'Минимум 10, максимум 15000', value => value ? value > 9 && value < 15001 : " ")
            .required("Поле не может быть пустым!"),
        });

        let selector  = [
            "Instagram Followers - [REAL+ AUTOREFILL 30D]",
            "VK Followers - [REAL+ AUTOREFILL 30D]",
            "Одноклассники Followers - [REAL+ AUTOREFILL 30D]"
        ];

        return (
            <>
                <ContainerForPages>
                    <section className={styles["order_settings"]}>
                        <BetweenBlock>
                            <PanelNavigationMainMini/>
                            <PanelNavigationMain/>
                            <div className={styles["right-side"]}>
                                <BetweenBlock className={`items-center ${styles["for-title-two"]}`}>
                                    <MainTitle>Настройте услугу</MainTitle>
                                    <p className={styles.step}>Шаг 2/3</p>
                                </BetweenBlock>
                                <Formik
                                    initialValues={{ 
                                        description: `🔴 AFTER ORDERING, YOU NEED TO WRITE TO SUPPORT YOUR ORDER \nNUMBER AND WAIT FOR SUPPORT TO LAUNCH YOUR ORDER \n⏱ Start: 1-30 min \n⚡️ Speed: 10000/D \n✔ Quality : REAL AND NO DROP`,
                                        link: '',
                                        count: '',
                                    }}
                                    validationSchema={schema}
                                    onSubmit = {(values) => {console.log(values)}}>
                                    {({ errors, handleSubmit, handleChange, values }) => {

                                        const ChangeLink = () => {
                                            if (((values.link.length && values.count.length) != 0)) {
                                                if (errors.link == undefined && errors.count == undefined) {
                                                    this.state.linkPage = '/new_order_pay'
                                                } else {
                                                    this.state.linkPage = ''
                                                }
                                            }
                                        } 

                                    return (
                                        <>
                                            <p className={styles.parameter}><strong>Услуга</strong></p>
                                            <CustomSelector className="main-dark-selector" addClassName={styles.selector}
                                                title="Instagram Followers - [REAL+ AUTOREFILL 30D]" items={selector}/>
                                            <p className={styles.parameter}><strong>Описание</strong></p>
                                            <TextArea name="description" classDiv="main-dark-input" readOnly
                                                placeholder='Введите старый пароль' type="password"
                                                classError={errors.description ? "view" : ""} addClassInput="main-input"
                                                textError={errors.description || "ОК"} value={values.description}/>
                                            <p className={styles.parameter}><strong>Ссылка</strong></p>
                                            <InputWithError onChange={handleChange} classDiv="main-dark-input" onKeyUp={ChangeLink()} 
                                                className="ref" placeholder='Введите ссылку аккаунта' name='link'
                                                classError={errors.link ? "view" : ""} 
                                                textError={errors.link || "ОК"} value={values.link}/>
                                            <p className={styles.parameter}><strong>Количество</strong></p>
                                            <InputWithError onChange={handleChange} classDiv="main-dark-input" onKeyUp={ChangeLink()} 
                                                className="count" placeholder='Min: 10 - Max: 15000' name='count'
                                                classError={errors.count ? "view" : ""} type="number"
                                                textError={errors.count || "ОК"} value={values.count}/>
                                            <BetweenBlock className={`items-center ${styles["management-order"]}`}>
                                                <div className='d-flex items-center'>
                                                    <p className={styles.price}>
                                                        Сумма к оплате
                                                        <span>0.00₽</span>
                                                    </p>
                                                </div>
                                                <div className='d-flex items-center'>
                                                    <LinkBack className="white-link">К 1 шагу</LinkBack>
                                                    <LinkButton onClick={()=>handleSubmit()} className={styles["mini-button"]} href={this.state.linkPage}>Вперёд</LinkButton>  
                                                </div>
                                            </BetweenBlock>
                                        </>
                                    );}}
                                </Formik>
                                
                            </div>
                        </BetweenBlock>
                    </section>
                </ContainerForPages>
            </>
        )
    }
}

export default NewOrderSettings;