import Vue from 'vue'
import Home from "./Home";

import 'vueperslides/dist/vueperslides.css'

import { library } from '@fortawesome/fontawesome-svg-core';

import FlagIcon from 'vue-flag-icon'

Vue.use(FlagIcon);

import {
    faArrowRight,
  } from "@fortawesome/free-solid-svg-icons";

import {
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

library.add(
    faArrowRight,
    faFacebook,
    faTwitter,
    faInstagram
);

// Components that are registered globally
[
    Home,
].forEach(Component => {
    Vue.component(Component.name, Component)
})
