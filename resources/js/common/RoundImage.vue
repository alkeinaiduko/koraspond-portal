<template>
    <img
        class="image--round"
        :src="image"
        :width="width"
    >
</template>

<script>
    export default {
        props: {
            image: String,
            width: {
                type: String,
                default: '100%'
            }
        }
    }
</script>