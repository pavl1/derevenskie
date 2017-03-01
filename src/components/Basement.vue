<template lang="html">
    <footer>
        <div>
            Деревенские продукты © 2013-2017 <a href="http://invest-in-land.ru">ООО "Источник и ресурсы"</a> (Source&Resources LLC.)
        </div>
	</footer>
</template>

<style lang="scss" scoped>
    @import "~bourbon-neat/app/assets/stylesheets/neat";

    a {
        color: #fff;
        text-decoration: none;
    }

    footer {
        background: #282f33;
		color: #fff;
        padding: 2rem 0;
        margin-top: 2rem;
	}
    div {
        @include outer-container();
        font-size: 1.4rem;
    }

</style>

<script>
    export default { }
</script>
