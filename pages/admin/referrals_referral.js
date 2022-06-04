import { Component } from 'react'
import Container from "../../components/Assets/moduls/Container";
import styles from '/public/assets/css/AdminsPages.module.css'
import BetweenBlock from '../../components/Assets/Blocks/BetweenBlock';
import MainTitle from '../../components/Assets/tags/MainTitle'
import PanelNavigationAdmin from '../../components/Assets/Navigations/PanelNavigationAdmin';
import LinkBack from '../../components/Assets/tags/LinkBack';
import CustomTable from '../../components/Assets/Table/CustomTable';
import HeadTable from '../../components/Assets/Table/HeadTable';
import TitleHead from '../../components/Assets/Table/TitleHead';
import TableData from '../../components/Assets/Table/TableData';
import TableDataStatus from '../../components/Assets/Table/TableDataStatus';
import Pagination from '../../components/Assets/Pagination/Pagination';
import NumberPage from '../../components/Assets/Pagination/NumberPage';
import PanelNavigationAdminMini from '../../components/Assets/Navigations/PanelNavigationAdminMini';

class ReferralsReferral extends Component {


    render() {

        const price = "33.00₽"

        return (
            <>  
               <Container>
                    <section>
                        <BetweenBlock>
                            <PanelNavigationAdminMini/>
                            <PanelNavigationAdmin/>
                            <div className={`pos-relative ${styles["right-side"]}`}>
                                <LinkBack addClass={styles["margin-left"]}/>
                                <MainTitle className={styles.referral}>Реферал <span>misterx</span> </MainTitle>
                                <p className={`${styles["margin-bottom-42"]} ${styles.title}`}><strong>Пригласил</strong> <span>karapuz</span></p>
                                <CustomTable className="admin-table">
                                    <HeadTable>
                                        <TitleHead>Дата</TitleHead>
                                        <TitleHead>Соц. сеть</TitleHead>
                                        <TitleHead>Вид накрутки</TitleHead>
                                        <TitleHead>Сумма</TitleHead>
                                        <TitleHead>Статус</TitleHead>
                                    </HeadTable>
                                    <tbody>
                                        <tr>
                                            <TableData>20.02.2022</TableData>
                                            <TableData>Instagram</TableData>
                                            <TableData>👥 Instagram Followers - [REAL+ AUTREFILL 30...</TableData>
                                            <TableData>330.00₽</TableData>
                                            <TableDataStatus ColorStatus="green">подтвержден</TableDataStatus>
                                        </tr>
                                        <tr>
                                            <TableData>15.02.2022</TableData>
                                            <TableData>Instagram</TableData>
                                            <TableData>👥 Instagram Followers - [REAL+ AUTREFILL 30...</TableData>
                                            <TableData>200.00₽</TableData>
                                            <TableDataStatus ColorStatus="green">подтвержден</TableDataStatus>
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

export default ReferralsReferral;