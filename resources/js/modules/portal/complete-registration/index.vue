<template>
    <div class="final-register__container wrapper">
        <div class="final-register__content">
            <div class="final-register__greetings">
                <p>Hello <span>{{ fullName }},</span> Let's Complete your Registration Process</p>
            </div>
        </div>
        <el-steps
            :active="step"
            finish-status="success"
        >
            <el-step title="Basic Information" />
            <el-step title="Arrival Details" />
            <el-step title="B2B/B2G Registration" />
        </el-steps>
        <basic-information-form
            v-if="step === 0"
            :default-data="defaultBasicInformation"
            @draft="draft"
            @next="next"
        />
        <arrival-details-form
            v-if="step === 1"
            :default-data="defaultArrivalDetails"
            @draft="draft"
            @next="next"
        />
        <business-registration-form
            v-if="step === 2"
            :default-data="defaultBusinessRegistration"
            @draft="draft"
            @next="next"
        />
        <div v-if="step === 3">
            <div class="register__fields container">
                SAVE TO SUBMIT APPLICATION
            </div>
            <div class="register__footer">
                <el-button
                    @click="() => {}"
                >
                    Cancel
                </el-button>
                <div>
                    <el-button @click="draft">Save in Draft</el-button>
                    <el-button
                        class="primary--plain--reverse"
                        @click="save(1)"
                    >
                        Save
                    </el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    import BasicInformationForm from './components/BasicInformationForm'
    import ArrivalDetailsForm from './components/ArrivalDetailsForm'
    import BusinessRegistrationForm from './components/BusinessRegistrationForm'

    import { parseTime } from '~/utils'

    export default {
        name: 'FinalRegistration',
        components: {
            BasicInformationForm,
            ArrivalDetailsForm,
            BusinessRegistrationForm
        },
        props: {
            user: Object
        },
        data() {
            return {
                step: 0,
                userForm: null,
                fullName: '',
                defaultBasicInformation: null,
                defaultArrivalDetails: null,
                defaultBusinessRegistration: null,
            }
        },
        beforeMount() {
            if (this.user.drafted === 0) {
                if (!!this.user.drafted_step) {
                    this.step = parseInt(this.user.drafted_step)
                } else {
                    this.step = 0;
                }
            }
            this.defaultBasicInformation = this.user.basic_info;
            this.defaultArrivalDetails = this.user.arrival_detail;
            this.defaultBusinessRegistration = this.user.business_registration;
            console.log(this.user)
        },
        mounted() {
            this.fullName = `${this.user.first_name} ${this.user.last_name}`;
            this.userForm = this.user
        },
        methods: {
            basicInformationInput(data) {
                data.valid_until = !!data.valid_until ? parseTime(data.valid_until, '{y}-{m}-{d}') : null;
                data.birth_date = !!data.birth_date ? parseTime(data.birth_date, '{y}-{m}-{d}') : null;
                this.userForm.basic_info = JSON.stringify(data)
            },
            arrivalDetailsInput(data) {
                data.arrival_date = !!data.arrival_date ? parseTime(data.arrival_date, '{y}-{m}-{d}') : null;
                data.arrival_time = !!data.arrival_time ? parseTime(data.arrival_time, '{h}:{i}:{s}') : null;
                data.departure_date = !!data.departure_date ? parseTime(data.departure_date, '{y}-{m}-{d}') : null;
                data.departure_time = !!data.departure_time ? parseTime(data.departure_time, '{h}:{i}:{s}') : null;
                this.userForm.arrival_detail = JSON.stringify(data)
            },
            businessRegistrationInput(data) {
                this.userForm.business_registration = JSON.stringify(data)
            },
            inputStepHandler(inputData, isDrafted = false) {
                if (this.user.drafted === 0) {
                    // stringify default value
                    this.userForm.basic_info = '{}';
                    this.userForm.arrival_detail = '{}';
                    this.userForm.business_registration = '{}'
                }
                if (this.step === 0) {
                    this.basicInformationInput(inputData)
                } else if (this.step === 1) {
                    this.arrivalDetailsInput(inputData)
                }  else if (this.step === 2) {
                    this.businessRegistrationInput(inputData)
                } else {
                    // this.step = 0;
                }
            },
            next(objectData) {
                this.inputStepHandler(objectData);
                this.step++
            },
            draft(objectData) {
                this.inputStepHandler(objectData, true);
                this.save(0)
            },
            save(draftStatus) {
                this.userForm.drafted = draftStatus;
                if (!draftStatus) {
                    this.userForm.drafted_step = this.step
                }
                const formData = new FormData();
                formData.append('_method', 'PATCH')
                Object.keys(this.userForm).forEach(key => formData.append(key, this.userForm[key]));
                axios.post('/signup/' + this.user.id, formData)
                    .then(response => {
                        console.log(response)
                        window.location = '/'
                    })
            }
        }
    }
</script>

<style lang="sass">
    @import "~/../sass/modules/portal/dashboard/_all"
</style>