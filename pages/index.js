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

class MainPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            elementsSocial: 7,
        };
    }

    render() {

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
                                                <SocialBlock className={v.select} img={v.img}>
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
                                        <tr>
                                            <TableData>instagram</TableData>
                                            <TableDataLink href="/new_order_settings" color="purple">📺 Instagram Views - [BOT + SPEED 500k/D]</TableDataLink>
                                            <TableData>00.11₽</TableData>
                                            
                                        </tr>
                                        <tr>
                                            <TableData>instagram</TableData>
                                            <TableDataLink href="/new_order_settings" color="purple">
                                                👍 Instagram Likes - [REAL + IMPRESSION + NO DROP]
                                            </TableDataLink>
                                            <TableData>00.11₽</TableData>
                                        </tr>
                                        <tr>
                                            <TableData>instagram</TableData>
                                            <TableDataLink href="/new_order_settings" color="purple">
                                                👥 Instagram Followers - [REAL+ AUTOREFILL 30D]
                                            </TableDataLink>
                                            <TableData>00.11₽</TableData>
                                        </tr>
                                        <tr>
                                            <TableData>instagram</TableData>
                                            <TableDataLink href="/new_order_settings" color="purple">
                                                ✉️ Instagram Comments - [REAL + NO DROP + CUSTOM]
                                            </TableDataLink>
                                            <TableData>00.11₽</TableData>
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

export default MainPage;