<template>
    <div class="card__container">
        <div
            v-if="isAvatar"
            class="card__content"
        >
            <div class="person__avatar">
                <img :src="image">
                <h3 class="person--name">
                    {{ person.name }}
                </h3>
                <p class="person--job">
                    {{ person.job }}
                </p>
            </div>
        </div>
        <div
            v-else-if="isBackground"
            class="card__img-bg"
        />
    </div>
</template>

<script>
    export default {
        props: {
            isBackground: {
                type: Boolean,
                default: false
            },
            isAvatar: {
                type: Boolean,
                default: false
            },
            image: String,
            person: Object
        }
    }
</script>

<style>

</style>