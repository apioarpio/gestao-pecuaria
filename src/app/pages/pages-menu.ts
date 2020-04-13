import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Fazenda',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Indicadores Fazenda',
    icon: 'pie-chart-outline',
    // link: '/pages/iot-dashboard',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Cadastros',
    icon: 'file-add-outline',
    children: [
      {
        title: 'Area',
        // link: '/pages/layout/stepper',
      },
      {
        title: 'Lote',
        // link: '/pages/layout/list',
      },
      {
        title: 'Produtos',
        // link: '/pages/layout/infinite-list',
      },
      {
        title: 'Fazenda Terceiro',
        // link: '/pages/layout/accordion',
      },
      {
        title: 'Cliente',
        pathMatch: 'prefix',
        // link: '/pages/layout/tabs',
      },
      {
        title: 'Fornecedor',
        pathMatch: 'prefix',
        // link: '/pages/layout/tabs',
      },
      {
        title: 'Movimentação Animal',
        pathMatch: 'prefix',
        // link: '/pages/layout/tabs',
      },
      {
        title: 'Raça',
        pathMatch: 'prefix',
        // link: '/pages/layout/tabs',
      },
    ],
  },
  {
    title: 'Manejo',
    icon: 'repeat-outline',
    children: [
      {
        title: 'Entrada',
        link: '/pages/manejo/manejo-entrada/index',
      },
      {
        title: 'Saida',
        link: '/pages/manejo/manejo-saida/index',
      },
      {
        title: 'Interno',
        link: '/pages/manejo/manejo-interno/index',
      },
    ],
  },
  {
    title: 'Calendário Abate',
    icon: 'browser-outline',
  },
  {
    title: 'Áreas',
    icon: 'keypad-outline',
    // link: '/pages/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      // {
        // title: 'Animated Searches',
        // link: '/pages/ui-features/search-fields',
      // },
    ],
  },
  {
    title: 'Consulta Animal',
    icon: 'activity-outline',
  },
  {
    title: 'Controle Sanitário',
    icon: 'edit-outline',
    // children: [
    //   {
    //     title: 'Calendar',
    //     // link: '/pages/extra-components/calendar',
    //   },
    //   {
    //     title: 'Progress Bar',
    //     link: '/pages/extra-components/progress-bar',
    //   },
    //   {
    //     title: 'Spinner',
    //     link: '/pages/extra-components/spinner',
    //   },
    //   {
    //     title: 'Alert',
    //     link: '/pages/extra-components/alert',
    //   },
    //   {
    //     title: 'Calendar Kit',
    //     link: '/pages/extra-components/calendar-kit',
    //   },
    //   {
    //     title: 'Chat',
    //     link: '/pages/extra-components/chat',
    //   },
    // ],
  },
  {
    title: 'Integração Certificadora',
    icon: 'cloud-download-outline',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'Relatórios',
    icon: 'file-text-outline',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Comunicação',
    icon: 'bluetooth-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  // {
  //   title: 'Tables & Data',
  //   icon: 'grid-outline',
  //   children: [
  //     {
  //       title: 'Smart Table',
  //       link: '/pages/tables/smart-table',
  //     },
  //     {
  //       title: 'Tree Grid',
  //       link: '/pages/tables/tree-grid',
  //     },
  //   ],
  // },
  // {
  //   title: 'Miscellaneous',
  //   icon: 'shuffle-2-outline',
  //   children: [
  //     {
  //       title: '404',
  //       link: '/pages/miscellaneous/404',
  //     },
  //   ],
  // },
  // {
  //   title: 'Auth',
  //   icon: 'lock-outline',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
