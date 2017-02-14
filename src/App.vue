<template>
    <div id="app" :class="fixed">
        <navigation v-on:lock="lock" v-on:release="release" />
        <transition name="view" mode="out-in">
            <router-view />
        </transition>
        <basement />
    </div>
</template>

<script>
import Navigation from './components/Navigation'
import Basement from './components/Basement'

export default {
    name: 'app',
    components: { Navigation, Basement },
    data() {
        return {
            fixed: ''
        }
    },
    methods: {
        lock() { this.fixed = 'fixed' },
        release() { this.fixed = '' }
    }
}
</script>

<style lang="scss">
    @import "~bourbon-neat/app/assets/stylesheets/neat";
    @import "./assets/variables";
    @import "./assets/reset";
    @import "./assets/scaffolding";

    .fixed {
        padding-top: $navigation-height;
    }

    .view-enter-active, .view-leave-active {
        transition: opacity .2s ease, transform .2s ease
    }
    .view-enter, .view-leave-to {
        opacity: 0
    }
    .view-leave-to {
        transform: translateX(-10%);
    }
    .view-enter {
        transform: translateX(10%);
    }


</style>
