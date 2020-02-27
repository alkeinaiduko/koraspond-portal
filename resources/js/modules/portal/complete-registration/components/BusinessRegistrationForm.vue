<template>
    <div>
        <div class="register__fields container">
            <div v-if="!forceCloseRegistrationPrompt">
                <div class="row">
                    <div class="col-lg-12 register__announcement">
                        <h2>Registration for B2B and B2G is Open now</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-9 offset-lg-2 register__announcement">
                        <h5>
                            You can register your Interest for this year's B2B using the form below.
                            Registration is free. So, beat the crowd and register now! For queries contact here
                        </h5>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 register__announcement">
                        <el-button
                            class="el-button"
                            @click="handleNotInterested"
                        >
                            Not Interested
                        </el-button>
                        <el-button
                            class="el-button primary--plain--reverse"
                            @click="handleInterested"
                        >
                            Yes I'm in
                        </el-button>
                    </div>
                </div>
            </div>
            <!--IF INTERESETED IN BUSINESS REGISTRATION SHOW ADDITIONAL FORM-->
            <div v-if="isWantToRegister">
                <div class="row BRF">
                    <div class="col-lg-12">
                        <label for="">1. Please choose an option to proceed</label>
                    </div>
                    <div class="col-lg-3">
                        <el-radio
                            v-model="businessRegistrationForm.option"
                            label="B2B"
                        >
                            B2B (Business to Business)
                        </el-radio>
                    </div>
                    <div class="col-lg-3">
                        <el-radio
                            v-model="businessRegistrationForm.option"
                            label="B2G"
                        >
                            B2G (Business to Government)
                        </el-radio>
                    </div>
                </div>
                <label for="">2. Choose your Place</label>
                <div class="row">
                    <div class="col-lg-12">
                        <el-input v-model="businessRegistrationForm.place" />
                    </div>
                </div>
                <label for="">3. What is your group of Interest?</label>
                <div class="row BRF">
                    <div class="col-lg-3">
                        <el-radio
                            v-model="businessRegistrationForm.group_interest"
                            label="1"
                        >
                            Partner/Joint Venture
                        </el-radio>
                    </div>
                    <div class="col-lg-3">
                        <el-radio
                            v-model="businessRegistrationForm.group_interest"
                            label="2"
                        >
                            Project Promoter
                        </el-radio>
                    </div>
                    <div class="col-lg-3">
                        <el-radio
                            v-model="businessRegistrationForm.group_interest"
                            label="3"
                        >
                            Potential Investors
                        </el-radio>
                    </div>
                    <div class="col-lg-3">
                        <el-radio
                            v-model="businessRegistrationForm.group_interest"
                            label="4"
                        >
                            Funding Institutions
                        </el-radio>
                    </div>
                </div>
                <label for="">4. Specification of funding Institutions</label>
                <div class="row">
                    <div class="col-lg-12 BRF">
                        <el-select
                            v-model="businessRegistrationForm.funding_institution"
                            placeholder="Select your value"
                        >
                            <el-option
                                v-for="intitution in fundingInstitutions"
                                :key="intitution"
                                :label="intitution"
                                :value="intitution"
                            />
                        </el-select>
                    </div>
                </div>
                <label for="">5. Area of Interest</label>
                <div class="row">
                    <div class="col-lg-12 BRF">
                        <el-select
                            v-model="businessRegistrationForm.area_interest"
                            placeholder="Select your area of interest"
                        >
                            <el-option
                                v-for="area in areaOfInterest"
                                :key="area"
                                :label="area"
                                :value="area"
                            />
                        </el-select>
                    </div>
                </div>
                <label for="">6. Summary of the request/ Counterpart to meet</label>
                <div class="row">
                    <div class="col-lg-12">
                        <el-input
                            v-model="businessRegistrationForm.summary"
                            type="textarea"
                        />
                    </div>
                </div>
                <!--END EXTRA FORM-->
            </div>
            <label for="">{{ isWantToRegister? '7' : '1' }}. Upload your Short resume</label>
            <div class="row">
                <div class="col-lg-12 BR">
                    <el-upload
                        v-model="businessRegistrationForm.resume"
                        action="#"
                        :auto-upload="false"
                    >
                        <div slot="default">
                            <el-input
                                readonly
                                placeholder="choose a valid file pdf/jpeg/png/doc/ppt"
                                suffix-icon="el-icon-folder"
                            />
                        </div>
                    </el-upload>
                </div>
            </div>
            <label for="">{{ isWantToRegister? '8' : '2' }}. Upload your Passport copy</label>
            <div class="row">
                <div class="col-lg-12 BR">
                    <el-upload
                        v-model="businessRegistrationForm.passport"
                        action="#"
                        :auto-upload="false"
                    >
                        <div slot="default">
                            <el-input
                                readonly
                                placeholder="choose a valid file pdf/jpeg/png/doc/ppt"
                                suffix-icon="el-icon-folder"
                            />
                        </div>
                    </el-upload>
                </div>
            </div>
            <label for="">{{ isWantToRegister? '9' : '3' }}. Upload your Photo</label>
            <div class="row">
                <div class="col-lg-12 BR">
                    <el-upload
                        v-model="businessRegistrationForm.photo"
                        action="#"
                        :auto-upload="false"
                    >
                        <div slot="default">
                            <el-input
                                readonly
                                placeholder="choose a valid file pdf/jpeg/png/doc/ppt"
                                suffix-icon="el-icon-folder"
                            />
                        </div>
                    </el-upload>
                </div>
            </div>
        </div>
        <div class="register__footer">
            <el-button
                @click="() => {}"
            >
                Cancel
            </el-button>
            <div>
                <el-button @click="$emit('draft', businessRegistrationForm)">
                    Save in Draft
                </el-button>
                <el-button
                    class="primary--plain--reverse"
                    @click="$emit('next', businessRegistrationForm)"
                >
                    Next
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            defaultData: Object
        },
        data() {
            return {
                forceCloseRegistrationPrompt: false,
                isWantToRegister: false,
                fundingInstitutions: [
                    'Institute 1',
                    'Institute 2',
                    'Institute 3',
                    'Institute 4',
                    'Institute 5',
                ],
                areaOfInterest: [
                    'areaOfInterest 1',
                    'areaOfInterest 2',
                    'areaOfInterest 3',
                    'areaOfInterest 4',
                    'areaOfInterest 5',
                ],
                businessRegistrationForm: {
                    option: '',
                    place: '',
                    group_interest: '',
                    funding_institution: '',
                    area_interest: '',
                    summary: '',
                    resume: '',
                    passport: '',
                    photo: '',
                },
                rules: []
            }
        },
        beforeMount() {
            if (!!this.defaultData) {
                this.businessRegistrationForm = this.defaultData;
            }
        },
        methods: {
            handleNotInterested() {
                this.isWantToRegister = false;
                this.forceCloseRegistrationPrompt = true
            },
            handleInterested() {
                this.isWantToRegister = true;
                this.forceCloseRegistrationPrompt = true
            }
        }
    }
</script>