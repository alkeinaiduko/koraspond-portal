import Vue from 'vue';
import store from './store'

require('./bootstrap');

// Common resources
import '~/common/components'

// register plugin
import './plugins'

// plugins
import FlagIcon from 'vue-flag-icon'

Vue.use(FlagIcon);

// register components
import Home from './modules/homepage'
import AdminLogin from './modules/portal/dashboard/admin-login'
[
    Home,
    AdminLogin
].forEach(Component => {
    Vue.component(Component.name, Component)
})

Vue.config.productionTip = false;

const app = new Vue( {
    el: '#app',
    store
});