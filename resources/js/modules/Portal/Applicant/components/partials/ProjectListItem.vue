<template>
    <div class="project-list__container">
        <img
            src="/images/project-pic.png"
            alt=""
        >
        <div class="project-list__details">
            <h5>There are many variations of passages</h5>
            <el-tag
                type="info"
                size="medium"
            >
                <span>Industry: Artificial Intelligence</span>
            </el-tag>
            <p class="project-submitted">
                <span>Submitted on: </span>17/10/2019
            </p>
        </div>
        <div class="project-list__action">
            <div class="project-list__action--top">
                <el-button
                    type="danger"
                    round
                    plain
                    size="medium"
                >
                    Rejected
                </el-button>
                <el-button
                    type="info"
                    icon="el-icon-more"
                    circle
                    plain
                    size="medium"
                />
            </div>
            <div class="project-list__action--bottom">
                <el-tag
                    type="info"
                >
                    <vue-fontawesome icon="eye" />
                    <span>177 views</span>
                </el-tag>
                <el-button
                    type="primary"
                    size="medium"
                >
                    View Details
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>