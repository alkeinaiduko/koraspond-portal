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
                    <li
                        v-for="(project, key) in projects"
                        :key="key"
                    >
                        <card-container>
                            <project-list-item :data="project" />
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
        name: 'Dashboard',
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
        data() {
            return {
                projects: [
                    {
                        title: 'There are many variations of passages',
                        industry: 'Artificial Intelligence',
                        date_submitted: '17/10/2019',
                        status: 'Rejected',
                        views: 177
                    },
                    {
                        title: 'There are many variations of passages',
                        industry: 'Artificial Intelligence',
                        date_submitted: '17/10/2019',
                        status: 'Pending',
                        views: 177
                    },
                    {
                        title: 'There are many variations of passages',
                        industry: 'Artificial Intelligence',
                        date_submitted: '17/10/2019',
                        status: 'Accepted',
                        views: 177
                    },
                    {
                        title: 'There are many variations of passages',
                        industry: 'Artificial Intelligence',
                        date_submitted: '17/10/2019',
                        status: 'Rejected',
                        views: 177
                    },
                    {
                        title: 'There are many variations of passages',
                        industry: 'Artificial Intelligence',
                        date_submitted: '17/10/2019',
                        status: 'Pending',
                        views: 177
                    },
                    {
                        title: 'There are many variations of passages',
                        industry: 'Artificial Intelligence',
                        date_submitted: '17/10/2019',
                        status: 'Accepted',
                        views: 177
                    },
                ]
            }
        }
    }
</script>

<style lang="sass">
    @import "~/../sass/modules/portal/home/_all"
</style>