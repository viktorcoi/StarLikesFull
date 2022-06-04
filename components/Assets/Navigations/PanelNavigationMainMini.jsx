import ElementNavigation from "./ElementNavigation";
import NavigationMain from "./NavigationMain";
import { useRouter } from "next/router";

const PanelNavigationMainMini = () => {

    const RoutesAdminPanel = [
        {
            route: '/new_order',
            name: 'Заказы',
            image: 'nav-plus',
        },
        {
            route: '/',
            name: 'Услуги',
            image: 'nav-package'
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
        <NavigationMain className="navigation-mini">
            {
                RoutesAdminPanel.slice(0, 4).map(v => {
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

export default PanelNavigationMainMini;