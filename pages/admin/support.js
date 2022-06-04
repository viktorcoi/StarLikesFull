import { Component } from 'react'
import Container from "../../components/Assets/moduls/Container";
import styles from '/public/assets/css/AdminsPages.module.css'
import BetweenBlock from '../../components/Assets/Blocks/BetweenBlock';
import CustomTable from '../../components/Assets/Table/CustomTable';
import HeadTable from '../../components/Assets/Table/HeadTable';
import TitleHead from '../../components/Assets/Table/TitleHead';
import TableData from '../../components/Assets/Table/TableData';
import TableDataLink from '../../components/Assets/Table/TableDataLink';
import TableDataStatus from '../../components/Assets/Table/TableDataStatus';
import MainTitle from '../../components/Assets/tags/MainTitle'
import PanelNavigationAdmin from '../../components/Assets/Navigations/PanelNavigationAdmin';
import Pagination from '../../components/Assets/Pagination/Pagination';
import NumberPage from '../../components/Assets/Pagination/NumberPage';
import SearchInput from '../../components/Assets/Inputs/SearchInput';
import CustomSelector from '../../components/Assets/tags/CustomSelector';
import FilterSelector from '../../components/Assets/tags/FilterSelector';
import ButtonWithArrow from '../../components/Assets/Buttons/ButtonWithArrow';
import InputWithError from '../../components/Assets/Inputs/InputWithError';
import { Formik } from "formik";
import * as Yup from "yup";
import Popup from '../../components/Assets/Popup/Popup';
import ButtonYes from '../../components/Assets/Buttons/ButtonYes';
import ButtonNo from '../../components/Assets/Buttons/ButtonNo';
import TableDataManagement from '../../components/Assets/Table/TableDataManagement';
import TextArea from '../../components/Assets/Inputs/TextArea';
import ButtonAddFile from '../../components/Assets/Buttons/ButtonAddFile';
import AddFile from '../../components/Assets/Blocks/AddFile';
import LinkButton from '../../components/Assets/Buttons/LinkButton';
import PanelNavigationAdminMini from '../../components/Assets/Navigations/PanelNavigationAdminMini';

