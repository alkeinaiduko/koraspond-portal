import Vue from 'vue'
import Profile from "./Profile";
import 'element-ui/lib/theme-chalk/index.css';

import {
    Button,
} from 'element-ui';

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
    Profile,
    Button,
].forEach(Component => {
    Vue.component(Component.name, Component)
})
