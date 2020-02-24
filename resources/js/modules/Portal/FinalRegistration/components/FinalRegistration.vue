<template>
    <div class="final-register__container wrapper">
        <div class="final-register__content">
            <div class="final-register__greetings">
                <p>Hello <span>{{ fullName }},</span> Let's Complete your Registration Process</p>
            </div>
            <div class="final-register__progress">
                <img
                    width="100%"
                    src="/images/register-checked.png"
                    alt="register-unchecked"
                >
                <img
                    width="100%"
                    src="/images/register-separator.png"
                    alt="register-separator"
                >
                <img
                    width="100%"
                    src="/images/register-checked.png"
                    alt="register-unchecked"
                >
                <img
                    width="100%"
                    src="/images/register-separator.png"
                    alt="register-separator"
                >
                <img
                    width="100%"
                    src="/images/register-checked.png"
                    alt="register-unchecked"
                >
            </div>
            <div class="final-register__label">
                <h6>Basic Information</h6>
                <h6>Arrival Details</h6>
                <h6>B2B/B2G Registration</h6>
            </div>
        </div>
        <div class="register__fields container">
            <basic-information v-if="step == 1" />
            <arrival-detail v-if="step == 2" />
            <b-registration v-if="step == 3" />
            <b-registration-final v-if="step == 4" />
        </div>
        <div class="register__footer">
            <el-button
                @click="cancel"
            >
                Cancel
            </el-button>
            <div>
                <el-button>Save in Draft</el-button>
                <el-button
                    v-if="step != 4"
                    class="primary--plain--reverse"
                    @click="next()"
                >
                    Next
                </el-button>
                <el-button
                    v-if="step == 4"
                    class="primary--plain--reverse"
                >
                    Save
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import BasicInformation from './partials/BasicInformation'
    import ArrivalDetail from './partials/ArrivalDetails'
    import BRegistration from './partials/BRegistration'
    import BRegistrationFinal from './partials/BRegistrationFinal'
    export default {
        name: 'FinalRegistration',
        components: {
            BasicInformation,
            ArrivalDetail,
            BRegistration,
            BRegistrationFinal
        },
        props: {
            user: Object
        },
        data() {
            return {
                fullName: '',
                radio: '1',
                profileSettings: [
                    { name: 'Investor', value: '1' },
                    { name: 'Private Sector', value: '2' },
                    { name: 'Expert', value: '3' },
                    { name: 'Business Person', value: '4' },
                    { name: 'Minister', value: '5' },
                    { name: 'Ambassador', value: '6' },
                    { name: 'Public Sector', value: '7' },
                    { name: 'Organiser', value: '8' },
                    { name: 'Other', value: '9' },
                ],
                passportTypes: [
                    { name: 'Diplomatic', value: '1'},
                    { name: 'Regular', value: '1'},
                    { name: 'Official', value: '1'},
                    { name: 'Passport Card', value: '1'},
                ],
                options: [{
                    value: 'Option1',
                    label: 'Option1'
                }, {
                    value: 'Option2',
                    label: 'Option2'
                }, {
                    value: 'Option3',
                    label: 'Option3'
                }, {
                    value: 'Option4',
                    label: 'Option4'
                }, {
                    value: 'Option5',
                    label: 'Option5'
                }],
                step: 1
            }
        },
        mounted() {
            this.fullName = `${this.user.first_name} ${this.user.last_name}`
        },
        methods: {
            next() {
                this.step++
            },
            cancel() {
                if(this.step > 1) {
                    this.step--
                }
            }
        }
    }
</script>

<style lang="sass">
    @import "~/../sass/modules/portal/dashboard/_all"
</style>