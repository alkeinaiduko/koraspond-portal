<template>
    <div>
        <ul
            v-if="projects.length"
            class="content-list"
        >
            <li
                v-for="(project, key) in projects"
                :key="key"
            >
                <card-container>
                    <project-list-item
                        :data="project"
                        @open-details="openProjectDetails(project)"
                    />
                </card-container>
            </li>
        </ul>
        <div v-else>
            Nothing to show.
        </div>
        <project-details
            v-if="projectDetailModal"
            :data="selectedProject"
            @close="projectDetailModal = false"
        />
    </div>
</template>
<script>
import CardContainer from '~/common/CardContainer'
import ProjectListItem from './ProjectListItem'
import ProjectDetails from './ProjectDetails'
export default {
    name: 'ProjectList',
    components: {
        CardContainer,
        ProjectListItem,
        ProjectDetails
    },
    data(){
        return {
            projects: [],
            empty: false,
            projectDetailModal: false,
            selectedProject: null
        }
    },
    async created(){
        let { data } = await axios.get('/projects')
        this.projects = data.data
    },
    methods: {
        openProjectDetails(data) {
            this.selectedProject = data
            this.projectDetailModal = true
        }
    }
}
</script>