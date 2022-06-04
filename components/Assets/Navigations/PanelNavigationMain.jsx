import ElementNavigation from "./ElementNavigation";
import NavigationMain from "./NavigationMain";
import { useRouter } from "next/router";

const PanelNavigationMain = () => {

    const RoutesAdminPanel = [
        {
            route: '/new_order',
            name: 'Новый заказ',
            image: 'nav-plus'
        },
        {
            route: '/my_orders',
            name: 'Мои заказы',
            image: 'nav-folder'
        },
        {
            route: '/',
            name: 'Услуги',
            image: 'nav-package'
        },
        {
            route: '/balance',
            name: 'Баланс',
            image: 'nav-wallet'
        },
        {
            route: '/referrals',
            name: 'Рефералы',
            image: 'nav-money'
        },
        {
            route: '/support',
            name: 'Поддержка',
            image: 'nav-support'
        },
    ];

    const router = useRouter();
    const isCurrentPage = (path) => router.asPath == path;

    return (
        <NavigationMain>
            {
                RoutesAdminPanel.slice(0, 6).map(v => {
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

export default PanelNavigationMain;