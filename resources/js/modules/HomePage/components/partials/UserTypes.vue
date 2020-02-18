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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
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
                    console.log(key, keyPath);
                }
            }
    }
</script>

<style>

</style>