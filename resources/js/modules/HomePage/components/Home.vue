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
            <div class="b-hero--right" />
        </section>
        <section class="partners__container">
            <div class="row">
                <div class="col-md-2 offset-md-1">
                    <img
                        src="https://source.unsplash.com/random/100x100"
                        alt=""
                    >
                </div>
                <div class="col-md-2">
                    <img
                        src="https://source.unsplash.com/random/100x100"
                        alt=""
                    >
                </div>
                <div class="col-md-2">
                    <img
                        src="https://source.unsplash.com/random/100x100"
                        alt=""
                    >
                </div>
                <div class="col-md-2">
                    <img
                        src="https://source.unsplash.com/random/100x100"
                        alt=""
                    >
                </div>
                <div class="col-md-2">
                    <img
                        src="https://source.unsplash.com/random/100x100"
                        alt=""
                    >
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import NavBar from './partials/NavBar'

    export default {
        name: 'HomePage',
        components: {
            NavBar
        }
    }
</script>

<style lang="sass">
    @import "~/../sass/modules/home-page/_all"
</style>
