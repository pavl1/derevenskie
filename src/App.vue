<template>
    <div id="app">
        <navigation />
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
    components: { Navigation, Basement }
}
</script>

<style lang="scss">
    @import "~bourbon-neat/app/assets/stylesheets/neat";
    @import "./assets/variables";
    @import "./assets/reset";
    @import "./assets/scaffolding";

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
