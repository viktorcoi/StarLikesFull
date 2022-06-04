import ElementNavigation from "./ElementNavigation";
import NavigationMain from "./NavigationMain";
import { useRouter } from "next/router";

const PanelNavigationAdmin = () => {

    const RoutesAdminPanel = [
        {
            route: '/admin/users',
            name: 'Пользователи',
            image: 'admin-nav-users'
        },
        {
            route: '/admin/history_orders',
            name: 'История заказов',
            image: 'nav-folder'
        },
        {
            route: '/admin/history_wallet',
            name: 'История счетов',
            image: 'nav-wallet'
        },
        {
            route: '/admin/referrals',
            name: 'Рефералы',
            image: 'nav-money'
        },
        {
            route: '/admin/support',
            name: 'Поддержка',
            image: 'nav-support'
        },
        {
            route: '/admin/coupons',
            name: 'Промокоды',
            image: 'admin-nav-coupon'
        },
        {
            route: '/admin/prm4u',
            name: 'Prm4u',
            image: 'admin-nav-settings'
        },
        {
            route: '/admin/services',
            name: 'Услуги',
            image: 'admin-nav-list'
        },
    ];

    const router = useRouter();
    const isCurrentPage = (path) => router.asPath == path;

    return (
        <NavigationMain>
            {
                RoutesAdminPanel.slice(0, 8).map(v => {
                    return (
                        <ElementNavigation className={`${isCurrentPage(v.route) ? "select" : ""}`}  href={v.route} key={`route-${v.route}`}> 
                            <img className="transition_0_3" alt='link' src={`/assets/img/${v.image}.svg`}></img>
                            {v.name}
                        </ElementNavigation>
                    );
                })
            }
        </NavigationMain>
    )
}

export default PanelNavigationAdmin;