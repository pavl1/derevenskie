<template lang="html">
    <header>
            <transition-group name="menu-item">
                <li v-for="(item, index) in items" :class="item.icon" :key="item">
                    <router-link :to="item.href" :target="item.target" active-class="active" exact @click.native="move(index)">
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
            </transition-group>
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
    span {
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
            &:hover a, .active { border-color: $black }
            ul { background-color: $black }
            i { margin-top: 1.75rem }
        }
        &.market {
            color: $blue;
            &:hover a, .active { border-color: $blue }
            ul { background-color: $blue }
        }
        &.farmer {
            color: $green;
            &:hover a, .active { border-color: $green }
            ul { background-color: $green }
        }
        &.investor {
            color: $yellow;
            &:hover a, .active { border-color: $yellow }
            ul { background-color: $yellow }
        }
        &.company {
            color: $orange;
            &:hover a, .active { border-color: $orange }
            ul { background-color: $orange }
            i {
                background: url(../assets/company.png) 50% no-repeat;
                &:before { visibility: hidden }
            }
        }
        &.contacts {
            color: $red;
            &:hover a, .active { border-color: $red }
            ul { background-color: $red }
        }
        &:hover a, .active {
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

    .menu-item-move {
        transition: transform .5s
    }
</style>

<script>
    import Icon from './Icon.vue'

    export default {
        components: { Icon },
        methods: {
            move(index) {
                if (this.place) this.items[0].id = this.place
                this.place = this.items[index].id
                this.items[index].id = 0;
                this.items.sort( (a, b) => {
                    return a.id > b.id
                })
            }
        },
        data() {
            return {
                place: '',
                items: [
                    {
                        id: 1,
                        name: "Деревенские продукты",
                        href: "/",
                        target: "_self",
                        icon: "logo"
                    }, {
                        id: 2,
                        name: "Магазин",
                        href: "http://market.derevenskie.pro",
                        target: "_blank",
                        icon: "market"
                    }, {
                        id: 3,
                        name: "Фермеру",
                        href: "/farmer",
                        target: "_self",
                        icon: "farmer"
                    }, {
                        id: 4,
                        name: "Инвестору",
                        href: "/invest",
                        target: "_self",
                        icon: "investor"
                    }, {
                        id: 6,
                        name: "Компания",
                        href: "/company",
                        target: "_self",
                        icon: "company"
                    }, {
                        id: 7,
                        name: "Контакты",
                        href: "/contacts",
                        target: "_self",
                        icon: "contacts",
                        sub: [
                            {
                                name: "Клиентам",
                                href: "/client",
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
