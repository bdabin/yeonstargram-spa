import store from '../store'

export default async function(to, from, next) {

  await store.dispatch('account/isLogin')

  if (!store.state.isLogin) {
    // return redirect('/account/login')
    return next('/account/login')
  }
  next();
}

// const requireAuth = () => (to, from, next) => {
//   if (store.state.accessToken !== '') {
//     return next();
//   }
//   next('/login');
// };