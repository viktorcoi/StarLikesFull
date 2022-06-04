import { Component } from 'react/cjs/react.production.min';
import Container from "../components/Assets/moduls/Container";
import CustomTable from '../components/Assets/Table/CustomTable';
import HeadTable from '../components/Assets/Table/HeadTable';
import TableData from '../components/Assets/Table/TableData';
import TitleHead from '../components/Assets/Table/TitleHead';
import styles from '/public/assets/css/MainPages.module.css'
import TableDataNotifications from '../components/Assets/Table/TableDataNotifications';
import TableDataLink from '../components/Assets/Table/TableDataLink';
import BetweenBlock from '../components/Assets/Blocks/BetweenBlock';
import PanelNavigationMain from '../components/Assets/Navigations/PanelNavigationMain';
import MainTitle from '../components/Assets/tags/MainTitle';
import PanelNavigationMainMini from '../components/Assets/Navigations/PanelNavigationMainMini';

class Notifications extends Component {

    render() {

        return (
            <>
                <Container> 
                    <section className={`${styles.notifications}`}>
                    <BetweenBlock>
                        <PanelNavigationMainMini/>
                        <PanelNavigationMain/>
                        <div className={styles["right-side"]}>
                            <MainTitle className={styles.title}>Уведомления</MainTitle>
                            <CustomTable className="table-notifications">
                                <HeadTable>
                                    <TitleHead>Тема</TitleHead>
                                    <TitleHead>Дата</TitleHead>
                                    <TitleHead>Уведомление</TitleHead>
                                </HeadTable>
                                <tbody>
                                    <tr>
                                        <TableDataLink color="purple" href="/dialog_support">Новые сообщения от службы поддержки</TableDataLink>
                                        <TableData>20.02.2000 @ 12:40</TableData>
                                        <TableDataNotifications>2</TableDataNotifications>
                                    </tr>
                                </tbody>
                            </CustomTable>
                        </div>
                    </BetweenBlock>
                    </section>
                </Container>
            </>
        )
    }
}

export default Notifications;