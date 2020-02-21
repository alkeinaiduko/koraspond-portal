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
                    @click="$emit('close')"
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
import Modal from "../../../../common/Modal"
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
