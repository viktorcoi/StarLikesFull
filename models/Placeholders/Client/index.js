import APlaceholderTablesAdminHistoryOrdersFields from "./Fields/Admin/HistoryOrders";
import APlaceholderTablesAdminUsersFields from "./Fields/Admin/Users";
import APlaceholderTablesAdminHistoryWalletFields from "./Fields/Admin/HistoryWallet";
import PlaceholderTablesInfoReferralsFields from "./Fields/InfoReferrals";
import PlaceholderTablesReferralsFields from "./Fields/Referrals";
import CPlaceholderTablesBalanceFields from "./Fields/Users/Balance";
import CPlaceholderTablesMyOrdersFields from "./Fields/Users/MyOrders";
import CPlaceholderTablesMyServicesFields from "./Fields/Users/MyServices";
import CPlaceholderTablesNotificationsFields from "./Fields/Users/Notifications";
import CPlaceholderTablesPayCryptoFields from "./Fields/Users/PayCrypto";
import CPlaceholderTablesSupportFields from "./Fields/Users/Support";
import APlaceholderTablesAdminReferralsFields from "./Fields/Admin/Referrals";
import APlaceholderTablesReferralFields from "./Fields/Admin/Referral";
import APlaceholderTablesSupportFields from "./Fields/Admin/Support";
import APlaceholderTablesCouponsFields from "./Fields/Admin/Coupons";
import APlaceholderTablesServicesFields from "./Fields/Admin/Services";
import CPlaceholderTablesInfoPayOrderFields from "./Fields/Users/InfoPayOrder";

const CPlaceholders = {
    Fields: {
        // TOTAL
        InfoReferrals: PlaceholderTablesInfoReferralsFields,
        Referrals: PlaceholderTablesReferralsFields,
        // USER
        Support: CPlaceholderTablesSupportFields,
        Balance: CPlaceholderTablesBalanceFields,
        MyServices: CPlaceholderTablesMyServicesFields,
        PayCrypto: CPlaceholderTablesPayCryptoFields,
        MyOrders: CPlaceholderTablesMyOrdersFields,
        Notification: CPlaceholderTablesNotificationsFields,
        InfoPayOrder: CPlaceholderTablesInfoPayOrderFields,
        // ADMIN
        AdminUsers: APlaceholderTablesAdminUsersFields,
        AdminHistoryOrders: APlaceholderTablesAdminHistoryOrdersFields,
        AdminHistoryWallet: APlaceholderTablesAdminHistoryWalletFields,
        AdminReferrals: APlaceholderTablesAdminReferralsFields,
        AdminRederral: APlaceholderTablesReferralFields,
        AdminSupport: APlaceholderTablesSupportFields,
        AdminCoupons: APlaceholderTablesCouponsFields,
        AdminServices: APlaceholderTablesServicesFields,
    }
}

export default CPlaceholders;