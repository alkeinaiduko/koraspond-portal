<template>
    <div class="portal__container wrapper">
        <div class="portal__content">
            <div class="portal__content--left">
                <card-container class="user-information">
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
                            @click="showProjectForm = true"
                        >
                            Create Project
                        </el-button>
                    </div>
                </card-container>
                <!-- <ul class="content-list">
                    <li
                        v-for="(project, key) in projects"
                        :key="key"
                    >
                        <card-container class="project">
                            <project-list-item
                                :data="project"
                                @open-details="openDetails(project)"
                            />
                        </card-container>
                    </li>
                </!-->
                <project-details
                    v-if="openProjectDetails"
                    :data="projectDetail"
                    @close="openProjectDetails = false"
                />
                <section class="content">
                    <component
                        :is="currentTabComponent"
                        class="tab"
                    />
                </section>
            </div>
        </div>
        <create-project
            :show="showProjectForm"
            @close="showProjectForm = !showProjectForm"
        />
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
    import ProjectDetails from './partials/ProjectDetails'
    import MeetingRequest from './partials/MeetingRequest'
    import ProjectList from './partials/ProjectList'
    import CreateProject from './partials/CreateProject'

    export default {
        name: 'Dashboard',
        components: {
            CardContainer,
            UserInfo,
            UserAbout,
            UserEducation,
            UserInterest,
            NavMenu,
            ProjectListItem,
            ProjectDetails,
            MeetingRequest,
            ProjectList,
            CreateProject
        },
        props: {
            user: Object
        },
        data() {
            return {
                openProjectDetails: false,
                projectDetail: {},
                projects: [
                    {
                        title: 'There are many variations of passages',
                        industry: 'Artificial Intelligence',
                        date_submitted: '17/10/2019',
                        status: 'Rejected',
                        views: 177,
                        description: 'It is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established. Fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable content'
                    },
                    {
                        title: 'There are many variations of passages',
                        industry: 'Artificial Intelligence',
                        date_submitted: '17/10/2019',
                        status: 'Pending',
                        views: 177,
                        description: 'It is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established. Fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable content'
                    },
                    {
                        title: 'There are many variations of passages',
                        industry: 'Artificial Intelligence',
                        date_submitted: '17/10/2019',
                        status: 'Accepted',
                        views: 177,
                        description: 'It is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established. Fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable content'
                    },
                    {
                        title: 'There are many variations of passages',
                        industry: 'Artificial Intelligence',
                        date_submitted: '17/10/2019',
                        status: 'Rejected',
                        views: 177,
                        description: 'It is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established. Fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable content'
                    },
                    {
                        title: 'There are many variations of passages',
                        industry: 'Artificial Intelligence',
                        date_submitted: '17/10/2019',
                        status: 'Pending',
                        views: 177,
                        description: 'It is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established. Fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable content'
                    },
                    {
                        title: 'There are many variations of passages',
                        industry: 'Artificial Intelligence',
                        date_submitted: '17/10/2019',
                        status: 'Accepted',
                        views: 177,
                        description: 'It is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established. Fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable contentIt is a long established fact that a reader will be distracted by the readable content It is a long established fact that a reader will be distracted by the readable content'
                    },
                ],
                activeIndex: '1',
                activeIndex2: '1',
                currentTab: "project-list",
                tabs: [
                    { id:"1", component: "project-list", title: "Projects" },
                    { id:"2", component: "meeting-request", title: "Meeting Request" }
                ],
                showProjectForm: false,
            }
        },
        computed: {
            currentTabComponent: function(){
                return this.currentTab.toLowerCase();
            }
        },
        methods: {
             openDetails(data) {
                this.projectDetail = data
                this.openProjectDetails = true
            }
        }
    }
</script>

<style lang="sass">
    @import "~/../sass/modules/portal/dashboard/_all"
</style>