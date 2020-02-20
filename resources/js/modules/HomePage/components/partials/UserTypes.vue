<template>
    <div>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
        >
            <el-menu-item
                v-for="(type, key) in userTypes"
                :key="key"
                :index="(key+1).toString()"
            >
                I'm {{ type.name }}
            </el-menu-item>
        </el-menu>
        <!-- <component :is="userTypeBlock" /> -->
        <div class="user-types__block">
            <div class="user-types--left">
                <img src="/images/user-types.png">
            </div>
            <div class="user-types--right">
                <img src="/images/bulb.svg">
                <h2>I'm {{ userInfo.name }}</h2>
                <p>{{ userInfo.description }}</p>
                <div class="actions">
                    <a href="#">Start Now </a><vue-fontawesome icon="arrow-right" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                userTypeBlock: 'Applicant',
                activeIndex: '1',
                userInfo: {
                    name: 'Applicant',
                    description: 'Publish your ideas to collaborate with Investors, govt officials and ISDB President secretariat across your domain'
                },
                userTypes: [
                    {
                        name: 'Applicant',
                        description: 'Publish your ideas to collaborate with Investors, govt officials and ISDB President secretariat across your domain'
                    },
                    {
                        name: 'Investor',
                        description: 'Publish your ideas to collaborate with Investors, govt officials and ISDB President secretariat across your domain'
                    },
                    {
                        name: 'ISDB Secretariat',
                        description: 'Publish your ideas to collaborate with Investors, govt officials and ISDB President secretariat across your domain'
                    },
                    {
                        name: 'Govt Officials',
                        description: 'Publish your ideas to collaborate with Investors, govt officials and ISDB President secretariat across your domain'
                    },
                ]
            };
        },
            methods: {
                handleSelect(key, keyPath) {
                    switch(key) {
                        case '1':
                            this.userTypeBlock = 'Applicant'
                            this.userInfo = this.userTypes[0]
                            break
                        case '2':
                            this.userTypeBlock = 'Investor'
                            this.userInfo = this.userTypes[1]
                            break
                        case '3':
                            this.userTypeBlock = 'ISDB Secretariat'
                            this.userInfo = this.userTypes[2]
                            break
                        case '4':
                            this.userTypeBlock = 'Govt Officials'
                            this.userInfo = this.userTypes[3]
                            break
                    }
                }
            }
    }
</script>

<style>

</style>