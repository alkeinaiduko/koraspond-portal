<template>
    <div class="project-list__container">
        <img
            src="/images/project-pic.png"
            alt=""
        >
        <div class="project-list__details">
            <h5>{{ data.title }}</h5>
            <el-tag
                type="info"
                size="medium"
            >
                Industry:  
                <span
                    v-for="(tag, key) in data.tag"
                    :key="key"
                >
                    {{ tag.name }}
                    <span v-if="key != data.tag.length - 1">,</span>
                </span>
            </el-tag>
            <p class="project-submitted">
                <span>Submitted on: </span>{{ data.created_at }}
            </p>
        </div>
        <div class="project-list__action">
            <div class="project-list__action--top">
                <el-button
                    v-if="data.status == 'rejected'"
                    type="danger"
                    round
                    plain
                    size="small"
                >
                    {{ data.status }}
                </el-button>
                <el-button
                    v-else-if="data.status == 'pending'"
                    type="warning"
                    round
                    plain
                    size="small"
                >
                    {{ data.status }}
                </el-button>
                <el-button
                    v-else-if="data.status == 'accepted'"
                    type="success"
                    round
                    plain
                    size="small"
                >
                    {{ data.status }}
                </el-button>
                <el-dropdown trigger="click">
                    <el-button
                        type="info"
                        class="action-editor"
                        icon="el-icon-more"
                        circle
                        plain
                        size="small"
                    />
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item icon="el-icon-edit">
                            Edit
                        </el-dropdown-item>
                        <el-dropdown-item icon="el-icon-delete">
                            Delete
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="project-list__action--bottom">
                <el-tag
                    type="info"
                >
                    <vue-fontawesome icon="eye" />
                    <span>{{ data.views }} views</span>
                </el-tag>
                <el-button
                    class="primary--plain"
                    size="small"
                    @click="$emit('open-details')"
                >
                    View Details
                    <vue-fontawesome icon="arrow-right" />
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            data: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style>

</style>