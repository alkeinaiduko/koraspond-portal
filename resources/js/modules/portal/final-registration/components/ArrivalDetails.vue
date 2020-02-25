<template>
    <div>
        <label for="">1. Please enter your Contact Number</label>
        <div class="row">
            <div class="col-lg-12">
                <el-input
                    v-model="form.contactNumber"
                >
                    <el-select
                        slot="prepend"
                        v-model="form.selectCountry"
                        value-key="form.selectCountry"
                    >
                        <div
                            slot="prefix"
                            class="p-2 mt-1"
                        >
                            <flag
                                :iso="form.selectCountry"
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
            </div>
        </div>
        <label for="">2. What is your e-mail address?</label>
        <div class="row">
            <div class="col-lg-12">
                <el-input 
                    v-model="form.email"
                    placeholder="Ex: abcdef2860@xxx.com" 
                />
            </div>
        </div>
        <label for="">3. Choose your Country of Residence</label>
        <div class="row">
            <div class="col-lg-12 AD">
                <el-select 
                    v-model="form.countryOfResidence"
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
        <label for="">4. Choose your Country of Departure</label>
        <div class="row">
            <div class="col-lg-12 AD">
                <el-select 
                    v-model="form.countryOfDeparture"
                    placeholder="Ex: Netherlands"
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
        <label for="">5. Select your expected arrival Date</label>
        <div class="row">
            <div class="col-lg-12 AD">
                <el-date-picker
                    v-model="form.arrivalDate"
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
                    v-model="form.arrivalTime"
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
                    v-model="form.arrivalFlightNumber"
                    placeholder="Ex: BA 2490" 
                />
            </div>
        </div>
        <label for="">8. Select your expected Departure Date</label>
        <div class="row">
            <div class="col-lg-12 AD">
                <el-date-picker
                    v-model="form.departureDate"
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
                    v-model="form.departureTime"
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
                    v-model="form.departureFlightNumber"
                    placeholder="Ex: BA 2490" 
                />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
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
            country: '',
            form: {
                contactNumber: '',
                selectCountry: 'AE',
                email: '',
                countryOfResidence: '',
                countryOfDeparture: '',
                arrivalDate: '',
                arrivalTime: '',
                arrivalFlightNumber: '',
                departureDate: '',
                departureTime: '',
                departureFlightNumber: ''
            },
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
        }
    },
    
}
</script>