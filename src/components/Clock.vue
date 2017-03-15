<template lang="html">
    <span class="clock">
        <transition name="fade">
            <icon v-if="loading" name="loading" class="animate-spin clock-loader"/>
            <span v-else class="clock-value">
                {{ hours }}:{{ minutes }}:{{ seconds }}
            </span>
        </transition>
    </span>
</template>

<script>
    import Icon from './Icon'
    export default {
        components: { Icon },
        data() {
            return {
                hours: '',
                minutes: '',
                seconds: '',
                loading: true
            }
        },
        mounted() {
            this.time()
            setTimeout( () => {
                this.loading = false
            }, 1000)
        },
        methods: {
            time() {
                setTimeout( () => {
                    let d = new Date(Date.now() + 480*60*1000)
                    this.hours = ( '0' + d.getUTCHours() ).slice(-2)
                    this.minutes = ( '0' + d.getUTCMinutes() ).slice(-2)
                    this.seconds = ( '0' + d.getUTCSeconds() ).slice(-2)
                    this.time()
                }, 1000)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .clock {
        position: relative;

        &-loader {
            position: absolute;
        }
        &-clock {
            position: absolute;
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s ease;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }

</style>
