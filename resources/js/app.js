import Vue from 'vue';
import store from './store'

require('./bootstrap');

// Common resources
import './common/components'

// register plugin
import './plugins'

// plugins
import FlagIcon from 'vue-flag-icon'

Vue.use(FlagIcon);

// dynamically import modules
// this will only import only the component used inside laravel blade pages
// only import main modules here for blade pages
const HomePage = () => import('./modules/homepage');
const AdminLogin = () => import('./modules/portal/dashboard/admin-login');
// layout-components
const AdminHeader  = () => import('./layout-components/admin/AdminHeader.vue');
const PortalHeader = () => import('./layout-components/portal/PortalHeader.vue');
[
    HomePage,
    AdminLogin,
    // layout-components
    AdminHeader,
    PortalHeader
].forEach(Component => {
    Vue.component(Component.name, Component)
});

Vue.config.productionTip = false;

const app = new Vue( {
    el: '#app',
    store
});