<template>
    <div class="meeting__container">
        <div class="meeting_search">
            <el-input
                v-model="search"
                placeholder="Search author"
                prefix-icon="el-icon-search"
            />
        </div>
        <div class="meeting__tabs">
            <el-tabs
                v-model="activeName" 
            >
                <el-tab-pane 
                    label="Showing 20 Results" 
                    name="first"
                >
                    <meeting-available-list :requests="filteredList" />
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
class Requests {
  constructor(title, author, address) {
    this.title = title;
    this.author = author;
    this.address = address;
  }
}
import MeetingAvailableList from "./components/meetingAvailableList"
export default {
    name: 'MeetingAvailable',
    components: {
        MeetingAvailableList
    },
    data(){
        return {
            search: "",
            activeName: 'first',
            requestsList: [
                    new Requests(
                        'There are many variations of passages',
                        "user1",
                        "test address"
                    ),
                    new Requests(
                        'There are many variations of passages',
                        "user2",
                        "test address"
                    ),
                    new Requests(
                        'There are many variations of passages',
                        "user3",
                        "test address"
                    )
                ]
        }
    },
    computed: {
        filteredList() {
            return this.requestsList.filter(request => {
                return request.author.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }
}
</script>

<style lang="sass">
    @import "~/../sass/modules/portal/dashboard/_all"
</style>