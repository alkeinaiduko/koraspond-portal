import Vue from 'vue'
import Home from "./Home";

import { library } from '@fortawesome/fontawesome-svg-core';

import {
    faStar,
    faMapMarkerAlt,
    faEye,
    faArrowRight,
    faEllipsisV
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
    faArrowRight,
    faEllipsisV
);

// Components that are registered globally
[
    Home,
].forEach(Component => {
    Vue.component(Component.name, Component)
})
