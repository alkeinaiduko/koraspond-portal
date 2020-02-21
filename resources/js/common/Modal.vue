<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <slot name="header" />
                    <slot name="body" />
                    <slot name="footer" />
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props : {
        show: {
            type: Boolean
        }
    },
    data(){
        return{
            form: {
                username: "",
                password: ""
            }
        }
    },
    methods : {
        close(){
            this.$emit('close');
        }
    }
}
</script>

<style lang="sass">
    @import "~/../sass/modules/home-page/_all"
</style>
