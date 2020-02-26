import Vue from 'vue'

// Icon components that are used in this page
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faAngleLeft,
  faTachometerAlt,
  faIdCard,
  faBell,
  faCog

} from "@fortawesome/free-solid-svg-icons";

library.add(
  faAngleLeft,
  faTachometerAlt,
  faIdCard,
  faBell,
  faCog
);

import {
    Input,
    Dropdown,
    DropdownMenu,
    DropdownItem
} from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

// Components that are registered globally
[
    Input,
    Dropdown,
    DropdownMenu,
    DropdownItem
].forEach(Component => {
    Vue.component(Component.name, Component)
})