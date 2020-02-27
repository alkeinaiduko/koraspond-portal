import Vue from 'vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';

import {
    faStar,
    faMapMarkerAlt,
    faEye,
    faArrowRight,
    faEllipsisV,
    faShare
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
    faEllipsisV,
    faShare
);

Vue.component('vue-fontawesome', FontAwesomeIcon);
