<template>
    <div>
        <modal custom-class="login-modal">
            <!-- HEADER -->
            <div
                slot="header"
                class="custom-modal-header"
            >
                <i
                    class="el-icon-close"
                    @click="$emit('close')"
                />
                <h3>Login</h3>
            </div>
            <!-- BODY -->
            <div
                slot="body"
                class="modal-body"
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
                            @keyup.enter.native="formSubmit"
                        />
                    </el-form-item>
                    <el-form-item label="Password">
                        <el-input
                            v-model="form.password"
                            show-password
                            name="password"
                            @keyup.enter.native="formSubmit"
                        />
                    </el-form-item>
                </el-form>
            </div>
            <!-- FOOTER -->
            <div
                slot="footer"
            >
                <div class="text-right">
                    <el-link
                        type="primary"
                    >
                        Forgot Password?
                    </el-link>
                </div>
                <div class="login-btn__container text-center">
                    <button
                        v-loading="isLoggingIn"
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
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
    import Modal from "~/common/Modal"

    export default {
        name: 'AdminLogin',
        components: {
            Modal
        },
        data(){
            return{
                labelPosition: "top",
                isLoggingIn: false,
                form: {
                    username: "",
                    password: ""
                },
                error: "",
            }
        },
        methods: {
            async formSubmit(){
                // document.getElementById("login-form").submit();
                this.isLoggingIn = true
                let params = {
                    'email': this.form.username,
                    'password': this.form.password
                }

                try {
                    let res = await axios.post('/admin/login', params);
                    this.isLoggingIn = false
                    location.replace('/home');
                } catch (err) {
                    this.error = err.response.data.error
                    this.isLoggingIn = false
                }
            }
        }
    }
</script>

<style lang="sass">
    @import "~/../sass/modules/portal/dashboard/_all"
</style>