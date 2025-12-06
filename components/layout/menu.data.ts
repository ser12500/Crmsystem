export interface IMenuItem {
  name: string
  url: string
  icon: string
}

export const MENU_DATA: IMenuItem[] = [
  {
    icon: 'radix-icons:dashboard',
    name: 'Домой',
    url: '/',
  },

  {
    name: 'Отчеты',
    icon: 'fluent:receipt-28-regular',
    url: '/orders',
  },
  {
    name: 'Студенты',
    icon: 'mingcute:group-line',
    url: '/customers',
  },

  {
    name: 'Настройки',
    icon: 'radix-icons:gear',
    url: '/settings',
  },
  {
    name: 'Помощь',
    icon: 'radix-icons:question-mark',
    url: '/help',
  },
]
