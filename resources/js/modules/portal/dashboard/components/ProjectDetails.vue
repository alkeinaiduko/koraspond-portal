<template>
    <modal custom-class="project-modal">
        <div
            slot="header"
            class="custom-modal-header"
        >
            <i
                class="el-icon-close"
                @click="$emit('close')"
            />
            <span>PROJECT DETAILS</span>
        </div>
        <div slot="body">
            <span class="project-title">
                {{ data.title }}
            </span>
            <div class="detail__container">
                <div class="detail__container--left">
                    <el-tag
                        type="info"
                        size="large"
                    >
                        Industry:  <span>{{ data.industry }}</span>
                    </el-tag>
                    <p class="project-submitted">
                        <span>Submitted on: </span>{{ data.date_submitted }}
                    </p>
                </div>
                <div class="detail__container--right">
                    <el-button
                        v-if="data.status == 'Rejected'"
                        type="danger"
                        round
                        plain
                        size="small"
                    >
                        {{ data.status }}
                    </el-button>
                    <el-button
                        v-else-if="data.status == 'Pending'"
                        type="warning"
                        round
                        plain
                        size="small"
                    >
                        {{ data.status }}
                    </el-button>
                    <el-button
                        v-else-if="data.status == 'Accepted'"
                        type="success"
                        round
                        plain
                        size="small"
                    >
                        {{ data.status }}
                    </el-button>
                    <br>
                    <el-tag
                        type="info"
                    >
                        <vue-fontawesome icon="eye" />
                        <span>{{ data.views }} views</span>
                    </el-tag>
                </div>
            </div>
            <div class="project__tags">
                <span>Tags: </span>
                <el-tag
                    v-for="(tag, key) in data.tag"
                    :key="key"
                    type="info"
                    size="large"
                >
                    {{ tag.name }}
                </el-tag>
            </div>
            <div class="project__description">
                <h5>Description</h5>
                <p>{{ data.description }}</p>
            </div>
        </div>
        <div slot="footer">
            <div class="project__attachments">
                <img
                    src="/images/pdf.png"
                    alt=""
                >
                <img
                    src="/images/pdf.png"
                    alt=""
                >
                <img
                    src="/images/pdf.png"
                    alt=""
                >
            </div>
        </div>
    </modal>
</template>

<script>
    import Modal from '~/common/Modal'
    export default {
        components: {
            Modal
        },
        props: {
            data: Object
        },
        created() {
            console.log('@data', this.data)
        }
    }
</script>

<style>

</style>