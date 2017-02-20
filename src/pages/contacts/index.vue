<template>
    <section class="container">
        <aside class="sidebar">
            <div class="side-menu">
                <router-link class="side-link" active-class="side-active" exact to="/contacts">КФХ Старостенко&nbsp;А.А.</router-link>
                <router-link class="side-link" active-class="side-active" exact to="/contacts/voytovich">КФХ Войтович&nbsp;Н.А.</router-link>
                <router-link class="side-link" active-class="side-active" exact to="/contacts/investor">Контакты для инвесторов</router-link>
            </div>
        </aside>

        <main class="content">
            <transition name="content" mode="out-in">
                <router-view></router-view>
            </transition>
		</main>
    </section>
</template>

<script>
export default {
    props: { locked: String }
}
</script>

<style lang="scss" scoped>
    @import "../../assets/variables";
    $color: $red;

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
