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
                    <div>
                        <el-menu
                            :default-active="activeIndex"
                            class="el-menu-demo"
                            mode="horizontal"
                            active-text-color="#F7B85B"
                        >
                            <el-menu-item
                                v-for="(tab, key) in tabs"
                                :key="key"
                                :index="tab.id"
                                @click="currentTab = tab.component"
                            >
                                {{ tab.title }}
                            </el-menu-item>
                        </el-menu>
                        <el-button
                            type="primary"
                            plain
                            icon="el-icon-plus"
                        >
                            Create Project
                        </el-button>
                    </div>
                </card-container>
                <section class="content">
                    <component 
                        :is="currentTabComponent"
                        class="tab" 
                    />
                </section>
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
    import MeetingRequest from './partials/MeetingRequest'
    import ProjectList from './partials/ProjectList'

    export default {
        name: 'admin-dashboard',
        components: {
            CardContainer,
            UserInfo,
            UserAbout,
            UserEducation,
            UserInterest,
            MeetingRequest,
            ProjectList
        },
        props: {
            user: Object
        },
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                currentTab: "project-list",
                tabs: [
                    { id:"1", component: "project-list", title: "Projects" },
                    { id:"2", component: "meeting-request", title: "Meeting Request" }
                ]
            }
        },
        computed: {
            currentTabComponent: function(){
                return this.currentTab.toLowerCase();
            }
        },
    }
</script>

<style lang="sass">
    @import "~/../sass/modules/portal/home/_all"
</style>