<template>
    <div>
        <label for="">1. Choose your profile to attend the meeting</label>
        <div class="row">
            <div 
                v-for="(profile,index) in profileSettings"
                :key="index"
                class="col-lg-2 d-inline BI"
            >
                <el-radio 
                    v-model="form.profileType" 
                    :label="profile.value"
                >
                    {{ profile.name }}
                </el-radio>
            </div>
        </div>
        <label for="">2. Which Institution are you coming from?</label>
        <div class="row">
            <div class="col-lg-12">
                <el-input 
                    v-model="form.institution"
                    placeholder="Ex: Oxford University"
                />
            </div>
        </div>
        <label for="">3. What is your Name?</label>
        <div class="row">
            <div class="col-lg-6">
                <el-input 
                    v-model="form.firstName"
                    placeholder="First Name"
                />
            </div>
            <div class="col-lg-6">
                <el-input 
                    v-model="form.LastName"
                    placeholder="Last Name"
                />
            </div>
        </div>
        <label for="">4. Mention your Family Name below</label>
        <div class="row">
            <div class="col-lg-12">
                <el-input 
                    v-model="form.familyName"
                    placeholder="Family Name"
                />
            </div>
        </div>
        <label for="">5. What is your current Profession/Position?</label>
        <div class="row">
            <div class="col-lg-12">
                <el-input 
                    v-model="form.profession"
                    placeholder="Ex: Product Designer"
                />
            </div>
        </div>
        <label for="">6. Please enter your Passport Number</label>
        <div class="row">
            <div class="col-lg-12">
                <el-input 
                    v-model="form.passportNumber"
                    placeholder="Passport number"
                />
            </div>
        </div>
        <label for="">7. Choose your Passport Type</label>
        <div class="row">
            <div 
                v-for="(passport,index) in passportTypes"
                :key="index"
                class="col-lg-2 d-inline BI"
            >
                <el-radio 
                    v-model="form.passportType" 
                    :label="passport.value"
                >
                    {{ passport.name }}
                </el-radio>
            </div>
        </div>
        <label for="">8. What is your Nationality?</label>
        <div class="row">
            <div class="col-lg-12 BI">
                <el-select 
                    v-model="form.nationality"
                    placeholder="Ex: India"
                >
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
            </div>
        </div>
        <label for="">9. What is the Place of Issue</label>
        <div class="row">
            <div class="col-lg-12 BI">
                <el-select 
                    v-model="form.placeOfIssue"
                    placeholder="Ex: India"
                >
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
            </div>
        </div>
        <label for="">10. Valid Until</label>
        <div class="row">
            <div class="col-lg-12 BI">
                <el-date-picker
                    v-model="form.validUntil"
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
                    v-model="form.placeOfBirth"
                    placeholder="Ex: India"
                >
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
            </div>
        </div>
        <label for="">12. Pick your Date of Birth</label>
        <div class="row">
            <div class="col-lg-12 BI">
                <el-date-picker
                    v-model="form.dateOfbirth"
                    type="date"
                    placeholder="Choose a valid Date"
                    prefix-icon="''"
                />
            </div>
        </div>
    </div>
</template>
<script>
import countries from '~/common/country/country.json'
export default {
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
                { name: 'Regular', value: '2'},
                { name: 'Official', value: '3'},
                { name: 'Passport Card', value: '4'},
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
            value: '',
            value1: '',
            form: {
                //ordered based on question
                profileType: '1',
                institution: '',
                firstName: '',
                lastName: '',
                familyName: '',
                profession: '',
                passportNumber: '',
                passportType: '1',
                nationality: '',
                placeOfIssue: '',
                validUntil: '',
                placeOfBirth: '',
                dateOfBirth: ''

            }
        }
    },
    mounted() {
    }
}
</script>