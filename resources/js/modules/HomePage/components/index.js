import Vue from 'vue'
import Home from "./Home";

import {
    Button,
    Select,
    Option,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Dialog,
    Input,
    Form,
    FormItem,
    Radio,
    RadioGroup,
    RadioButton,
    Row,
    Col,
    Checkbox,
    Link
} from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

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
    Button,
    Select,
    Option,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Dialog,
    Input,
    Form,
    FormItem,
    Radio,
    RadioGroup,
    RadioButton,
    Row,
    Col,
    Checkbox,
    Link
].forEach(Component => {
    Vue.component(Component.name, Component)
})
