<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <!-- HEADER -->
                    <div class="modal-header__container">
                        <h4>Login</h4>
                    </div>
                    <!-- BODY -->
                    <div class="modal-body">
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
                    <div class="modal-footer__right">
                        <el-link 
                            type="primary"
                        >
                            Forgot Password?
                        </el-link>
                    </div>
                    <div class="modal-footer__center">
                        <slot name="footer">
                            <button
                                class="btn koraspond__primary-btn--round" 
                                @click="$emit('close')"
                            >
                                LOGIN
                            </button>
                        </slot>
                    </div>
                    <div class="modal-footer__center">
                        <slot name="footer">
                            <div>
                                Do you have an account? 
                                <el-link 
                                    type="primary"
                                >
                                    Signup
                                </el-link>
                            </div>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "Modal",
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
