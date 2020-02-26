<template>
    <div>
        <div class="register__fields container">
            <label for="">1. Choose your profile to attend the meeting</label>
            <div class="row">
                <div
                    v-for="profile in profiles"
                    class="col-lg-2 d-inline BI"
                >
                    <el-radio
                        v-model="basicInformationForm.profile"
                        :label="profile"
                    >
                        {{ profile }}
                    </el-radio>
                </div>
            </div>
            <label for="">2. Which Institution are you coming from?</label>
            <div class="row">
                <div class="col-lg-12">
                    <el-input
                        v-model="basicInformationForm.institution"
                        placeholder="Ex: Oxford University"
                    />
                </div>
            </div>
            <label for="">3. What is your Name?</label>
            <div class="row">
                <div class="col-lg-12">
                    <el-input
                        v-model="basicInformationForm.name"
                        placeholder="First Name"
                    />
                </div>
            </div>
            <label for="">4. Mention your Family Name below</label>
            <div class="row">
                <div class="col-lg-12">
                    <el-input
                        v-model="basicInformationForm.family_name"
                        placeholder="Family Name"
                    />
                </div>
            </div>
            <label for="">5. What is your current Profession/Position?</label>
            <div class="row">
                <div class="col-lg-12">
                    <el-input
                        v-model="basicInformationForm.profession"
                        placeholder="Ex: Product Designer"
                    />
                </div>
            </div>
            <label for="">6. Please enter your Passport Number</label>
            <div class="row">
                <div class="col-lg-12">
                    <el-input
                        v-model="basicInformationForm.passport_number"
                        placeholder="Passport number"
                    />
                </div>
            </div>
            <label for="">7. Choose your Passport Type</label>
            <div class="row">
                <div
                    v-for="passportType of passportTypes"
                    class="col-lg-2 d-inline BI"
                >
                    <el-radio
                        v-model="basicInformationForm.passport_type"
                        :label="passportType"
                    >
                        {{ passportType }}
                    </el-radio>
                </div>
            </div>
            <label for="">8. What is your Nationality?</label>
            <div class="row">
                <div class="col-lg-12 BI">
                    <el-select
                        v-model="basicInformationForm.nationality"
                        placeholder="Ex: India"
                    >
                        <el-option
                            v-for="country in countries"
                            :key="country.alpha3Code"
                            :label="country.name"
                            :value="country.name"
                        />
                    </el-select>
                </div>
            </div>
            <label for="">9. What is the Place of Issue</label>
            <div class="row">
                <div class="col-lg-12 BI">
                    <el-select
                        v-model="basicInformationForm.issue_place"
                        placeholder="Ex: India"
                    >
                        <el-option
                            v-for="country in countries"
                            :key="country.alpha3Code"
                            :label="country.name"
                            :value="country.name"
                        />
                    </el-select>
                </div>
            </div>
            <label for="">10. Valid Until</label>
            <div class="row">
                <div class="col-lg-12 BI">
                    <el-date-picker
                        v-model="basicInformationForm.valid_until"
                        type="date"
                        placeholder="Choose a valid Date"
                        prefix-icon="''"
                    />
                </div>
            </div>
            <label for="">11. Choose your Place of Birth?</label>
            <div class="row">
                <div class="col-lg-12 BI">
                    <el-select
                        v-model="basicInformationForm.birth_place"
                        placeholder="Ex: India"
                    >
                        <el-option
                            v-for="country in countries"
                            :key="country.alpha3Code"
                            :label="country.name"
                            :value="country.name"
                        />
                    </el-select>
                </div>
            </div>
            <label for="">12. Pick your Date of Birth</label>
            <div class="row">
                <div class="col-lg-12 BI">
                    <el-date-picker
                        v-model="basicInformationForm.birth_date"
                        type="date"
                        placeholder="Choose a valid Date"
                        prefix-icon="''"
                    />
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
                <el-button>Save in Draft</el-button>
                <el-button
                    class="primary--plain--reverse"
                    @click="$emit('next', basicInformationForm)"
                >
                    Next
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import countries from '../countries'
    export default {
        data() {
            return {
                profiles: [
                    'Investor',
                    'Private Sector',
                    'Expert',
                    'Business Person',
                    'Minister',
                    'Ambassador',
                    'Public Sector',
                    'Organizer',
                    'Others',
                ],
                passportTypes: [
                    'Diplomatic',
                    'Regular',
                    'Official',
                    'Passport Card',
                ],
                countries: countries,
                basicInformationForm: {
                    profile: '',
                    institution: '',
                    name: '',
                    family_name: '',
                    profession: '',
                    passport_number: '',
                    passport_type: '',
                    nationality: '',
                    issue_place: '',
                    valid_until: '',
                    birth_place: '',
                    birth_date: '',
                },
                rules: []
            }
        }
    }
</script>