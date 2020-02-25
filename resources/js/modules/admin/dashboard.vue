<template>
    <div class="portal__container wrapper">
        <div class="portal__content">
            <div class="portal__content--left">
                <card-container style="padding: 1.2em">
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
    import UserInfo from './components/UserInfo'
    import UserAbout from './components/UserAbout'
    import UserEducation from './components/UserEducation'
    import UserInterest from './components/UserInterest'
    import MeetingRequest from './components/MeetingRequest'
    import ProjectList from './components/ProjectList'

    import { library } from '@fortawesome/fontawesome-svg-core';

    import {
        faStar,
        faMapMarkerAlt,
        faEye,
        faArrowRight,
        faEllipsisV
    } from "@fortawesome/free-solid-svg-icons";

    import {
        faFacebookF,
        faTwitter,
        faInstagram,
        faLinkedin
    } from "@fortawesome/free-brands-svg-icons";

    library.add(
        faStar,
        faFacebookF,
        faTwitter,
        faInstagram,
        faMapMarkerAlt,
        faLinkedin,
        faEye,
        faArrowRight,
        faEllipsisV
    );

    export default {
        name: 'AdminDashboard',
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
    @import "~/../sass/modules/portal/dashboard/_all"
</style>