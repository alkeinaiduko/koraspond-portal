<template>
    <el-dialog
        width="33%"
        title="LOGIN"
        :visible.sync="dialogVisible"
        :before-close="close"
        center
    >
        <el-form
            :label-position="labelPosition"
            label-width="100px"
            :model="form"
        >
            <el-form-item label="User Name">
                <el-input
                    v-model="form.username"
                />
            </el-form-item>
            <el-form-item label="Password">
                <el-input
                    v-model="form.password"
                    show-password
                />
            </el-form-item>
        </el-form>
        <el-link
            type="primary"
            style="float: right"
        >
            Forgot Password?
        </el-link>
        <span
            slot="footer"
        >
            <button class="btn koraspond__primary-btn--round">
                LOGIN
            </button>
            <div>
                Do you have an account?
                <el-link
                    type="primary"
                >
                    Signup
                </el-link>
            </div>
        </span>
    </el-dialog>
</template>

<script>
export default {
    props : {
        show: {
            type: Boolean
        }
    },
    data(){
        return{
            dialogVisible: this.show,
            labelPosition: "top",
            form: {
                username: "",
                password: ""
            }
        }
    },
    methods : {
        close(){
            this.$emit('close');
        }
    }
}
</script>

<style lang="sass">
    @import "~/../sass/modules/home-page/_all"
</style>
