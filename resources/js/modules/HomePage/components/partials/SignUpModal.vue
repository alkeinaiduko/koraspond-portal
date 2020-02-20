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
                            <el-radio-group v-model="form.accountType">
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
                            <el-input v-model="form.firstName" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="Last Name">
                            <el-input v-model="form.LastName" />
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
                            <el-input v-model="form.country" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="City">
                            <el-input v-model="form.city" />
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row 
                    type="flex" 
                    justify="center"
                >
                    <el-col :span="20">
                        <el-form-item label="Address">
                            <el-input v-model="form.address" />
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
                            <el-input v-model="form.email" />
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="Phone">
                            <el-input 
                                v-model="form.phone" 
                            >
                                <el-select 
                                    slot="prepend" 
                                    v-model="selects" 
                                    placeholder="Select"
                                    value-key="selects"
                                >
                                    <div slot="prefix">
                                        <flag 
                                            :iso="selects"
                                            class="mt-10"
                                        />
                                    </div>
                                    <el-option 
                                        v-for="(flag,index) in flags"
                                        :key="index"
                                        :value="flag.value"
                                    >
                                        <flag :iso="flag.value" />
                                    </el-option>
                                </el-select>
                            </el-input>
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
                            v-model="termsAndConditions"
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
                            v-model="newsLetter"
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
                accountType: '',
                firstName: '',
                lastName: '',
                country: '',
                city: '',
                address: '',
                email: '',
                phone: '',
                termsAndConditions: false,
                newsLetter: false
            },
            flags: [
                {
                    value: 'AE'
                },
                {
                    value: 'SA'
                },
                {
                    value: 'PH'
                }
            ],
            selects: 'AE'
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