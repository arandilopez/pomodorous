export default [
  {
    path: '/',
    name: 'main-page',
    component: require('./Pages/MainPage')
  },
  {
    path: '/settings',
    name: 'settings-page',
    component: require('./Pages/SettingsPage')
  },
  {
    path: '*',
    redirect: '/'
  }
]
