<template lang="html">
    <header :class="locked" class="header">
            <transition-group name="menu-item" class="wrapper">
                <li v-for="(item, index) in items" class="item" :class="item.icon" :key="item">
                    <router-link :to="item.href" :target="item.target" class="link" active-class="active" :exact="item.exact" @click.native="move(index)">
                        <icon class="icon" :name="item.icon" />
                        <p class="text">{{ item.name }}</p>
                    </router-link>
                </li>
            </transition-group>
    </header>
</template>

<style lang="scss" scoped>
    @import "~bourbon/app/assets/stylesheets/bourbon";
    @import "~bourbon-neat/app/assets/stylesheets/neat";
    @import "../assets/variables";

    .header {
        width: 100%;
        height: $navigation-height;
        display: block;
        &:before, &:after { display: none }
        top: 0;
        z-index: 9000
    }

    .wrapper {
        @include outer-container();
        position: relative;
        height: $navigation-height;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        z-index: 9000;
        transition: align-items .3s ease;
        &:before, &:after { display: none }
    }

    .item {
        position: relative;
        list-style: none;
        display: block;
        flex-grow: 0;
        width: 17rem;
        transition: flex-grow .3s ease;

        &.logo {
            color: $black;
            &:hover .link:before, &:hover .link:after,
            .active:before, .active:after,
            .submenu { background-color: $black }
            .icon { margin-top: 1.75rem }
        }
        &.market {
            color: $blue;
            &:hover .link:before, &:hover .link:after,
            .active:before, .active:after,
            .submenu { background-color: $blue }
        }
        &.farmer {
            color: $green;
            &:hover .link:before, &:hover .link:after,
            .active:before, .active:after,
            .submenu { background-color: $green }
        }
        &.investor {
            color: $yellow;
            &:hover .link:before, &:hover .link:after,
            .active:before, .active:after,
            .submenu { background-color: $yellow }
        }
        &.company {
            color: $orange;
            &:hover .link:before, &:hover .link:after,
            .active:before, .active:after,
            .submenu { background-color: $orange }
            .icon {
                background: url(../assets/company.png) 50% no-repeat;
                &:before { visibility: hidden }
            }
        }
        &.contacts {
            color: $red;
            &:hover .link:before, &:hover .link:after,
            .active:before, .active:after,
            .submenu { background-color: $red }
        }
        &:hover .link:before, &:hover .link:after,
        .active:before, .active:after {
            transition: height 0.1s ease;
            height: 0.5rem;
        }
        &:hover .submenu { transform: translateY(100%) }
    }

    .link {
        display: flex;
        justify-content: center;
        flex-direction: column;
        color: inherit;
        background: #fff;
        height: 17rem;
        text-align: center;
        text-decoration: none;
        position: relative;
        z-index: 999;
        transition: width .3s ease;

        &:after, &:before {
            display: block;
            content: '';
            height: 0;
            position: absolute;
            width: 100%;
            left: 0;
        }
        &:after { bottom: 0 }
        &:before { top: 0 }
    }

    .icon { font-size: 4rem; margin-bottom: 1rem }

    .text {
        font-size: 1.75rem;
        text-transform: uppercase;
        margin: 0;
        font-weight: normal;
        text-align: center;
        bottom: 50%;
        transition: width .3s ease, bottom .3s ease;
    }

    .locked-text {
        // .icon { display: none }
        // .item {
            // flex-grow: 1;
        // }
        // .text { position: absolute; bottom: 0.75rem; width: 100%; }
    }

    .locked-navigation {
        position: fixed;
        height: 6rem;

        .wrapper { height: 6rem }
        .item { flex-grow: 1;
            &:hover .link:before, & .active:before { height: 0 }
        }
        .link { height: 6rem; width: 100%; align-items: center }
        .icon { display: none }
        .text { position: static; }
    }

    .menu-item-move {
        transition: transform .5s
    }
</style>

<script>
    import Icon from './Icon.vue'

    export default {
        props: { locked: String },
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
                        icon: "logo",
                        exact: true
                    }, {
                        id: 2,
                        name: "Магазин",
                        href: "http://market.derevenskie.pro",
                        target: "_blank",
                        icon: "market",
                        exact: false
                    }, {
                        id: 3,
                        name: "Фермеру",
                        href: "/farmer",
                        target: "_self",
                        icon: "farmer",
                        exact: false
                    }, {
                        id: 4,
                        name: "Инвестору",
                        href: "/investor",
                        target: "_self",
                        icon: "investor",
                        exact: false
                    }, {
                        id: 6,
                        name: "Компания",
                        href: "/company",
                        target: "_self",
                        icon: "company",
                        exact: false
                    }, {
                        id: 7,
                        name: "Контакты",
                        href: "/contacts",
                        target: "_self",
                        icon: "contacts",
                        exact: false
                    }
                ]
            }
        }
}
</script>
