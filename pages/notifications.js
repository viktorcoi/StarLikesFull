import { Component } from 'react/cjs/react.production.min';
import ContainerForPages from "../components/Assets/moduls/ContainerForPages";
import TableData from '../components/Assets/Table/TableData';
import styles from '/public/assets/css/MainPages.module.css'
import TableDataNotifications from '../components/Assets/Table/TableDataNotifications';
import TableDataLink from '../components/Assets/Table/TableDataLink';
import BetweenBlock from '../components/Assets/Blocks/BetweenBlock';
import PanelNavigationMain from '../components/Assets/Navigations/PanelNavigationMain';
import MainTitle from '../components/Assets/tags/MainTitle';
import PanelNavigationMainMini from '../components/Assets/Navigations/PanelNavigationMainMini';
import DataNotifications from '../components/Assets/Table/Data/Users/DataNotifications';
import DataTableColumn from '../components/Assets/Table/DataTableColumn';
import DataTable from '../components/Assets/Table/DataTable';
import CPlaceholders from '../models/Placeholders/Client/index';
class Notifications extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Data: [...DataNotifications],
            tableData: [],
        };
        this.state.tableData = this.state.Data
    }

    render() {

        const renderData = (v, i) => {
            return (
                <DataTableColumn key={i}>
                    <TableDataLink color="purple" href={v.link}>{v.theme}</TableDataLink>
                    <TableData>{v.date}</TableData>
                    <TableDataNotifications>{v.notification}</TableDataNotifications>
                </DataTableColumn>
            );
        }
        return (
            <>
                <ContainerForPages> 
                    <section className={`${styles.notifications}`}>
                    <BetweenBlock>
                        <PanelNavigationMainMini/>
                        <PanelNavigationMain/>
                        <div className={styles["right-side"]}>
                            <MainTitle className={styles.title}>Уведомления</MainTitle>
                            <DataTable classTable={styles.notifications} emptyText={`Уведомления не найдены`} 
                                linesLimit={5} data={this.state.tableData} 
                                columns={CPlaceholders.Fields.Notification["ru"]} render={renderData}>
                            </DataTable>
                        </div>
                    </BetweenBlock>
                    </section>
                </ContainerForPages>
            </>
        )
    }
}

export default Notifications;