<template>
    <div class="project-list__container">
        <img
            src="/images/project-pic.png"
            alt=""
        >
        <div class="project-list__details">
            <h5>{{ data.author }}</h5>
            <p>{{ data.title }}</p>
            <p class="project-submitted">
                {{ data.address }}
            </p>
            <div class="project-list-summary">
                Summary: test@test.com | user@user.com
            </div>
        </div>
        <div class="project-list__action">
            <div class="project-list__action__meeting--top">
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
                <el-button 
                    type="warning" 
                >
                    <vue-fontawesome icon="share" /> Request Meeting
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