<template lang="html">
    <div class="social">
        <a v-for="item in items" :class="item.name" class="social-icon" :href="item.link" target="_blank">
        </a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    name: "facebook",
                    text: "Facebook",
                    link: ""
                }, {
                    name: "vkontakte",
                    text: "ВКонтакте",
                    link: ""
                }, {
                    name: "odnoklassniki",
                    text: "Одноклассники",
                    link: ""
                }, {
                    name: "instagram",
                    text: "Instagram",
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

        &-icon {
            display: block;
            height: 3rem;
            color: #fff;
            text-decoration: none;
            transition: background .3s ease;
            background-size: auto 2rem;
            background-repeat: no-repeat;
            background-position: center;
        }
    }

    .facebook {
        width: 20px;
        background-image: url(/static/facebook.svg);
        &:hover { background-image: url(/static/facebook-color.svg); }
    }
    .instagram {
        width: 25px;
        background-image: url(/static/instagram.svg);
        &:hover { background-image: url(/static/instagram-color.svg); }
    }
    .vkontakte {
        width: 38px;
        background-image: url(/static/vkontakte.svg);
        &:hover { background-image: url(/static/vkontakte-color.svg); }
    }
    .odnoklassniki {
        width: 20px;
        background-image: url(/static/odnoklassniki.svg);
        &:hover { background-image: url(/static/odnoklassniki-color.svg); }
    }

</style>
