<template>
    <div class="user-info__container text-center">
        <round-image
            class="user-info__avatar"
            width="50px"
            image="https://source.unsplash.com/random/100x100"
        />
        <div class="user-info__details">
            <div>
                <span class="user-info__name">{{ data.first_name }} {{ data.last_name }}</span>
                <span class="user-info__ratings">
                    <vue-fontawesome icon="star" />
                    4.5
                </span>
            </div>
            <p class="user-info__email">
                {{ data.email }}
            </p>
            <p class="user-info__address">
                <vue-fontawesome icon="map-marker-alt" />
                {{ data.country }}, {{ data.city }}
            </p>
            <p class="user-info__socials">
                <vue-fontawesome :icon="['fab', 'facebook-f']" />
                <vue-fontawesome :icon="['fab', 'twitter']" />
                <vue-fontawesome :icon="['fab', 'linkedin']" />
            </p>
        </div>
    </div>
</template>

<script>
    import RoundImage from '~/common/RoundImage'

    export default {
        components: {
            RoundImage
        },
        props :{
            data: Object
        }
    }
</script>

<style>

</style>