<template>
    <div>
        <el-dialog
            :visible.sync="showModal"
            width="30%"
            :show-close="false"
            center
        > 
            <span slot="title">Sign Up</span>
            <el-form>
                <el-row 
                    type="flex" 
                    justify="space-around"
                >
                    <el-form-item label="Account Type">
                        <el-col :span="24">
                            <el-radio-group v-model="radio">
                                <el-radio :label="3">
                                    Option A
                                </el-radio>
                                <el-radio :label="6">
                                    Option B
                                </el-radio>
                                <el-radio :label="9">
                                    Option C
                                </el-radio>
                                <el-radio :label="19">
                                    Option D
                                </el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-form-item>
                </el-row>
                <el-row 
                    type="flex" 
                    justify="space-around"
                >
                    <el-form-item label="First Name">
                        <el-col :span="24">
                            <el-input />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Last Name">
                        <el-col :span="24">
                            <el-input />
                        </el-col>
                    </el-form-item>
                </el-row>
                <el-row 
                    type="flex" 
                    justify="space-around"
                >
                    <el-form-item label="Country">
                        <el-col :span="24">
                            <el-input />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="City">
                        <el-col :span="24">
                            <el-input />
                        </el-col>
                    </el-form-item>
                </el-row>
                <el-row 
                    type="flex" 
                    justify="space-around"
                >
                    <el-form-item label="Address">
                        <el-input />
                    </el-form-item>
                </el-row>
                <h3>Contact Information</h3>
                <el-row 
                    type="flex" 
                    justify="space-around"
                >
                    <el-form-item label="Email">
                        <el-col :span="24">
                            <el-input />
                        </el-col>
                    </el-form-item>
                    <el-form-item label="Phone">
                        <el-col :span="24">
                            <el-input />
                        </el-col>
                    </el-form-item>
                </el-row>
            </el-form>
        </el-dialog>
    </div>
</template>
<script>
export default {
    props: {
        show: {
            type: Boolean,
            required: false
        }
    },
    data() {
        return {
            radio: 3
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
    }
}
</script>