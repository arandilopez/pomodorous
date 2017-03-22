export default [
  {
    path: '/',
    name: 'main-page',
    component: require('components/MainPage')
  },
  {
    path: '*',
    redirect: '/'
  }
]
