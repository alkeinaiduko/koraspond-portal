<template>
    <div>
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
                    Industry:  <span>{{ data.industry }}</span>
                </el-tag>

                <div class="scope-tags">
                    <el-tag
                        v-for="(scope, key) in scopes"
                        :key="key"
                        type="info"
                        size="medium"
                    >
                        <span>{{ scope }}</span>
                    </el-tag>
                </div>
            </div>
            <div class="project-list__action">
                <div class="project-list__action--top">
                    <el-button
                        v-if="data.status == 'Accepted'"
                        type="success"
                        size="small"
                        icon="el-icon-check"
                        plain
                        round
                    >
                        Approved
                    </el-button>
                    <el-button
                        type="primary"
                        size="small"
                    >
                        $250
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
                    <p>Submitted on : 17/10/2019</p>
                    <p
                        v-if="data.status == 'Accepted'"
                    >
                        Priority: <span class="status">High</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="project-list__footer">
            <round-image
                class="user-info__avatar"
                width="50px"
                image="https://source.unsplash.com/random/100x100"
            />
            <div>
                user1, user2, user3, user4 and 5 others are interested in this project.
            </div>
            <div class="project-list__footer__actions">
                <el-button
                    v-if="data.status != 'Accepted'"
                    type="success"
                    size="small"
                    icon="el-icon-check"
                >
                    Approved
                </el-button>
                <el-button
                    v-if="data.status != 'Accepted'"
                    type="danger"
                    size="small"
                    icon="el-icon-close"
                >
                    Reject
                </el-button>
                <el-button
                    v-if="data.status == 'Accepted'"
                    class="btn--pink"
                    size="small"
                    icon="el-icon-time"
                >
                    Setup Meeting Room
                </el-button>
                <el-button
                    v-if="data.status == 'Accepted'"
                    type="warning"
                    size="small"
                    icon="el-icon-close"
                >
                    Reject
                </el-button>
            </div>
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
    },
    data(){
        return {
            scopes : ["Animation", "Engineering", "Articial Intelligence", "Software", "Science"]
        }
    }
}
</script>