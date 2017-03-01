<template>
    <section class="container">
        <aside class="sidebar">
            <div class="side-menu">
                <router-link class="side-link" active-class="side-active" exact to="/investor">Обращение к инвесторам</router-link>
                <router-link class="side-link" active-class="side-active" exact to="/investor/land">Освоение земель</router-link>
                <router-link class="side-link" active-class="side-active" exact to="/investor/greenhouse">Тепличное хозяйство</router-link>
                <router-link class="side-link" active-class="side-active" exact to="/investor/farm">Молочная ферма</router-link>
                <router-link class="side-link" active-class="side-active" exact to="/investor/apiary">Промышленная пасека</router-link>
                <router-link class="side-link" active-class="side-active" exact to="/investor/store">Хранилище овощей</router-link>
                <router-link class="side-link" active-class="side-active" exact to="/investor/contacts">Контакты для инвесторов</router-link>
            </div>
            <social />
        </aside>

        <main class="content">
            <transition name="content" mode="out-in">
                <router-view></router-view>
            </transition>
        </main>
    </section>
</template>

<script>
    import Social from '../../components/Social'
    export default {
        components: { Social },
        props: { locked: String },
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/variables";
    $color: $yellow;

    .sidebar {
        background: -moz-linear-gradient(top, $color 50%, rgba(0,0,0,0) 100%);
        background: -webkit-linear-gradient(top, $color 50%,rgba(0,0,0,0) 100%);
        background: linear-gradient(to bottom, $color 50%,rgba(0,0,0,0) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$color', endColorstr='#00000000',GradientType=0 );
    }

    .side-link:hover,
    .side-active {
        background-color: scale-color($color, $lightness: -15%);
    }
</style>
