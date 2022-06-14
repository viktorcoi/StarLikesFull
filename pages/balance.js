import { Component } from 'react';
import BetweenBlock from '../components/Assets/Blocks/BetweenBlock';
import ContainerForPages from "../components/Assets/moduls/ContainerForPages";
import PanelNavigationMain from '../components/Assets/Navigations/PanelNavigationMain';
import styles from '/public/assets/css/MainPages.module.css'
import TableData from '../components/Assets/Table/TableData';
import TableDataStatus from '../components/Assets/Table/TableDataStatus';
import LinkButton from '../components/Assets/Buttons/LinkButton';
import FilterSelector from '../components/Assets/tags/FilterSelector';
import MainTitle from '../components/Assets/tags/MainTitle';
import HTitle from '../components/Assets/tags/HTitle';
import PanelNavigationMainMini from '../components/Assets/Navigations/PanelNavigationMainMini';
import LinkBack from '../components/Assets/tags/LinkBack';
import DataBalance from '../components/Assets/Table/Data/Users/DataBalance';
import DataTableColumn from '../components/Assets/Table/DataTableColumn';
import DataTable from '../components/Assets/Table/DataTable';
import CPlaceholders from '../models/Placeholders/Client/index';

class Balance extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterStatus: ["подтвержденные", "не подтвержденные", "все записи"],
            Data: [...DataBalance],
            tableData: [],
        };
        this.state.tableData = this.state.Data
    }

    render() {

        const renderData = (v, i) => {
            return (
                <DataTableColumn key={i}>
                    <TableData>{v.date}</TableData>
                    <TableData>{v.method}</TableData>
                    <TableData>{`${v.summ}₽`}</TableData>
                    <TableData color="purple">{`#${v.number}`}</TableData>
                    <TableDataStatus ColorStatus={v.color}>{v.status}</TableDataStatus>
                </DataTableColumn>
            );
        }

        return (
            <>
                <ContainerForPages>
                    <section className={styles["page-balance"]}>
                        <BetweenBlock>
                            <PanelNavigationMainMini/>
                            <PanelNavigationMain/>
                            <div className={styles["right-side"]}>
                                <div className={`pos-relative ${styles["for-back-mobil"]}`}>
                                    <LinkBack/>
                                    <MainTitle className={styles.balance}>Баланс<span>0.00₽</span></MainTitle>
                                </div>
                                <BetweenBlock className={`items-center ${styles["for-title"]}  ${styles["title-margin-57"]}`}>
                                    <MainTitle className={styles.balance}>
                                        Баланс
                                        <span>0.00₽</span>
                                    </MainTitle>
                                    <LinkButton href="/balance_insert">Пополнить баланс</LinkButton>
                                </BetweenBlock>
                                <BetweenBlock className={`items-center ${styles["for-title-two"]}`}>
                                    <HTitle>История пополнений</HTitle>
                                    <FilterSelector title={this.state.filterStatus[2]} items={this.state.filterStatus}
                                        callback={(data) => {this.setState({...this.state, tableData: data})}}
                                        filter = {["подтвержден", "не подтвержден", ""]} filterStatus={this.state.filterStatus}
                                        data={this.state.Data}>
                                    </FilterSelector>
                                </BetweenBlock>
                                <DataTable classTable="balance-table" emptyText={`Информация отсутствует`} 
                                    linesLimit={5} data={this.state.tableData} 
                                    columns={CPlaceholders.Fields.Balance["ru"]} render={renderData}>
                                </DataTable>
                            </div>
                        </BetweenBlock>
                    </section>
                </ContainerForPages>
            </>
        )
    }
}

export default Balance;