<template>
    <div>
        <vueper-slides
            class="no-shadow"
            :visible-slides="4"
            slide-multiple
            :gap="4"
            :slide-ratio="1 / 4"
            :dragging-distance="200"
            :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
        >
            <vueper-slide
                v-for="(person, key) in collaborators"
                :key="key"
            >
                <template v-slot:content>
                    <card
                        is-avatar
                        :person="person"
                        image="https://source.unsplash.com/user/erondu/100x100"
                    />
                </template>
            </vueper-slide>
        </vueper-slides>
    </div>
</template>

<script>
    import { VueperSlides, VueperSlide } from 'vueperslides'
    import Card from '~/common/Card'

    export default {
        components: {
            VueperSlides,
            VueperSlide,
            Card
        },
        data() {
            return {
                collaborators: [
                    {
                        name: 'Viakmaic Metrovik',
                        job: 'Investor at Techos'
                    },
                    {
                        name: 'Viakmaic Metrovik',
                        job: 'Investor at Techos'
                    },
                    {
                        name: 'Viakmaic Metrovik',
                        job: 'Investor at Techos'
                    },
                    {
                        name: 'Viakmaic Metrovik',
                        job: 'Investor at Techos'
                    },
                    {
                        name: 'Viakmaic Metrovik',
                        job: 'Investor at Techos'
                    },
                    {
                        name: 'Viakmaic Metrovik',
                        job: 'Investor at Techos'
                    },
                    {
                        name: 'Viakmaic Metrovik',
                        job: 'Investor at Techos'
                    },
                    {
                        name: 'Viakmaic Metrovik',
                        job: 'Investor at Techos'
                    },
                    {
                        name: 'Viakmaic Metrovik',
                        job: 'Investor at Techos'
                    },

                ]
            }
        }
    }
</script>

<style>

</style>