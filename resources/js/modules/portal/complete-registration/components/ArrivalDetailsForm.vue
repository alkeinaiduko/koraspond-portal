<template>
    <div>
        <div class="register__fields container">
            <label for="">1. Please enter your Contact Number</label>
            <div class="row">
                <div class="col-lg-12">
                    <el-input
                        v-model="arrivalDetailsForm.contact_number"
                    >
                        <el-select
                            slot="prepend"
                            v-model="alpha2Code"
                        >
                            <div
                                slot="prefix"
                                class="p-2 mt-1"
                            >
                                <flag
                                    :iso="alpha2Code"
                                />
                            </div>
                            <el-option
                                v-for="(flag,index) in countries"
                                :key="index"
                                :value="flag.alpha2Code"
                            >
                                <flag :iso="flag.alpha2Code" />
                            </el-option>
                        </el-select>
                    </el-input>
                </div>
            </div>
            <label for="">2. What is your e-mail address?</label>
            <div class="row">
                <div class="col-lg-12">
                    <el-input
                        v-model="arrivalDetailsForm.email_address"
                        placeholder="Ex: abcdef2860@xxx.com"
                    />
                </div>
            </div>
            <label for="">3. Choose your Country of Residence</label>
            <div class="row">
                <div class="col-lg-12 AD">
                    <el-select
                        v-model="arrivalDetailsForm.country_residence"
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
            <label for="">4. Choose your Country of Departure</label>
            <div class="row">
                <div class="col-lg-12 AD">
                    <el-select
                        v-model="arrivalDetailsForm.country_departure"
                        placeholder="Ex: Netherlands"
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
            <label for="">5. Select your expected arrival Date</label>
            <div class="row">
                <div class="col-lg-12 AD">
                    <el-date-picker
                        v-model="arrivalDetailsForm.arrival_date"
                        type="date"
                        placeholder="Choose a valid Date"
                        prefix-icon="''"
                    />
                </div>
            </div>
            <label for="">6. Please mention the arrival time of the flight</label>
            <div class="row">
                <div class="col-lg-12 AD">
                    <el-date-picker
                        v-model="arrivalDetailsForm.arrival_time"
                        type="datetime"
                        placeholder="Choose a valid time"
                        prefix-icon="''"
                    />
                </div>
            </div>
            <label for="">7. Flight number - Arrival</label>
            <div class="row">
                <div class="col-lg-12">
                    <el-input
                        v-model="arrivalDetailsForm.arrival_flight_number"
                        placeholder="Ex: BA 2490"
                    />
                </div>
            </div>
            <label for="">8. Select your expected Departure Date</label>
            <div class="row">
                <div class="col-lg-12 AD">
                    <el-date-picker
                        v-model="arrivalDetailsForm.departure_date"
                        type="date"
                        placeholder="Choose a valid Date"
                        prefix-icon="''"
                    />
                </div>
            </div>
            <label for="">9. Please mention the Departure time of the flight</label>
            <div class="row">
                <div class="col-lg-12 AD">
                    <el-date-picker
                        v-model="arrivalDetailsForm.departure_time"
                        type="datetime"
                        placeholder="Choose a valid time"
                        prefix-icon="''"
                    />
                </div>
            </div>
            <label for="">10. Flight Number - Departure</label>
            <div class="row">
                <div class="col-lg-12">
                    <el-input
                        v-model="arrivalDetailsForm.departure_flight_number"
                        placeholder="Ex: BA 2490"
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
                <el-button @click="$emit('draft', arrivalDetailsForm)">Save in Draft</el-button>
                <el-button
                    class="primary--plain--reverse"
                    @click="$emit('next', arrivalDetailsForm)"
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
        props: {
            defaultData: Object
        },
        data() {
            return {
                countries: countries,
                alpha2Code: 'AF',
                arrivalDetailsForm: {
                    contact_number: '',
                    email_address: '',
                    country_residence: '',
                    country_departure: '',
                    arrival_date: '',
                    arrival_time: '',
                    arrival_flight_number: '',
                    departure_date: '',
                    departure_time: '',
                    departure_flight_number: '',
                },
                rules: []
            }
        },
        beforeMount() {
            if (!!this.defaultData) {
                this.arrivalDetailsForm = {...this.defaultData, ...this.arrivalDetailsForm};
            }
        }
    }
</script>