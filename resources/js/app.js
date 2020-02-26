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
const CompleteRegistration = () => import('./modules/portal/complete-registration');
const PortalDashboard = () => import('./modules/portal/dashboard');
// layout-components
const AdminHeader  = () => import('./layout-components/admin/AdminHeader.vue');
const PortalHeader = () => import('./layout-components/portal/PortalHeader.vue');
const AdminDashboard = () => import('./modules/admin/dashboard/index.vue');
const MeetingRequest = () => import('./modules/admin/meeting-request/index.vue');
const MeetingAvailable = () => import('./modules/portal/meeting-available/index.vue');
[
    HomePage,
    // portal
    AdminLogin,
    CompleteRegistration,
    PortalDashboard,
    // layout-components
    AdminHeader,
    PortalHeader,
    AdminDashboard,
    MeetingRequest,
    MeetingAvailable
].forEach(Component => {
    Vue.component(Component.name, Component)
});

Vue.config.productionTip = false;

const app = new Vue( {
    el: '#app',
    store
});