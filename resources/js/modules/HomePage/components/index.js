import Vue from 'vue'
import Home from "./Home";


// Components that are registered globally
[
    Home
].forEach(Component => {
    Vue.component(Component.name, Component)
})
