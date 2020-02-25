<template>
    <div class="meeting-request__container">
        <div class="meeting-request__image">
            <round-image
                class="user-info__avatar"
                width="50px"
                image="https://source.unsplash.com/random/100x100"
            />
            <img
                v-if="data.status == 'success'"
                class="status"
                src="/images/accepted.png"
                alt=""
            >
            <img
                v-if="data.status == 'fail'"
                class="status"
                src="/images/rejected.png"
                alt=""
            >
            <img
                v-if="data.status == 'pending'"
                class="status"
                src="/images/pending.png"
                alt=""
            >
            <img
                v-if="data.status == 'received'"
                class="status"
                src="/images/received.png"
                alt=""
            >
        </div>
        <div
            v-if="data.status == 'received'"
            class="meeting-request__details"
        >
            You {{ data.status }} meeting request from <strong>{{ data.name }}</strong>
        </div>
        <div
            v-else
            class="meeting-request__details"
        >
            Your meeting request for <strong>{{ data.name }} </strong> is {{ data.status }}
        </div>
        <div class="meeting-request__actions">
            <el-button
                v-if="data.status == 'success'"
                class="primary--plain--reverse"
                size="small"
            >
                Continue
            </el-button>

            <el-button
                v-if="data.status == 'received'"
                type="info"
                size="small"
            >
                Reject
            </el-button>

            <el-button
                v-if="data.status == 'received'"
                class="btn--pink"
                size="small"
                icon="el-icon-date"
            >
                Schedule
            </el-button>
        </div>
    </div>
</template>
<script>
import RoundImage from '~/common/RoundImage'
export default {
    components: {
        RoundImage
    },
    props: {
        data: {
            type: Object,
            required: true
        }
    }
}
</script>