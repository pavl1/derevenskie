<template>
    <section class="container">
        <aside class="sidebar">
            <div class="side-menu">
                <router-link class="side-link" active-class="side-active" exact to="/market">Обращение к клиентам</router-link>
                <!-- <router-link class="side-link" active-class="side-active" exact to="/farmer/founder">Наш учредитель</router-link> -->
                <!-- <router-link class="side-link" active-class="side-active" exact to="/farmer/agroholding">Идея агрохолдинга</router-link> -->
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
        props: { locked: String }
    }
</script>
<style lang="scss" scoped>
    @import "../../assets/variables";
    $color: $blue;

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
