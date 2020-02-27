<template>
    <div>
        <modal 
            v-if="showModal"
            custom-class="create-project-modal"
        >
            <!-- HEADER -->
            <div
                slot="header"
                class="modal-header__container custom-modal-header"
            >
                <i
                    class="el-icon-close"
                    @click="$emit('close')"
                />
                <h4>Create New Proposal</h4>
            </div>
            <!-- BODY -->
            <div
                slot="body"
                class="modal-body"
            >
                <el-form
                    ref="createproject"
                    hide-required-asterisk
                    :model="form"
                >
                    <div class="row">
                        <div class="col-lg-12">
                            <el-form-item
                                label="Title of your Proposal"
                            >
                                <el-input 
                                    v-model="form.title"
                                    placeholder="EX: Artificial Intelligence for modern lifestyle"
                                />
                            </el-form-item>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <el-form-item
                                label="Proposal Description"
                            >
                                <el-input 
                                    v-model="form.projectDescription"
                                    placeholder="Add a short description of your project without exceeding 150 characters"
                                    type="textarea"
                                    maxlength="150"
                                    show-word-limit
                                />
                            </el-form-item>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <el-form-item
                                label="Upload the Proposal Document"
                            >
                                <el-upload
                                    v-model="form.proposalDocument"
                                    action="#"
                                    :auto-upload="false"
                                >
                                    <div slot="default">
                                        <el-button 
                                            :round="true"
                                        >
                                            Upload <i class="el-icon-upload el-icon-right" />
                                        </el-button>
                                    </div>
                                </el-upload>
                            </el-form-item>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <el-form-item
                                label="Choose the domain of your Project"
                            >
                                <el-input
                                    v-model="form.projectDomain" 
                                    placeholder="Your project will be exposed to officials and experts from the domain you chose"
                                />
                            </el-form-item>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <el-form-item
                                label="Add Tags to your proposal"
                            >
                                <el-select 
                                    v-model="form.proposalTags" 
                                    multiple 
                                    placeholder="Select"
                                    class="tags"
                                >
                                    <el-option
                                        v-for="item in tags"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id" 
                                    />
                                </el-select>
                            </el-form-item>
                        </div>
                    </div>
                </el-form>
            </div>
            <div slot="footer">
                <div class="register__footer">
                    <el-button>
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
        </modal>
    </div>
</template>
<script>
    import Modal from "~/common/Modal"
import Axios from 'axios'
export default {
    components: {
        Modal
    },
    props: {
        show: {
            type: Boolean,
            required: false
        }
    },
    data() {
        return {
            form: {
                title: '',
                projectDescription: '',
                proposalDocument: '',
                projectDomain: '',
                proposalTags: [],
            },
            tags: []
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
    async created(){
        let { data } = await axios.get('/tags')
        this.tags = data.data
    },
    methods: {
        async save() {
            try {
                let params = {
                    title: this.form.title,
                    description: this.form.projectDescription,
                    file: this.form.proposalDocument,
                    domain: this.form.projectDomain,
                    tags: this.form.proposalTags.toString(),
                    status: "pending"
                }

                let res = await axios.post('/projects', params)
                this.$emit('closeModal')
                location.replace('/home')
            }catch(error){
                console.log(error)
            }
        },
    }
}
</script>