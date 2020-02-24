<template>
    <div>
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
                <el-button class="el-button">
                    Not Interested
                </el-button>
                <el-button class="el-button primary--plain--reverse">
                    Yes I'm in
                </el-button>
            </div>
        </div>
        <label for="">1. Upload your Short resume</label>
        <div class="row">
            <div class="col-lg-12 BR">
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
        <label for="">2. Upload your Passport copy</label>
        <div class="row">
            <div class="col-lg-12 BR">
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
        <label for="">3. Upload your Photo</label>
        <div class="row">
            <div class="col-lg-12 BR">
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
            form: {
                resume: '',
                passport: '',
                photo: ''
            }
        }
    },
}
</script>