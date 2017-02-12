<template lang="html">
    <li :class="name">
        <router-link to="link" :target="target">
            <img :class="name" :src="image" />
            <div class="text" :class="name">
                <slot name="title"></slot>
                <slot name="description"></slot>
            </div>
        </router-link>
    </li>
</template>

<script>
    import Icon from './Icon'

    export default {
        props: { name: String, index: Number, checked: Boolean, link: String, target: String, image: String },
        components: { Icon }
    }
</script>

<style lang="scss" scoped>


</style>
