import { Component } from 'react';
import BetweenBlock from '../components/Assets/Blocks/BetweenBlock';
import SocialBlock from '../components/Assets/Blocks/SocialBlock';
import Container from "../components/Assets/moduls/Container";
import PanelNavigationMain from '../components/Assets/Navigations/PanelNavigationMain';
import SocialRoutes from '../components/Assets/SocialRoutes';
import CustomTable from '../components/Assets/Table/CustomTable';
import styles from '/public/assets/css/MainPages.module.css'
import HeadTable from '../components/Assets/Table/HeadTable';
import TitleHead from '../components/Assets/Table/TitleHead';
import TableDataLink from '../components/Assets/Table/TableDataLink';
import TableData from '../components/Assets/Table/TableData';
import PanelNavigationMainMini from '../components/Assets/Navigations/PanelNavigationMainMini';
import DataMyServices from '../components/Assets/Context/UserContext/DataMyServices';

class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            elementsSocial: 7,
            id: "",
            social: "",
            type: "",
            price: "",
            socialFilter: "instagram",
            Data: [...DataMyServices]
        };
    }

    ChooseSocial = (e) => {
        this.setState({ ...this.state, socialFilter: e.target.innerText.toLowerCase()})
        if (e.target.innerText.toLowerCase() == "") {
            this.setState({...this.state, socialFilter: e.target.getAttribute("alt").toLowerCase()})
        }
    }

    render() {

        const tableMyServices = this.state.Data.filter(v => (v.social == this.state.socialFilter)).map((v, idx) => { 
            return (
                <tr key={`v-${idx}`}>
                    <TableData>{v.social}</TableData>
                    <TableDataLink href="/new_order_settings" color="purple">{v.type}</TableDataLink>
                    <TableData>{v.price}</TableData>
                </tr>
        )});
      
        return (
            <>
                <Container>
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

                                <CustomTable className="service-table">
                                    <HeadTable>
                                        <TitleHead>Соц. сеть</TitleHead>
                                        <TitleHead>Вид накрутки</TitleHead>
                                        <TitleHead>Цена<br/>(за шт.)</TitleHead>
                                    </HeadTable>
                                    <tbody>
                                        {tableMyServices}
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

export default MainPage;