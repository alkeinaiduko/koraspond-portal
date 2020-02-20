import Vue from 'vue'
import Home from "./Home";

import {
    Button,
    Select,
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
    Link,
    Checkbox
} from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

import 'vueperslides/dist/vueperslides.css'

import { library } from '@fortawesome/fontawesome-svg-core';

import {
    faArrowRight,
  } from "@fortawesome/free-solid-svg-icons";

import {
    faSkype,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";

library.add(
    faArrowRight,
    faSkype,
    faTwitter
);

// Components that are registered globally
[
    Home,
    Button,
    Select,
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
    Link,
    Checkbox
].forEach(Component => {
    Vue.component(Component.name, Component)
})
