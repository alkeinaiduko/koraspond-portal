<template>
    <transition name="modal">
        <div
            class="modal-mask"
            :class="customClass"
        >
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal__header">
                        <!-- <button @click="$emit('close')">
                            close
                        </button> -->
                        <slot name="header">
                            default header
                        </slot>
                    </div>

                    <div class="modal__body">
                        <slot name="body">
                            default body
                        </slot>
                    </div>

                    <div class="modal__footer">
                        <slot name="footer">
                            default footer
                            <button class="modal-default-button">
                                OK
                            </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        props: {
            customClass: String
        }
    }
</script>
<style lang="sass">
    @import "~/../sass/modules/home-page/_all"
</style>

