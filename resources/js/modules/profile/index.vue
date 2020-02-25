<template>
    <div>Profile</div>
</template>

<script>
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

    export default {
        name: 'Profile'
    }
</script>

<style lang="sass">
    @import "~/../sass/modules/profile/_all"
</style>
