<template>
    <span v-html="data[current].name">
    </span>
</template>

<script>
export default {
    props: { data: Array, name: String, list: Boolean },
    data() {
        return {
            current: 0
        }
    },
    created() {
        window.Event.$on('option-selected', (payload) => {
            this.current = payload.id
        })
    }
}
</script>

<style scoped>
    .result-ul {margin-left: 2rem }
    .result-li {list-style: square }
</style>
