<template lang="html">
    <footer>
        <div class="basement">
            <p>Деревенские продукты © 2013-2017 <a href="http://invest-in-land.ru" title="Перейти на сайт Земельного департамента ООО &quot;Источник и ресурсы&quot;">ООО "Источник и ресурсы"</a> (Source&Resources LLC.)</p>
            <MetricYandex />
        </div>
	</footer>
</template>

<style lang="scss" scoped>
    @import "~bourbon-neat/app/assets/stylesheets/neat";

    a {
        color: #fff;
        border-bottom: 1px solid transparent;
        transition: border .3s ease;
        text-decoration: none;

        &:hover {
            border-bottom: 1px solid #fff;
        }
    }

    footer {
        background: #282f33;
		color: #fff;
        padding: 2rem 0;
        margin-top: 2rem;
	}
    .basement {
        @include outer-container();
        font-size: 1.4rem;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;

        &:after {
            display: none;
        }
    }
    p {
        margin: 0;
    }


</style>

<script>
    import MetricYandex from "./Metric-yandex"
    export default {
        components: { MetricYandex }
    }
</script>
