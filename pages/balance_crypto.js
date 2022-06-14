import { Component } from 'react/cjs/react.production.min';
import ContainerForPages from "../components/Assets/moduls/ContainerForPages";
import styles from '/public/assets/css/MainPages.module.css'
import LinkBack from '../components/Assets/tags/LinkBack';
import BetweenBlock from '../components/Assets/Blocks/BetweenBlock';
import PanelNavigationMain from '../components/Assets/Navigations/PanelNavigationMain';
import CopyInput from '../components/Assets/Inputs/CopyInput';
import BlockStatus from '../components/Assets/Table/BlockStatus';
import TableData from '../components/Assets/Table/TableData';
import TableDataStatus from '../components/Assets/Table/TableDataStatus';
import MainTitle from '../components/Assets/tags/MainTitle';
import PanelNavigationMainMini from '../components/Assets/Navigations/PanelNavigationMainMini';
import DataBalanceCrypto from '../components/Assets/Table/Data/Users/DataBalanceCrypto';
import DataTable from '../components/Assets/Table/DataTable';
import CPlaceholders from '../models/Placeholders/Client/index';
import DataTableColumn from '../components/Assets/Table/DataTableColumn';

class BalanceCrypto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Data: [...DataBalanceCrypto],
            tableData: [],
        };
        this.state.tableData = this.state.Data
    }

    render() {  

        const renderData = (v, i) => {
            return (
                <DataTableColumn key={i}>
                    <TableData color="purple">{`#${v.number}`}</TableData>
                    <TableData>{`${v.summ}₽`}</TableData>
                    <TableData>{v.date}</TableData>
                    <TableDataStatus ColorStatus={v.color}>{v.status}</TableDataStatus>
                </DataTableColumn>
            );
        }

        return (
            <>
                <ContainerForPages>
                    <section className={`${styles["payment-crypto"]}`}>
                    <BetweenBlock>
                        <PanelNavigationMainMini/>
                        <PanelNavigationMain/>
                            <div className={`pos-relative d-flex ${styles["right-side"]}`}>
                            <LinkBack/>
                                <MainTitle className={styles.title}>Пополнение баланса</MainTitle>
                                <img className={`margin-auto ${styles["img-QR"]}`} alt='QR crypto' src='/assets/img/qr.png'></img>
                                <CopyInput className="btc" value="357a3So9CbsNfBBgFYACGvxxS6tMaDoa1P"
                                    description="Адрес кошелька успешно скопирован"/>
                                <BetweenBlock className={`d-flex ${styles.status} items-center`}>
                                    <BlockStatus ColorStatus="green">4 подтверждения</BlockStatus>
                                    <p><strong>Последнее подтверждение:</strong></p>
                                    <p>01.03.2022 @ 02:14:21</p>
                                </BetweenBlock> 
                                <DataTable classTable="table-crypto" emptyText={`Нет подтверждения`} 
                                    linesLimit={5} data={this.state.tableData} pagination="hide"
                                    columns={CPlaceholders.Fields.PayCrypto["ru"]} render={renderData}>
                                </DataTable>
                            </div>
                        </BetweenBlock>
                    </section>
                </ContainerForPages>
            </>
        )
    }
}

export default BalanceCrypto;