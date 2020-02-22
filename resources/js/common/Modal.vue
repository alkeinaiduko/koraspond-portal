<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <slot name="header">
                            <span>&times;</span>
                        </slot>
                    </div>
                    <slot name="body" />
                    <slot name="footer" />
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {

    }
</script>
<style lang="sass">
    @import "~/../sass/modules/home-page/_all"
</style>
