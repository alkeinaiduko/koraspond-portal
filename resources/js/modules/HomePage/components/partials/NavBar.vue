<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <a
            class="navbar-brand"
            href="#"
        >
            <img
                src="/images/site-logo.png"
                alt="site-logo"
            >
        </a>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon" />
        </button>
        <div
            id="navbarText"
            class="collapse navbar-collapse"
        >
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a
                        class="nav-link"
                        href="#"
                    >
                        Advertiser
                    </a>
                </li>
                <li class="nav-item">
                    <a
                        class="nav-link"
                        href="#"
                    >
                        Publisher
                    </a>
                </li>
                <li class="nav-item">
                    <a
                        class="nav-link"
                        href="#"
                    >
                        Monetize
                    </a>
                </li>
                <li class="nav-item">
                    <a
                        class="nav-link"
                        href="#"
                    >
                        About
                    </a>
                </li>
                <li class="nav-item">
                    <a
                        class="nav-link"
                        href="#"
                    >
                        Blog
                    </a>
                </li>
            </ul>
            <div class="site-btns">
                <!-- <button class="btn btn-outline-dark">
                    Signup
                </button>
                <button class="btn btn-warning">
                    Login
                </button> -->
                <el-button
                    type="info"
                    plain
                    @click="showModal()"
                >
                    Signup
                </el-button>
                <el-button type="warning">
                    Login
                </el-button>
            </div>
            <sign-up 
                :show="showSignUp" 
                @closeModal="closeModal()" 
            />
        </div>
    </nav>
</template>
    
<script>
    import signUp from './ModalSignUp'
    export default {
        components: { signUp },
        data() {
            return {
                showSignUp: false
            }
        },
        mounted() {
        },
        methods: {
            showModal() {
                this.showSignUp = true
            },
            closeModal(value) {
                this.showSignUp = value
            }
        }
    }
</script>

<style>

</style>
