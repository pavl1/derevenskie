<template lang="html">
    <header>
        <div>
            <li v-for="item in items" :class="item.icon">
                <router-link :to="item.href" :target="item.target">
                    <icon :name="item.icon" />
                    {{ item.name }}
                </router-link>

                <ul v-if="item.sub">
                    <li v-for="subitem in item.sub">
                        <router-link :to="subitem.href" :target="subitem.target">
                            <icon :name="subitem.icon" />
                            {{ subitem.name }}
                        </router-link>
                    </li>
                </ul>
            </li>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    @import "~bourbon/app/assets/stylesheets/bourbon";
    @import "~bourbon-neat/app/assets/stylesheets/neat";
    @import "../assets/variables";

    header {
        position: fixed;
        width: 100%;
        height: $navigation-height;
        display: block;
        &:before, &:after { display: none }
    }
    div {
        @include outer-container();
        position: relative;
        height: $navigation-height;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        z-index: 999;
        &:before, &:after { display: none }
    }
    li {
        position: relative;
        list-style: none;

        &.logo {
            color: $black;
            &:hover { border-color: $black }
            ul { background-color: $black }
            i { margin-top: 1.75rem }
        }
        &.market {
            color: $blue;
            &:hover { border-color: $blue }
            ul { background-color: $blue }
        }
        &.farmer {
            color: $green;
            &:hover { border-color: $green }
            ul { background-color: $green }
        }
        &.investor {
            color: $yellow;
            &:hover { border-color: $yellow }
            ul { background-color: $yellow }
        }
        &.company {
            color: $orange;
            &:hover { border-color: $orange }
            ul { background-color: $orange }
            i {
                background: url(../assets/company.png) 50% no-repeat;
                &:before { visibility: hidden }
            }
        }
        &.contacts {
            color: $red;
            &:hover { border-color: $red }
            ul { background-color: $red }
        }
        &:hover {
            transition: border-width 0.1s ease;
            border-top: 0.5rem solid;
            border-bottom: 0.5rem solid;
        }
        a {
            display: flex;
            justify-content: center;
            flex-direction: column;
            color: inherit;
            background: #fff;
            width: 17rem;
            height: 17rem;
            font-size: 1.75rem;
            text-align: center;
            text-decoration: none;
            text-transform: uppercase;
            font-weight: normal;
            position: relative;
            z-index: 999;

            i { font-size: 4rem; margin-bottom: 1rem }
        }

        ul {
            position: absolute;
            padding: 0;
            margin: 0;
            z-index: 998;
            left: 0;
            bottom: 0;
            transition: top 0.1s ease, transform 0.1s ease;

            li:hover {
                border: 0;
            }
            a {
                height: auto;
                background-color: transparent;
                color: #fff;
                display: inline-block;
                box-sizing: border-box;
                text-align: center;
                padding: 0.5rem;
                font-weight: 300;
                text-transform: none;

            }

        }
        &:hover ul { transform: translateY(100%) }
    }
</style>

<script>
    import Icon from './Icon.vue'

    export default {
        props: { current: String },
        components: { Icon },
        data() {
            return {
                items: [
                    {
                        name: "Деревенские продукты",
                        href: "/",
                        target: "_self",
                        icon: "logo"
                    }, {
                        name: "Магазин",
                        href: "http://market.derevenskie.pro",
                        target: "_blank",
                        icon: "market"
                    }, {
                        name: "Фермеру",
                        href: "/fermer",
                        target: "_self",
                        icon: "farmer"
                    }, {
                        name: "Инвестору",
                        href: "/invest",
                        target: "_self",
                        icon: "investor"
                    }, {
                        name: "Компания",
                        href: "/company",
                        target: "_self",
                        icon: "company"
                    }, {
                        name: "Контакты",
                        href: "/contacts",
                        target: "_self",
                        icon: "contacts",
                        sub: [
                            {
                                name: "Клиентам",
                                href: "/clients",
                                target: "_self",
                                icon: ""
                            }
                        ]
                    }
                ]
            }
        }
}
</script>
