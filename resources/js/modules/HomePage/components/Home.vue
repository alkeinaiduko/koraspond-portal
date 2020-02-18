<template>
    <div class="container">
        <header class="site__header">
            <nav-bar />
        </header>
        <section class="b-hero__container">
            <div class="b-hero--left">
                <h1>Let's collaborate and succeed</h1>
                <p>Accelerate teamwork and create more meaningfull and futuristing products</p>
                <button class="btn koraspond__primary-btn">
                    Create your meeting room
                </button>
            </div>
            <div class="b-hero--right">
                <img
                    src="/images/b-hero.png"
                    alt="b-hero-image"
                >
            </div>
        </section>
        <section class="partners__container">
            <img
                src="/images/partners.png"
                alt="partners"
            >
        </section>
        <section class="lead-collaborators__container">
            <div class="lead-collaborators__header text-center">
                <h1>Our Lead Collaborators</h1>
                <p>Advanced in-house optimization technology and over 11 years' ad tech experience provide your business with digital advertising tools that deliver results.</p>
            </div>
            <image-carousel />
        </section>
        <section class="user-types__container">
            <div class="user-types__header">
                <h1>One room for great Ideas to take place</h1>
            </div>
            <user-types />
            <vue-fontawesome icon="arrow-right" />
            <vue-fontawesome :icon="['fab', 'skype']" />
        </section>
    </div>
</template>

<script>
    import NavBar from './partials/NavBar'
    import ImageCarousel from './partials/ImageCarousel'
    import UserTypes from './partials/UserTypes'

    export default {
        name: 'HomePage',
        components: {
            NavBar,
            ImageCarousel,
            UserTypes
        }
    }
</script>

<style lang="sass">
    @import "~/../sass/modules/home-page/_all"
</style>
