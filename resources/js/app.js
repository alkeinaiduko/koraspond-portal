import Vue from 'vue';

require('./bootstrap');

// Common resources
import '~/common/components'
import '~/element-ui'

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

const app = new Vue( {
    el: '#app'
});