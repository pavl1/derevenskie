<template>
    <span>
        <ul class="data" :class="{ edit: edit }">
            <li
                class="option"
                :class="{active : option.id <= current}"
                v-for="option in data"
                @mouseover="activate(option.id)">
            </li>
        </ul>
        <span v-html="data[current].name"></span>
    </span>
</template>

<script>
export default {
    props: { data: Array, name: String, edit: Boolean },
    data() {
        return {
            current: 0
        }
    },
    created() {
        window.Event.$on('option-selected', (payload) => {
            if (this.name == payload.source) return
            this.current = payload.id
        })
    },
    methods: {
        activate(id) {
            this.current = id
            window.Event.$emit('option-selected', {id: id, source: this.name})
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../assets/variables";

    .data { display: inline-block; visibility: hidden }
    .edit { visibility: visible }

    .option {
        vertical-align: middle;
        display: inline-block;
        overflow: hidden;
        width: 2.25rem; height: 2.25rem;
        background-color: scale-color($yellow, $alpha: -70%);
        transition: background-color .3s ease;

        &.active {
            background-color: $yellow;
        }
        & + .option {
            margin-left: 1rem;
        }
    }


</style>
