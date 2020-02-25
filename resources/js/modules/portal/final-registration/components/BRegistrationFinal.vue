<template>
    <div>
        <div class="row BRF">
            <div class="col-lg-12">
                <label for="">1. Please choose an option to proceed</label>
            </div>
            <div class="col-lg-3">
                <el-radio
                    v-model="form.accountType"
                    label="1"
                >
                    B2B (Business to Business)
                </el-radio>
            </div>
            <div class="col-lg-3">
                <el-radio
                    v-model="form.accountType"
                    label="2"
                >
                    B2G (Business to Government)
                </el-radio>
            </div>
        </div>
        <label for="">2. Choose your Place</label>
        <div class="row">
            <div class="col-lg-12">
                <el-input v-model="form.place" />
            </div>
        </div>
        <label for="">3. What is your group of Interest?</label>
        <div class="row BRF">
            <div class="col-lg-3">
                <el-radio
                    v-model="form.groupOfInterest"
                    label="1"
                >
                    Partner/Joint Venture
                </el-radio>
            </div>
            <div class="col-lg-3">
                <el-radio
                    v-model="form.groupOfInterest"
                    label="2"
                >
                    Project Promoter
                </el-radio>
            </div>
            <div class="col-lg-3">
                <el-radio
                    v-model="form.groupOfInterest"
                    label="3"
                >
                    Potential Investors
                </el-radio>
            </div>
            <div class="col-lg-3">
                <el-radio
                    v-model="form.groupOfInterest"
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
                    v-model="form.funding"
                    placeholder="Select your value"
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
        <label for="">5. Area of Interest</label>
        <div class="row">
            <div class="col-lg-12 BRF">
                <el-select 
                    v-model="form.areaOfInterest"
                    placeholder="Select your area of interest"
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
        <label for="">6. Summary of the request/ Counterpart to meet</label>
        <div class="row">
            <div class="col-lg-12">
                <el-input 
                    v-model="form.summary"
                    type="textarea"
                />
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 BRF">
                <label for="">7. Upload your Short resume</label>
                <el-upload
                    v-model="form.resume" 
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
        <div class="row">
            <div class="col-lg-12 BRF">
                <label for="">8. Upload your Passport copy</label>
                <el-upload
                    v-model="form.passport" 
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
        <div class="row">
            <div class="col-lg-12 BRF">
                <label for="">9. Upload your Photo</label>
                <el-upload
                    v-model="form.photo" 
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
</template>
<script>
export default {
    data() {
        return {
            accountType: '2',
            form: {
                accountType: '1',
                place: '',
                groupOfInterest: '1',
                funding: '',
                areaOfInterest: '',
                summary: '',
                resume: '',
                passport: '',
                photo: ''
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