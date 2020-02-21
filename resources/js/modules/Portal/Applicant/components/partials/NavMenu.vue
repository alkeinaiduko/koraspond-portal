<template>
    <div>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            active-text-color="#F7B85B"
            @select="handleSelect"
        >
            <el-menu-item index="1">
                Projects
            </el-menu-item>
            <el-menu-item index="2">
                Meeting Requests
            </el-menu-item>
        </el-menu>
        <el-button
            type="primary"
            plain
            icon="el-icon-plus"
        >
            Create Project
        </el-button>
    </div>
</template>

<script>
    export default {
        data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
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