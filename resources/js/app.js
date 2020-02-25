import Vue from 'vue';

require('./bootstrap');

// Common resources
import '~/common/components'
import '~/element-ui'

// register components
import Home from './modules/HomePage/components/Home'
[
    Home,
].forEach(Component => {
    Vue.component(Component.name, Component)
})

const app = new Vue( {
    el: '#app'
});