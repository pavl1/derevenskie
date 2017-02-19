<template>
    <div id="app" :class="lockScroll">
        <navigation :locked="lockNavigation" />
        <transition name="view" mode="out-in">
            <router-view :locked="lockSidebar" />
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
            lockScroll: '',
            lockNavigation: '',
            lockSidebar: ''
        }
    },
    mounted() { window.addEventListener('scroll', this.lock) },
    methods: {
        lock() {
            switch (true) {
                case window.scrollY > 174:
                    this.lockScroll = 'locked-scroll'
                    this.lockNavigation = 'locked-navigation locked-text'
                    this.lockSidebar = 'locked-sidebar'
                    break;
                case window.scrollY > 150:
                    this.lockScroll = 'locked-scroll'
                    this.lockNavigation = 'locked-navigation locked-text'
                    this.lockSidebar = ''
                    break;
                case window.scrollY > 113:
                    this.lockScroll = ''
                    this.lockNavigation = 'locked-text'
                    this.lockSidebar = ''
                    break;
                default:
                    this.lockScroll = ''
                    this.lockNavigation = ''
                    this.lockSidebar = ''
                    break;
            }
        }
    }
}
</script>

<style lang="scss">
    @import "~bourbon-neat/app/assets/stylesheets/neat";
    @import "./assets/variables";
    @import "./assets/reset";
    @import "./assets/scaffolding";
    @import "./assets/animations";

    .locked-scroll {
        padding-top: $navigation-height;
    }

</style>
