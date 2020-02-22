<template>
    <div>
        <modal>
            <!-- HEADER -->
            <div
                slot="header"
                class="modal-header__container"
            >
                <h4>Login</h4>
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
            </div>
            <!-- FOOTER -->
            <div
                slot="footer"
                class="modal-footer__right"
            >
                <el-link

                    type="primary"
                >
                    Forgot Password?
                </el-link>
            </div>
            <div
                slot="footer"
                class="modal-footer__center"
            >
                <button
                    class="btn koraspond__primary-btn--round"
                    @click="formSubmit"
                >
                    LOGIN
                </button>
            </div>
            <div
                slot="footer"
                class="modal-footer__center"
            >
                <div>
                    Do you have an account?
                    <el-link
                        type="primary"
                    >
                        Signup
                    </el-link>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
import Modal from "~/common/Modal"
export default {
    components: {
        Modal
    },
    props : {
        show: {
            type: Boolean
        }
    },
    data(){
        return{
            labelPosition: "top",
            form: {
                username: "",
                password: ""
            },
            error: "",
        }
    },
    methods : {
        close(){
            this.$emit('close');
        },
        async formSubmit(){
            // document.getElementById("login-form").submit();
            let params = {
                'email': this.form.username,
                'password': this.form.password
            }

            try {
                let res = await axios.post('/login', params);
                location.replace('/home');
            } catch (err) {
                this.error = err.response.data.error
            }
        }
    }
}
</script>

<style lang="sass">
    @import "~/../sass/modules/home-page/_all"
</style>
