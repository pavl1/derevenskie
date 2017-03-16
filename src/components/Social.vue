<template lang="html">
    <div class="social">
        <a v-for="item in items" :href="item.link" target="_blank">
            <icon :class="" :name="item.name" />
        </a>
    </div>
</template>

<script>
import Icon from './Icon'

export default {
    components: { Icon },
    data() {
        return {
            items: [
                {
                    name: "facebook",
                    link: "https://www.facebook.com/groups/567804090091555/"
                }, {
                    name: "vkontakte",
                    link: ""
                }, {
                    name: "odnoklassniki",
                    link: "https://ok.ru/group/58161259741225"
                }, {
                    name: "youtube",
                    link: ""
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .social {
        position: absolute;
        bottom: 0;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        padding: 1rem;
        width: 100%;
    }

    .icon {
        border: 1px solid #c4c4c4;
        border-radius: 3px;
        padding: 0.2rem;
        background-color: #f6f6f6;
        color: #747474;
        font-size: 2rem;
        text-decoration: none;
        transition: color .3s ease, background-color .3s ease, border-color .3s ease;
        background-size: auto 2rem;
        background-repeat: no-repeat;
        background-position: center;

        &-facebook {
            $color: #3a5999;
            &:hover { color: #fff; background-color: $color; border-color: scale-color($color, $lightness: 20%) }
        }
        &-vkontakte {
            $color: #4c75a3;
            &:hover { color: #fff; background-color: $color; border-color: scale-color($color, $lightness: 20%) }
        }
        &-odnoklassniki {
            $color: #f6881f;
            &:hover { color: #fff; background-color: $color; border-color: scale-color($color, $lightness: 20%) }
        }
        &-youtube {
            $color: #e62117;
            &:hover { color: #fff; background-color: $color; border-color: scale-color($color, $lightness: 20%) }
        }
    }

</style>
