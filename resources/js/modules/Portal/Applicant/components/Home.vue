<template>
    <div class="portal__container wrapper">
        <div class="portal__content">
            <div class="portal__content--left">
                <card-container>
                    <el-button
                        class="edit-btn"
                        type="info"
                        plain
                        circle
                        size="small"
                        icon="el-icon-edit"
                    />
                    <user-info :data="user" />
                    <user-about />
                    <user-education />
                    <user-interest />
                </card-container>
            </div>
            <div class="portal__content--right">
                <card-container class="nav-menu">
                    <nav-menu />
                </card-container>
                <ul class="content-list">
                    <li>
                        <card-container>
                            <project-list-item />
                        </card-container>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import CardContainer from '~/common/CardContainer'
    import UserInfo from './partials/UserInfo'
    import UserAbout from './partials/UserAbout'
    import UserEducation from './partials/UserEducation'
    import UserInterest from './partials/UserInterest'
    import NavMenu from './partials/NavMenu'
    import ProjectListItem from './partials/ProjectListItem'

    export default {
        name: 'PortalHome',
        components: {
            CardContainer,
            UserInfo,
            UserAbout,
            UserEducation,
            UserInterest,
            NavMenu,
            ProjectListItem
        },
        props: {
            user: Object
        },
        created() {
            console.log('@user', this.user)
        }
    }
</script>

<style lang="sass">
    @import "~/../sass/modules/portal/home/_all"
</style>