class HistoryOrders extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeClasses: [false, false, false, false],
            addFile: [],
            linkPage: ""
        };
        this.addClass = this.addClass.bind(this);
    }
    
    addClass(index) {
        const activeClasses = [...this.state.activeClasses.slice(0, index), !this.state.activeClasses[index], this.state.activeClasses.slice(index + 1)].flat();
        this.setState({activeClasses});
        document.body.style.overflow = activeClasses[0] ? 'hidden' : 'overlay';
    }

    onRemove = (id) => {
        this.setState({
            addFile: this.state.addFile.filter((item) => item.id !== id)
        })
    }

    addComponent = (index) => {
        this.setState({
            addFile:[...this.state.addFile, { id: index }],
        })
    }

    render() {

        const activeClasses = this.state.activeClasses.slice();
        let search  = ["Вот это нашлось", "Вот это нашлось 2", "Вот это нашлось 3", "Вот это нашлось 4"];
        let filter  = ["По логину", "По теме", "По номеру", "По статусу"];
        let filterStatus  = ["активные", "завершеные", "все записи"];
        let type  = ["Технический", "Не технический", "Гипер технический"];

        const schemaSupport = Yup.object({
            theme: Yup.string().required("Поле не может быть пустым!"),
            message: Yup.string().required("Поле не может быть пустым!"),
        });

        return (
            <>  
                <Popup clickClose={() => this.addClass(1)} className={activeClasses[1]? "open" : ""}
                    title="Создать обращение">
                    <Formik
                        initialValues={{ 
                            type: '',
                            theme: '',
                            message: '',
                        }}
                        validationSchema={schemaSupport}
                        onSubmit = {(values) => {console.log(values)}}>
                        {({ errors, handleSubmit, handleChange, values }) => {

                        const ChangeLink = () => {
                            if (values.theme.length && values.message.length > 0 ) {
                                this.state.linkPage = "/admin/support_dialog";
                            } else {
                                this.state.linkPage = "";
                            }
                        }

                        const sendSupport = () => {
                            if (values.theme.length && values.message.length > 0 ) {
                                this.addClass(1)
                            } 
                        }

                        return (
                        <>
                            <CustomSelector addClassName={styles["margin-selector"]}  addIMG="pen" title="Выберите тип обращения" items={type}/>
                            <InputWithError className="chat" name="theme" onChange={handleChange} onKeyUp={ChangeLink()} 
                                placeholder='Тема обращения' type="text"
                                classError={errors.theme ? "view" : ""} addClassInput="main-input"
                                textError={errors.theme || "ОК"} value={values.theme}/>
                            <BetweenBlock className={styles["for-search-popup"]}>
                                <SearchInput classOption="selector-admin-popup" classSerach="admin-search-popup" items={search}/>
                                <CustomSelector className="admin-selector-popup" title="По логину" items={filter}/>
                            </BetweenBlock>
                            <TextArea name="message" onChange={handleChange}  onKeyUp={ChangeLink()} 
                                placeholder='Напишите сообщение' type="text"
                                classError={errors.message ? "view" : ""} addClassInput="main-input"
                                textError={errors.message || "ОК"} value={values.message}/>
                            <ButtonAddFile onClick={this.addComponent}>Добавить файл</ButtonAddFile>
                            <div className={`${styles["for-added"]} d-flex`}>
                                {this.state.addFile.map((item)=>(
                                    item ?
                                        <AddFile nameFile="Название" clickDelete={()=>this.onRemove(item.id)}/>
                                    : null
                                ))}
                            </div>
                            <LinkButton onClick={()=>{handleSubmit(), sendSupport()}} href={this.state.linkPage}>Создать обращение</LinkButton> 
                        </>
                        );}}
                    </Formik>   
                </Popup>
                <Popup namePopup="yes-no" clickClose={() => this.addClass(0)} className={activeClasses[0]? "open" : ""}
                    title="Вы уверены, что хотите удалить обращение?">
                    <BetweenBlock>
                        <ButtonYes/>
                        <ButtonNo onClick={() => this.addClass(0)}/>
                    </BetweenBlock>
                </Popup>
               <Container>
                    <section className={styles.support}>
                        <BetweenBlock>
                            <PanelNavigationAdminMini/>
                            <PanelNavigationAdmin/>
                            <div className={styles["right-side"]}>
                                <BetweenBlock className={`items-center ${styles["for-title"]}`}>
                                    <MainTitle>Поддержка</MainTitle>
                                    <ButtonWithArrow onClick={() => this.addClass(1)}>Добавить тему</ButtonWithArrow>
                                </BetweenBlock>
                                <BetweenBlock className={`${styles["for-search"]} items-center`}>
                                    <div className="d-flex">
                                        <SearchInput addClassDiv={styles["admin-search"]} classOption="for-dark-selector" classDiv="admin-search" items={search}/>
                                        <CustomSelector className="admin-selector" title="По телефону" items={filter}/>
                                    </div>
                                    <FilterSelector title="активные" items={filterStatus}/>
                                </BetweenBlock>
                                <CustomTable className="admin-table">
                                    <HeadTable>
                                        <TitleHead></TitleHead>
                                        <TitleHead>Номер обращения</TitleHead>
                                        <TitleHead>Логин</TitleHead>
                                        <TitleHead>Тема</TitleHead>
                                        <TitleHead>Статус</TitleHead>
                                    </HeadTable>
                                    <tbody>
                                        <tr>
                                            <TableDataManagement clickEdit={() => this.addClass(1)}  clickDelete={() => this.addClass(0)}/>
                                            <TableDataLink color="purple" href="/admin/support_dialog">#1</TableDataLink>
                                            <TableData>karapuz</TableData>
                                            <TableData>Пополнение средств</TableData>
                                            <TableDataStatus ColorStatus="red">активен</TableDataStatus>
                                        </tr>
                                        <tr>
                                            <TableDataManagement clickEdit={() => this.addClass(1)}  clickDelete={() => this.addClass(0)}/>
                                            <TableDataLink color="purple" href="/admin/support_dialog">#2</TableDataLink>
                                            <TableData>bigkarapuz</TableData>
                                            <TableData>Возврат средств</TableData>
                                            <TableDataStatus ColorStatus="red">активен</TableDataStatus>
                                        </tr>
                                    </tbody>
                                </CustomTable>
                                <BetweenBlock className={`items-center ${styles["for-pagination"]}`}>
                                    <Pagination>
                                        <NumberPage className="select">1</NumberPage>
                                        <NumberPage>2</NumberPage>
                                        <NumberPage>3</NumberPage>
                                        <NumberPage>...</NumberPage>
                                        <NumberPage>32</NumberPage>
                                    </Pagination>
                                </BetweenBlock>
                            </div>
                        </BetweenBlock>
                    </section>
               </Container>
            </>
        ) 
    }
}

export default HistoryOrders;