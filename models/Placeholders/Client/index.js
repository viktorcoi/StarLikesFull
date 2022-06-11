import CPlaceholderTablesBillingFields from "./Fields/Billing";
import CPlaceholderTablesDashboardFields from "./Fields/Dashboard";
import CPlaceholderTablesHistoryFields from "./Fields/History";
import CPlaceholderTablesSupportFields from "./Fields/Support";
import CPlacholdersUsersFields from "./Users/Fields";

const CPlaceholders = {
    Users: {
        Fields: CPlacholdersUsersFields
    },
    Fields: {
        Dashboard: CPlaceholderTablesDashboardFields,
        History: CPlaceholderTablesHistoryFields,
        Billing: CPlaceholderTablesBillingFields,
        Support: CPlaceholderTablesSupportFields
    }
}

export default CPlaceholders;