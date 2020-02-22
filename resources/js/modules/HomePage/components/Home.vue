<template>
    <div>
        <header class="site__header container">
            <nav-bar />
        </header>
        <section class="b-hero__container text-center container">
            <div class="b-hero--left">
                <h1>Let's collaborate and succeed</h1>
                <p>Accelerate teamwork and create more meaningfull and futuristing products</p>
                <button class="btn koraspond__primary-btn">
                    Create your meeting room
                </button>
            </div>
            <div class="b-hero--right">
                <img
                    width="100%"
                    src="/images/b-hero.png"
                    alt="b-hero-image"
                >
            </div>
        </section>
        <section class="partners__container container">
            <img
                src="/images/partners.png"
                alt="partners"
            >
        </section>
        <section class="lead-collaborators__container container">
            <div class="lead-collaborators__header text-center">
                <h1>Our Lead Collaborators</h1>
                <p>Advanced in-house optimization technology and over 11 years' ad tech experience provide your business with digital advertising tools that deliver results.</p>
            </div>
            <image-carousel />
        </section>
        <section class="user-types__container container">
            <div class="user-types__header text-center">
                <h1>One room for great Ideas to take place</h1>
            </div>
            <user-types />
            <!-- <vue-fontawesome icon="arrow-right" /> -->
            <!-- <vue-fontawesome :icon="['fab', 'skype']" /> -->
        </section>
        <section class="banner-ad__container">
            <div class="banner-ad__content">
                <h1>Accelerate teamwork and create more meaningful and futuristic products</h1>
                <el-button type="warning">
                    Create your meeting room
                </el-button>
            </div>
        </section>
        <section class="project-steps__container text-center container">
            <h1>Your next project is just few steps ahead</h1>
            <p>A fine spot to meet the right people and engage in right project</p>
            <div class="row">
                <div class="col-md-4">
                    <img
                        src="/images/complete.svg"
                        alt=""
                    >
                    <h3>Complete your Profile</h3>
                    <p>Fill in your details and domain interest</p>
                </div>
                <div class="col-md-4">
                    <img
                        src="/images/organize.svg"
                        alt=""
                    >
                    <h3>Organize meetings</h3>
                    <p>Meet people of same area of interests to collaborate</p>
                </div>
                <div class="col-md-4">
                    <img
                        src="/images/build.svg"
                        alt=""
                    >
                    <h3>Build a project</h3>
                    <p>With the right team and right effort success Is not far away </p>
                </div>
            </div>
        </section>
        <section class="statistics__container">
            <img
                src="/images/grid.png"
                alt=""
            >
            <div class="statistics__info">
                <h1>100+</h1>
                <p>Successful Projects</p>
                <h1>1000+</h1>
                <p>Investors</p>
                <h1>3000+</h1>
                <p>Applicants</p>
            </div>
            <img
                src="/images/statistics.png"
                alt=""
            >
        </section>
        <footer class="site-footer__container">
            <div class="row">
                <div class="col-md-4">
                    <img
                        src="/images/site-logo.png"
                        alt=""
                    >
                    <p>© Copyright 2020 portal.</p>
                    <p>All rights reserved</p>
                </div>
                <div class="col-md-4">
                    <h4>Quick Links</h4>
                    <div>
                        <ul>
                            <li>FAQ</li>
                            <li>Terms and Condition</li>
                            <li>Privacy Policy</li>
                            <li>Support</li>
                            <li>Imprint</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4">
                    <h4>Follow Us</h4>
                    <ul>
                        <li>
                            <vue-fontawesome :icon="['fab', 'facebook']" /> Facebook
                        </li>
                        <li>
                            <vue-fontawesome :icon="['fab', 'twitter']" /> Twitter
                        </li>
                        <li>
                            <vue-fontawesome :icon="['fab', 'instagram']" /> Instagram
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
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
