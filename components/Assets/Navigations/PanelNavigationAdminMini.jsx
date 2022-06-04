import ElementNavigation from "./ElementNavigation";
import NavigationMain from "./NavigationMain";
import { useRouter } from "next/router";

const PanelNavigationAdminMini = () => {

    const RoutesAdminPanel = [
        {
            route: '/admin/users',
            name: 'Заказы',
            image: 'admin-nav-users'
        },
        {
            route: '/admin/coupons',
            name: 'Система',
            image: 'admin-nav-settings'
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
    ];

    const router = useRouter();
    const isCurrentPage = (path) => router.asPath == path;

    return (
        <NavigationMain className="navigation-mini">
            {
                RoutesAdminPanel.slice(0, 4).map(v => {
                    return (
                        <ElementNavigation onClick={v.onClick} className={`${isCurrentPage(v.route) ? "select" : ""}`}  href={v.route} key={`route-${v.route}`}> 
                            <img className="transition_0_3" alt='link' src={`/assets/img/${v.image}.svg`}></img>
                            {v.name}
                        </ElementNavigation>
                    );
                })
            }
        </NavigationMain>
    )
}

export default PanelNavigationAdminMini;