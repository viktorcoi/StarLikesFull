import { Component } from 'react';
import BetweenBlock from '../components/Assets/Blocks/BetweenBlock';
import SocialBlock from '../components/Assets/Blocks/SocialBlock';
import ContainerForPages from "../components/Assets/moduls/ContainerForPages";
import PanelNavigationMain from '../components/Assets/Navigations/PanelNavigationMain';
import SocialRoutes from '../components/Assets/SocialRoutes';
import styles from '/public/assets/css/MainPages.module.css'
import TableDataLink from '../components/Assets/Table/TableDataLink';
import TableData from '../components/Assets/Table/TableData';
import PanelNavigationMainMini from '../components/Assets/Navigations/PanelNavigationMainMini';
import DataMyServices from '../components/Assets/Table/Data/Users/DataMyServices';
import DataTableColumn from '../components/Assets/Table/DataTableColumn';
import DataTable from '../components/Assets/Table/DataTable';
import CPlaceholders from '../models/Placeholders/Client/index';

class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            elementsSocial: 7,
            socialFilter: "instagram",
            Data: [...DataMyServices],
            tableData: [],
        };
        this.state.tableData = this.state.Data.filter((v) => (v.social == this.state.socialFilter)).map(v => v)
    }

    ChooseSocial = (e) => {
        this.setState({ ...this.state, socialFilter: e.target.innerText.toLowerCase()})
        setTimeout(() => {
            this.setState({ ...this.state, 
                tableData: this.state.Data.filter((v) => (v.social == this.state.socialFilter)).map(v => v)})
        }, 1);
        if (e.target.innerText.toLowerCase() == "") {
            this.setState({...this.state, socialFilter: e.target.getAttribute("alt").toLowerCase()})
        }
    }

    render() {

        const renderData = (v, i) => {
            return (
                <DataTableColumn key={i}>
                    <TableData>{v.social}</TableData>
                    <TableDataLink href="/new_order_settings" color="purple">{v.type.substr(0, 50).concat(v.type.length > 50 ? "..." : "")}</TableDataLink>
                    <TableData>{v.price}</TableData>
                </DataTableColumn>
            );
        }
      
        return (
            <>
                <ContainerForPages>
                    <section>
                        <BetweenBlock>
                            <PanelNavigationMainMini/>
                            <PanelNavigationMain/>
                            <div className={styles["right-side"]}>
                                <div className={`${styles["for-social"]} d-flex wrap`}>
                                    {
                                        SocialRoutes.slice(0, this.state.elementsSocial).map(v => {
                                            return (
                                                <SocialBlock 
                                                    onClick={this.ChooseSocial}
                                                    className={v.select} img={v.img} alt={v.name}>
                                                    {v.name}
                                                </SocialBlock>
                                            );
                                        })
                                    }
                                    <p onClick={() => this.setState({elementsSocial: 13})}
                                        className={`transition_0_3 cursor-pointer d-flex ${styles["view-all"]} 
                                        ${this.state.elementsSocial > 7 ? styles.open : ""}`}> 
                                        Показать всё
                                        <span>[+6]</span>
                                    </p>
                                </div>
                                <DataTable classTable="service-table" emptyText={`Услуги не найдены`} 
                                    linesLimit={5} data={this.state.tableData} 
                                    columns={CPlaceholders.Fields.MyServices["ru"]} render={renderData}>
                                </DataTable>
                            </div>
                        </BetweenBlock>
                    </section>
                </ContainerForPages>
            </>
        )
    }
}

export default MainPage;