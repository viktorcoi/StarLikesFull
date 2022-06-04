const Routes = [
    // Страницы Авторизации
    {
        route: '/authorization',
        name: 'Авторизация'
    },
    {
        route: '/registration',
        name: 'Регистрация'
    },
    {
        route: '/password_recovery',
        name: 'Восстановление пароля'
    }, 
    {
        route: '/password_confirm',
        name: 'Подтверждение пароля'
    },

    // Основные страницы 

    {
        route: '/',
        name: 'Услуги'
    },
    {
        route: '/my_orders',
        name: 'Мои заказы'
    },
    {
        route: '/new_order',
        name: 'Новый заказ'
    },
    {
        route: '/balance',
        name: 'Баланс'
    }, 
    {
        route: '/setting_profile',
        name: 'Изменить профиль' 
    },
    {
        route: '/balance',
        name: 'Баланс'
    }, 
    {
        route: '/support',
        name: 'Поддержка'
    },
    {
        route: '/new_order_settings',
        name: 'Настройка услуги'
    },
    {
        route: '/new_order_pay',
        name: 'Оплата услуги'
    },
    {
        route: '/new_order_pay_confirm',
        name: 'Подтверждение заказa'
    },
    {
        route: '/new_order_crypto',
        name: 'Оплата заказа'
    },
    {
        route: '/my_orders_info',
        name: 'Данные о заказе'
    },
    {
        route: '/balance_insert',
        name: 'Пополнение баланса'
    },
    {
        route: '/balance_crypto',
        name: 'Пополнение баланса'
    },
    {
        route: '/dialog_support',
        name: 'Обращение в поддержку'
    },
    {
        route: '/notifications',
        name: 'Уведомления'
    },
    {
        route: '/referrals',
        name: 'Рефералы'
    },

    // Админ страницы

    {
        route: '/admin/users',
        name: 'Пользователи'
    },
    {
        route: '/admin/history_wallet',
        name: 'История счетов'
    },
    {
        route: '/admin/history_orders_order',
        name: 'Данные о заказе'
    },
    {
        route: '/admin/history_orders',
        name: 'История заказов'
    },
    {
        route: '/admin/support',
        name: 'Поддержка' 
    }, 
    {
        route: '/admin/services',
        name: 'Услуги'
    },
    {
        route: '/admin/referrals',
        name: 'Рефералы'
    },
    {
        route: '/admin/referrals_referrer',
        name: 'Реферер'
    },
    {
        route: '/admin/referrals_referral',
        name: 'Реферал'
    },
    {
        route: '/admin/prm4u',
        name: 'Взаимодействие с Prm4u'
    },
    {
        route: '/admin/support_dialog',
        name: 'Обращение в поддержку'
    },
    {
        route: '/admin/coupons',
        name: 'Промокоды'
    },
];

export default Routes;