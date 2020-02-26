<template>
    <div class="meeting__container">
        <div class="meeting_search">
            <el-input
                placeholder="Search"
                prefix-icon="el-icon-search"
            />
        </div>
        <div class="meeting__tabs">
            <el-tabs 
                v-model="activeName" 
                @tab-click="handleClick"
            >
                <el-tab-pane 
                    label="All" 
                    name="first"
                >
                    <card-container style="padding: 1em">
                        <div class="meeting__tabs--body">
                            SAD
                        </div>
                        <div class="meeting__tabs--footer">
                            <el-button 
                                size="mini"
                            >
                                SAD
                            </el-button>
                            <div>
                                <el-button 
                                    size="mini"
                                    type="success"
                                >
                                    Approve
                                </el-button>
                                <el-button 
                                    size="mini"
                                    type="danger"
                                >
                                    Reject
                                </el-button>
                            </div>
                        </div>
                    </card-container>
                </el-tab-pane>
                <el-tab-pane 
                    label="Approved" 
                    name="second"
                >
                    Approved
                </el-tab-pane>
                <el-tab-pane 
                    label="Rejected" 
                    name="third"
                >
                    Rejected
                </el-tab-pane>
                <el-tab-pane 
                    label="Meeting Rooms" 
                    name="fourth"
                >
                    Meeting Rooms
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
    import CardContainer from '~/common/CardContainer'
export default {
    name: 'MeetingRequest',
    components: {
        CardContainer,
    },
    data() {
        return {
            activeName: 'first'
        }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style lang="sass">
    @import "~/../sass/modules/portal/dashboard/_all"
</style>