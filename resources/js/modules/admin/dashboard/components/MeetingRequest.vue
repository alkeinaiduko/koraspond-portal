<template>
    <div>
        <ul class="content-list">
            <li 
                v-for="(user, key) in users"
                :key="key"
            >
                <card-container>
                    <meeting-list-item :data="user" />
                </card-container>
            </li>
        </ul>
    </div>
</template>
<script>
import CardContainer from '~/common/CardContainer'
import MeetingListItem from "./MeetingRequestListItem"
export default {
    name: 'MeetingRequest',
    components: {
        CardContainer,
        MeetingListItem
    },
    data(){
        return{
            users : [
                { name : "user 1", status: "fail"},
                { name : "user 2", status: "success"},
                { name : "user 3", status: "received"},
                { name : "user 4", status: "pending"},
            ]
        }
    }
}
</script>