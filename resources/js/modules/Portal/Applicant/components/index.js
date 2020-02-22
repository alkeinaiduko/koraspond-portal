import Vue from 'vue'
import Home from "./Home";

import {
    Button,
    Tag,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
} from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';


import { library } from '@fortawesome/fontawesome-svg-core';

import {
    faStar,
    faMapMarkerAlt,
    faEye,
    faArrowRight
  } from "@fortawesome/free-solid-svg-icons";

import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

library.add(
    faStar,
    faFacebookF,
    faTwitter,
    faInstagram,
    faMapMarkerAlt,
    faLinkedin,
    faEye,
    faArrowRight
);

// Components that are registered globally
[
    Home,
    Button,
    Tag,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
].forEach(Component => {
    Vue.component(Component.name, Component)
})
