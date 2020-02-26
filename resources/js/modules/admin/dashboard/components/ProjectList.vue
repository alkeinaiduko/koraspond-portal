<template>
    <div>
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