import { Component } from "react/cjs/react.production.min";
import Container from "../../components/Assets/moduls/Container";
import CustomTable from "../../components/Assets/Table/CustomTable";
import HeadTable from "../../components/Assets/Table/HeadTable";
import TableData from "../../components/Assets/Table/TableData";
import TitleHead from "../../components/Assets/Table/TitleHead";
import BetweenBlock from "../../components/Assets/Blocks/BetweenBlock";
import styles from "/public/assets/css/MainPages.module.css";
import Pagination from "../../components/Assets/Pagination/Pagination";
import NumberPage from "../../components/Assets/Pagination/NumberPage";
import SearchInput from "../../components/Assets/Inputs/SearchInput";
import Data from "../../components/Assets/Context/AdminContext/DataUsers";

class Domains extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      ip: "",
      seedFrases: "",
      date: "",
      note: "",
      DATA: [...Data],
      newFilterStatus: [],
      tableData: [],
      filterField: "",
      filterSearch: "",
      statusFilter: "",
      filterSelect: ["login", "email", "domain"],
      select: "login",
    };
  }

  render() {

    const renderTableData = (data) => {
      return data.map((v,idx) => {
        return (
          <>
            <tr key={`v-${idx}`}>
              <TableData>{v.login}</TableData>
            </tr>
          </>
        );
      });
    }

    return (
      <>
        <Container>
          <section>
                <div>
                  <SearchInput
                    classDiv="search"
                    data={this.state.DATA}
                    defaultValue={"login"}
                    callback={(data) => {this.setState({...this.state, tableData: data})}}
                    addClassDiv={styles["search-main"]}
                  />
              </div>
              <CustomTable className="users" blockName={styles["admin-table"]}>
                <HeadTable>
                  <TitleHead>Login</TitleHead>
                </HeadTable>
                <tbody>{renderTableData(this.state.tableData)}</tbody>
              </CustomTable>
          </section>
        </Container>
      </>
    );
  }
}

export default Domains;