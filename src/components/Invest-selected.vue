<template>
    <span>{{ data[source][id].selected }}</span>
</template>

<script>
export default {
    props: { data: Object, variation: String },
    data() {
        return {
            id: 0,
            source: 'money'
        }
    },
    created() {
        window.Event.$on('option-selected', (payload) => {
            this.id = payload.id
            this.source = payload.source
        })
        window.Event.$on('variation-selected', (payload) => {
            this.source = payload.variation
        })
    },
}
</script>

<style></style>
