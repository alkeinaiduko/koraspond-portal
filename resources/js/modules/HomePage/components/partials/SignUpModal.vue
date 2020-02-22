<template>
    <div>
        <modal v-if="showModal">
            <!-- HEADER -->
            <div
                slot="header"
                class="modal-header__container"
            >
                <h4>Sign Up</h4>
            </div>
            <!-- BODY -->
            <div
                slot="body"
                class="modal-body"
            >
                <el-form
                    ref="signup"
                    label-position="top"
                    hide-required-asterisk
                    :model="form"
                    :rules="rules"
                >
                    <div class="row">
                        <el-form-item
                            label="Account Type"
                            class="signup-label"
                            required
                        >
                            <div class="col-lg-4 d-inline">
                                <el-radio
                                    v-model="form.accountType"
                                    label="1"
                                >
                                    Applicant
                                </el-radio>
                            </div>
                            <div class="col-lg-4 d-inline">
                                <el-radio
                                    v-model="form.accountType"
                                    label="2"
                                >
                                    Investor
                                </el-radio>
                            </div>
                            <div class="col-lg-4 d-inline">
                                <el-radio
                                    v-model="form.accountType"
                                    label="3"
                                >
                                    ISDB Secretariat
                                </el-radio>
                            </div>
                            <div class="col-lg-4 d-inline">
                                <el-radio
                                    v-model="form.accountType"
                                    label="4"
                                >
                                    Govt Official
                                </el-radio>
                            </div>
                        </el-form-item>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <el-form-item
                                label="First Name"
                                prop="firstName"
                            >
                                <el-input v-model="form.firstName" />
                            </el-form-item>
                        </div>
                        <div class="col-lg-6">
                            <el-form-item
                                label="Last Name"
                                prop="lastName"
                            >
                                <el-input v-model="form.lastName" />
                            </el-form-item>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <el-form-item
                                label="Country"
                                prop="country"
                            >
                                <el-input v-model="form.country" />
                            </el-form-item>
                        </div>
                        <div class="col-lg-6">
                            <el-form-item
                                label="City"
                                prop="city"
                            >
                                <el-input v-model="form.city" />
                            </el-form-item>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <el-form-item
                                label="Address"
                                prop="address"
                            >
                                <el-input v-model="form.address" />
                            </el-form-item>
                        </div>
                    </div>
                    <h3>Contact Information</h3>
                    <div class="row">
                        <div class="col-lg-6">
                            <el-form-item
                                label="Email"
                                prop="email"
                            >
                                <el-input v-model="form.email" />
                            </el-form-item>
                        </div>
                        <div class="col-lg-6">
                            <el-form-item
                                label="Phone"
                                required
                            >
                                <el-input
                                    v-model="form.phone"
                                >
                                    <el-select
                                        slot="prepend"
                                        v-model="selectCountry"
                                        value-key="selectCountry"
                                    >
                                        <div
                                            slot="prefix"
                                            class="p-2 mt-1"
                                        >
                                            <flag
                                                :iso="selectCountry"
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
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <el-form-item
                                label="Password"
                                prop="password"
                            >
                                <el-input
                                    v-model="form.password"
                                    show-password
                                />
                            </el-form-item>
                        </div>
                        <div class="col-lg-12">
                            <el-checkbox v-model="form.termsAndConditions">
                                <span>I accept the terms & conditions</span>
                            </el-checkbox>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <el-checkbox v-model="form.newsLetter">
                                <span>I would like to subscribe to newsletter</span>
                            </el-checkbox>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-lg-4">
                            <button
                                v-loading="isLoggingIn"
                                type="button"
                                class="btn koraspond__primary-btn--round"
                                @click="formSubmit('signup')"
                            >
                                SIGNUP
                            </button>
                        </div>
                        <div class="col-lg-5 offset-lg-3 align-self-center">
                            Already have an account?
                            <el-link
                                type="primary"
                            >
                                Signin
                            </el-link>
                        </div>
                    </div>
                </el-form>
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
    props: {
        show: {
            type: Boolean,
            required: false
        }
    },
    data() {
        return {
            labelPosition: 'top',
            checked: true,
            isLoggingIn: false,
            csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            form: {
                accountType: '1',
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
            selectCountry: 'AE',
            rules: {
                firstName: [
                    { required: true, message: 'Please input First Name', trigger: 'blur' }
                ],
                lastName: [
                    { required: true, message: 'Please input Last Name', trigger: 'blur' }
                ],
                country: [
                    { required: true, message: 'Please input Country', trigger: 'blur' }
                ],
                city: [
                    { required: true, message: 'Please input City', trigger: 'blur' }
                ],
                address: [
                    { required: true, message: 'Please input Address', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: 'Please input password', trigger: 'blur' }
                ],
                email: [
                    { required: true, message: 'Please input Email Address', trigger: 'blur' },
                    { type: 'email', message: 'Please input correct Email Address', trigger: ['blur', 'change'] }
                ]
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
        formSubmit(name) {
            this.isLoggingIn = true
            let signupData = {
                first_name: this.form.firstName,
                last_name: this.form.lastName,
                user_type_id: this.form.accountType,
                email: this.form.email,
                password: this.form.password,
                country: this.form.country,
                city: this.form.city,
                address: this.form.address,
                phone: this.form.phone,
            }
            this.$refs[name].validate((valid) => {
                if (valid) {
                    axios.post('/signup', signupData).then(({data}) => {
                        this.isLoggingIn = false
                        location.href = '/home'
                    }).catch(() => {
                        this.$message.error('Something went wrong')
                        this.isLoggingIn = false
                    })
                } else {
                    console.log('error submit!!');
                    this.isLoggingIn = false
                    return false;
                }
            })
        }
    }
}
</script>

<style lang="sass">
    @import "~/../sass/modules/home-page/_all"
</style>