<template>
    <span>
        {{ data[current].name }}
    </span>
</template>

<script>
export default {
    props: { data: Array, name: String },
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

<style></style>
