<template>
    <div class="final-register__container wrapper">
        <div class="final-register__content">
            <div class="final-register__greetings">
                <p>Hello <span>{{ fullName }},</span> Let's Complete your Registration Process</p>
            </div>
        </div>
        <el-steps :active="step" finish-status="success">
            <el-step title="Basic Information"></el-step>
            <el-step title="Arrival Details"></el-step>
            <el-step title="B2B/B2G Registration"></el-step>
        </el-steps>
        <basic-information-form v-if="step === 0" @next="next"/>
        <arrival-details-form v-if="step === 1" @next="next"/>
        <business-registration-form v-if="step === 2" @next="next"/>
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
                    <el-button>Save in Draft</el-button>
                    <el-button
                        class="primary--plain--reverse"
                        @click="save"
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

    export default {
        name: 'FinalRegistration',
        components: {
            BasicInformationForm,
            ArrivalDetailsForm,
            BusinessRegistrationForm
        },
        props: {
            fullName: '',
            user: Object
        },
        data() {
            return {
                step: 0,
                userForm: null
            }
        },
        mounted() {
            console.log(this.user);
            this.fullName = `${this.user.first_name} ${this.user.last_name}`
            this.userForm = this.user
        },
        methods: {
            next(objectData) {
                const date = new Date();
                const formattedDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
                if (this.step === 0) {
                    objectData.valid_until = formattedDate;
                    objectData.birth_date = formattedDate;
                    this.userForm.basic_info = JSON.stringify(objectData)
                } else if (this.step === 1) {
                    objectData.arrival_date = formattedDate;
                    objectData.arrival_time = null;
                    objectData.departure_date = formattedDate;
                    objectData.departure_time = null;
                    this.userForm.arrival_detail = JSON.stringify(objectData)
                }  else if (this.step === 2) {
                    this.userForm.business_registration = JSON.stringify(objectData)
                } else {
                    // this.step = 0;
                }
                this.step++
            },
            async save() {
                const formData = new FormData();
                formData.append('_method', 'PATCH')
                Object.keys(this.userForm).forEach(key => formData.append(key, this.userForm[key]));
                axios.post('/signup/' + this.user.id, formData)
                    .then(response => {
                        console.log(response)
                    })
            }
        }
    }
</script>

<style lang="sass">
    @import "~/../sass/modules/portal/dashboard/_all"
</style>