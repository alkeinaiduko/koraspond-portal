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
                    <project-list-item :data="project" />
                </card-container>
            </li>
        </ul>
        <div v-else>
            Nothing to show.
        </div>
    </div>
</template>
<script>
import CardContainer from '~/common/CardContainer'
import ProjectListItem from './ProjectListItem'
export default {
    name: 'ProjectList',
    components: {
        CardContainer,
        ProjectListItem
    },
    data(){
        return {
            projects: [],
            empty: false
        }
    },
    async created(){
        let { data } = await axios.get('/projects')
        this.projects = data.data
    },
}
</script>