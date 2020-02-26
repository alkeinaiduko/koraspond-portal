<template>
    <nav class="navbar navbar-expand-lg navbar-light portal__header">
        <a
            class="navbar-brand"
            href="#"
        >
            <img
                width="100%"
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
            <el-input placeholder="Search...">
                <i
                    slot="prefix"
                    class="el-icon-search el-input__icon"
                />
            </el-input>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a
                        class="nav-link"
                        href="#"
                    >
                        <vue-fontawesome icon="tachometer-alt" />
                        Dashboard
                    </a>
                </li>
                <li class="nav-item">
                    <a
                        class="nav-link"
                        href="#"
                    >
                        <vue-fontawesome icon="id-card" />
                        My Proposals
                    </a>
                </li>
                <li class="nav-item">
                    <a
                        class="nav-link"
                        href="#"
                    >
                        <vue-fontawesome icon="bell" />
                        Notifications
                    </a>
                </li>
                <li class="nav-item">
                    <a
                        class="nav-link"
                        href="#"
                    >
                        <vue-fontawesome icon="cog" />
                        Settings
                    </a>
                </li>
            </ul>
            <div class="site-btns">
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        <round-image
                            class="header__avatar"
                            width="35px"
                            image="https://source.unsplash.com/random/100x100"
                        />
                        <i class="el-icon-arrow-down el-icon--right" />
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>
                            <a
                                href="#"
                                @click="logout"
                            >Logout</a>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </nav>
</template>

<script>
    import RoundImage from '~/common/RoundImage'
    export default {
        name: 'AppHeader',
        components: {
            RoundImage
        },
        methods: {
            logout() {
                axios.post('/logout').then((res) => {
                    location.replace('/');
                }).catch((err) => {

                });
            }
        }
    }
</script>

<style lang="sass">
    @import "~/../sass/common/portal/_all"
</style>
