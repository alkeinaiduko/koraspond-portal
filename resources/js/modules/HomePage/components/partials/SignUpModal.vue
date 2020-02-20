<template>
    <div>
        <el-dialog
            :visible.sync="showModal"
            width="35%"
            :show-close="false"
            :label-position="labelPosition"
            top="10vh"
            center
        > 
            <span slot="title">Sign Up</span>
            <el-form>
                <el-row
                    type="flex"
                    justify="center"
                >
                    <el-col :span="20">
                        <el-form-item label="Account Type">
                            <el-radio-group v-model="radio">
                                <el-radio :label="1">
                                    Applicant
                                </el-radio>
                                <el-radio :label="2">
                                    Investor
                                </el-radio>
                                <el-radio :label="3">
                                    ISDB Secretariat
                                </el-radio>
                                <el-radio :label="4">
                                    Govt Official
                                </el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row 
                    type="flex" 
                    justify="center"
                    :gutter="20"
                >
                    <el-col :span="10">
                        <el-form-item label="First Name">
                            <el-input />
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="Last Name">
                            <el-input />
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row 
                    type="flex" 
                    justify="center"
                    :gutter="20"
                >
                    <el-col :span="10">
                        <el-form-item label="Country">
                            <el-input />
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="City">
                            <el-input />
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row 
                    type="flex" 
                    justify="center"
                >
                    <el-col :span="20">
                        <el-form-item label="Address">
                            <el-input />
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row 
                    type="flex" 
                    justify="center"
                >
                    <el-col :span="20">
                        <h4>Contact Information</h4>
                    </el-col>
                </el-row>
                <el-row 
                    type="flex" 
                    justify="center"
                    :gutter="20"
                >
                    <el-col :span="10">
                        <el-form-item label="Email">
                            <el-input />
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="Phone">
                            <el-input />
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row 
                    type="flex" 
                    justify="center"
                    :gutter="20"
                >
                    <el-col :span="20">
                        <el-checkbox 
                            v-model="checked"
                        >
                            <span>I accept the terms & conditions</span>
                        </el-checkbox>
                    </el-col>
                </el-row>
                <el-row 
                    type="flex" 
                    justify="center"
                    :gutter="20"
                >
                    <el-col :span="20">
                        <el-checkbox 
                            v-model="checked"
                        >
                            <span>I would like to subscribe to newsletter</span>
                        </el-checkbox>
                    </el-col>
                </el-row>
                <el-row 
                    type="flex" 
                    justify="space-between"
                    :gutter="20"
                    align="middle"
                    class="mt-10"
                >
                    <el-col 
                        :span="6" 
                        :push="2"
                    >
                        <button class="btn koraspond__primary-btn--round">
                            SIGNUP
                        </button>
                    </el-col>
                    <el-col 
                        :span="12"
                        :push="1"
                    >
                        <div>
                            Already have an account?
                            <el-link
                                type="primary"
                            >
                                Signin
                            </el-link>
                        </div>
                    </el-col>
                </el-row>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
export default {
    props: {
        show: {
            type: Boolean,
            required: false
        }
    },
    data() {
        return {
            radio: 3,
            labelPosition: 'top',
            checked: true,
            form: {
                accountType: ''
            }
        }
    },
    computed: {
        showModal: {
            get() {
                return this.show
            },
            set(value) {
                this.$emit('closeModal', value)
            }
        }
    },
    mounted() {
    },
    methods: {
    }
}
</script>

<style lang="sass">
    @import "~/../sass/modules/home-page/_all"
</style>