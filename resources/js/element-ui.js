import {
    Button,
    Select,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
} from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

[
    Home,
    Button,
    Select,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
].forEach(Component => {
    Vue.component(Component.name, Component)
})
