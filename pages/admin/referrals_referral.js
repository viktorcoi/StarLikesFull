import { Component } from 'react'
import ContainerForPages from "../../components/Assets/moduls/ContainerForPages";
import styles from '/public/assets/css/AdminsPages.module.css'
import BetweenBlock from '../../components/Assets/Blocks/BetweenBlock';
import MainTitle from '../../components/Assets/tags/MainTitle'
import PanelNavigationAdmin from '../../components/Assets/Navigations/PanelNavigationAdmin';
import LinkBack from '../../components/Assets/tags/LinkBack';
import TableData from '../../components/Assets/Table/TableData';
import TableDataStatus from '../../components/Assets/Table/TableDataStatus';
import PanelNavigationAdminMini from '../../components/Assets/Navigations/PanelNavigationAdminMini';
import DataTableColumn from '../../components/Assets/Table/DataTableColumn';
import CPlaceholders from '../../models/Placeholders/Client/index';
import DataTable from '../../components/Assets/Table/DataTable';
import DataReferral from '../../components/Assets/Table/Data/Admin/DataReferral';

class ReferralsReferral extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeClasses: [false, false, false],
            Data: [...DataReferral],
            tableData: [],
        };
        this.state.tableData = this.state.Data
    }

    render() {

        const renderData = (v, i) => {
            return (
                <DataTableColumn key={i}>
                    <TableData>{v.date}</TableData>
                    <TableData>{v.social}</TableData>
                    <TableData>{v.type.substr(0, 44).concat(v.type.length > 44 ? "..." : "")}</TableData>
                    <TableData>{`${v.summ}₽`}</TableData>
                    <TableDataStatus ColorStatus={v.color}>{v.status}</TableDataStatus>
                </DataTableColumn>
            );
        }

        return (
            <>  
               <ContainerForPages>
                    <section>
                        <BetweenBlock>
                            <PanelNavigationAdminMini/>
                            <PanelNavigationAdmin/>
                            <div className={`pos-relative ${styles["right-side"]}`}>
                                <LinkBack addClass={styles["margin-left"]}/>
                                <MainTitle className={styles.referral}>Реферал <span>misterx</span></MainTitle>
                                <p className={`${styles["margin-bottom-42"]} ${styles.title}`}><strong>Пригласил</strong> <span>karapuz</span></p>
                                <DataTable classTable="admin-table" emptyText={`Информация отсутвует`} 
                                    linesLimit={5} data={this.state.tableData} 
                                    columns={CPlaceholders.Fields.AdminRederral["ru"]} render={renderData}>
                                </DataTable>
                            </div>
                        </BetweenBlock>
                    </section>
               </ContainerForPages>
            </>
        ) 
    }
}

export default ReferralsReferral;