<template>
    <el-dialog
        width="33%"
        title="LOGIN"
        :visible.sync="dialogVisible"
        :before-close="close"
        center
    >
        <el-form
            id="login-form"
            :label-position="labelPosition"
            label-width="100px"
            :model="form"
            method="POST"
            action="/login"
        >
            <el-form-item label="User Name">
                <el-input
                    v-model="form.username"
                    name="email"
                />

                <el-input
                    type="hidden"
                    :value="csrf"
                    name="_token"
                />
            </el-form-item>
            <el-form-item label="Password">
                <el-input
                    v-model="form.password"
                    show-password
                    name="password"
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
            <button
                class="btn koraspond__primary-btn--round"
                @click="formSubmit" 
            >
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
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            form: {
                username: "",
                password: ""
            }
        }
    },
    methods : {
        close(){
            this.$emit('close');
        },
        formSubmit(){
            document.getElementById("login-form").submit();
        }
    }
}
</script>

<style lang="sass">
    @import "~/../sass/modules/home-page/_all"
</style>
