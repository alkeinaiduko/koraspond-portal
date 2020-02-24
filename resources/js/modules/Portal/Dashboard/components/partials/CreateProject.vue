<template>
    <div>
        <modal v-if="showModal">
            <!-- HEADER -->
            <div
                slot="header"
                class="modal-header__container"
            >
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
                                class="remove-float"
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
                                <el-input 
                                    v-model="form.proposalTags" 
                                    placeholder="Add relevant Tags to make it more visible to appropriate audience"
                                />
                            </el-form-item>
                        </div>
                    </div>
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
                </el-form>
            </div>
        </modal>
    </div>
</template>
<script>
    import Modal from "~/common/Modal"
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
                proposalTags: ''
            }
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
    methods: {
        save() {
            alert('saved!')
        }
    }
}
</script>