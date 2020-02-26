<template>
    <div>
        <ul class="content-list">
            <li
                v-for="(request, key) in requests"
                :key="key"
            >
                <card-container>
                    <meeting-available-item :data="request" />
                </card-container>
            </li>
        </ul>
    </div>
</template>
<script>
import CardContainer from '~/common/CardContainer'
import MeetingAvailableItem from "./meetingAvailableItem"
export default {
    components: {
        CardContainer,
        MeetingAvailableItem
    },
    props: {
        requests: {
            type: Array,
            required: true
        }
    },
}
</script>