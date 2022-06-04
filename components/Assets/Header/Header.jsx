import { useState, useEffect } from 'react'
import BetweenBlock from '../Blocks/BetweenBlock'
import styles from './Header.module.css'
import HeaderElement from './HeaderElement'
import HeaderLogo from './HeaderLogo'
import HeaderNavigation from './HeaderNAvigation'
import { useRouter } from "next/router";
import Routes from '../Routes';
import Head from 'next/head';
import Language from './Language'
import LinkA from '../tags/LinkA'
import ProfileDrop from './ProfileDrop'
import Burger from './Burger'
import HeaderBalance from './HeaderBalance'
import HeaderAlert from './HeaderAlert'
import HeadMobileMenu from './HeadMobileMenu'
import { Media } from 'react-breakpoints'
import HeaderLink from './HeaderLink'

export function Header() {

    const router = useRouter();

    const getCurrentPage = () => {
        const page = Routes.filter(v => isCurrentPage(v.route));
        return page.length < 1 ? router.asPath : page[0].name;
    };

    const pagesAuth = router.asPath.startsWith('/registration') || 
        router.asPath.startsWith('/authorization') || 
        router.asPath.startsWith('/password');

  
    const [menu, open_menu] = useState(false);
    const [profile, open_profile] = useState(false);

    const IsAdminPage = () => router.asPath.startsWith('/admin/');
    const IsAuthPage = () => pagesAuth;

    const OpenFunction = (set, i) => {
        set(!i);
    };
   
    useEffect(() => {
        if (window.innerWidth <= 749) {
            document.body.style.overflow = menu ? 'hidden' : 'overlay';
        }
    })

    const RoutesNavigation = [
        {
            route: '/authorization',
            name: 'Авторизация',
            img: 'auth-menu'
        },
        {
            route: '/registration',
            name: 'Регистрация',
            img: 'auth-pen'
        }
    ];

    const isCurrentPage = (path) => router.asPath == path;

    const alert = 2;

    return (
        <>
            <Head>
                <title>{(getCurrentPage() || "StarLikes")}</title>
                <link rel="icon" href="/assets/img/icon.svg"/>
            </Head>
            <header>
                <BetweenBlock className={`margin-auto items-center ${styles.header}`}>
                    <div onClick={() => OpenFunction(open_menu, menu)} className={`${styles["bg-menu"]} 
                        transition_0_3 ${(menu ? styles.open : "")}`}></div>
                    {
                        IsAdminPage () ? 
                        <>
                            <HeaderLogo href="/"/>
                            <BetweenBlock className={`${styles["menu-admin"]} d-flex items-center transition_0_3`}>
                                <HeadMobileMenu clickClose={() => OpenFunction(open_menu, menu)}/>
                                <ProfileDrop img="admin" className={profile ? "open" : ""} name="vladisadmin" 
                                    clickClose={() => OpenFunction(open_profile, profile)}
                                    imgClass={profile ? "open" : ""} wallet="100 000₽" onClick={() => OpenFunction(open_profile, profile)}>
                                    <LinkA onClick={() => OpenFunction(open_profile, profile)} href="/">
                                        <p className='d-flex items-center'>
                                            <img alt='main page' src='/assets/img/circle-arrow.svg'></img>
                                            На главную
                                        </p>
                                    </LinkA>
                                </ProfileDrop>
                                <HeaderLink onClick={() => OpenFunction(open_menu, menu)} className="element-change" href="/" img="circle-arrow">На главную</HeaderLink>
                                <HeaderBalance onClick={() => OpenFunction(open_menu, menu)} balance="0.00"/>
                                <HeaderAlert onClick={() => OpenFunction(open_menu, menu)} countAlert={alert} statusAlert={alert ? "new-alert" : ""}/>
                                <HeaderLink onClick={() => OpenFunction(open_menu, menu)} className="element-exit" href="/authorization" img="exit-menu">Выйти</HeaderLink>
                                <Language mainClass={styles["for-language"]} addClass={styles.open} 
                                    className={styles.language} class={styles["two-language"]}/>
                            </BetweenBlock>
                        </>
                        :
                        IsAuthPage() ?
                        <>
                            <HeaderLogo href="/authorization"/> 
                            <BetweenBlock className={`${styles["menu-auth"]} d-flex items-center transition_0_3`}>
                                <HeadMobileMenu clickClose={() => OpenFunction(open_menu, menu)}/>
                                <HeaderNavigation clickClose={() => OpenFunction(open_menu, menu)}>
                                    {
                                        RoutesNavigation.slice(0, 2).map(v => {
                                            return (
                                                <HeaderElement onClick={() => OpenFunction(open_menu, menu)} 
                                                    className={isCurrentPage(v.route) ? "you-here" : ""} 
                                                    key={`route-${v.route}`} img={v.img} href={v.route}>{v.name}
                                                </HeaderElement>
                                            );
                                        })
                                    }
                                </HeaderNavigation>
                                <Language mainClass={styles["for-language"]} addClass={styles.open} 
                                    className={styles.language} class={styles["two-language"]}>
                                </Language>
                            </BetweenBlock>
                        </>
                        : 
                        <>
                            <HeaderLogo href="/"/>
                            <BetweenBlock className={`${styles["menu-main"]} d-flex items-center transition_0_3`}>
                                <HeadMobileMenu clickClose={() => OpenFunction(open_menu, menu)}/>
                                <ProfileDrop img="user" className={profile ? "open" : ""} name="vladislove" 
                                    clickClose={() => OpenFunction(open_profile, profile)}
                                    imgClass={profile ? "open" : ""} wallet="100 000₽" onClick={() => OpenFunction(open_profile, profile)}>
                                    <LinkA onClick={() => OpenFunction(open_profile, profile)} href="/admin/users">
                                        <p className='d-flex items-center'>
                                            <img alt='main page' src='/assets/img/circle-arrow.svg'></img>
                                            Админ - доступ
                                        </p>
                                    </LinkA>
                                </ProfileDrop>
                                    <HeaderLink onClick={() => OpenFunction(open_menu, menu)} className="element-change" href="/admin/users" img="circle-arrow">Админ - доступ</HeaderLink>
                                    <Media>
                                        {({ breakpoints, currentBreakpoint }) =>
                                            breakpoints[currentBreakpoint] < breakpoints.menuMobile ? (
                                            <>
                                                <HeaderBalance onClick={() => OpenFunction(open_menu, menu)} balance="0.00"/>
                                                <HeaderLink onClick={() => OpenFunction(open_menu, menu)} className="element-edit" href="/setting_profile" img="pen">Изменить профиль</HeaderLink>
                                                <HeaderAlert onClick={() => OpenFunction(open_menu, menu)} countAlert={alert} statusAlert={alert ? "new-alert" : ""}/>
                                            </>
                                            ) : (
                                            <>
                                                <HeaderAlert countAlert={alert} statusAlert={alert ? "new-alert" : ""}/>
                                                <HeaderBalance balance="0.00"/>
                                                <HeaderLink className="element-edit" href="/setting_profile" img="pen">Изменить профиль</HeaderLink>
                                            </>
                                            )
                                        }
                                    </Media>
                                <HeaderLink onClick={() => OpenFunction(open_menu, menu)} className="element-exit" href="/authorization" img="exit-menu">Выйти</HeaderLink>
                                <Language mainClass={styles["for-language"]} addClass={styles.open} 
                                    className={styles.language} class={styles["two-language"]}/>
                            </BetweenBlock>
                        </>
                    }
                    <Burger onClick={() => OpenFunction(open_menu, menu)} className={menu ? "open" : ""}/>
                </BetweenBlock>
            </header>
        </>
    )
}

                