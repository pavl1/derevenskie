<template lang="html">
    <section>
        <div>
            Деревенские продукты © 2013-2017 ООО "Источник и ресурсы" (Source&Resources LLC.)
        </div>
	</section>
</template>

<style lang="scss" scoped>
    @import "~bourbon-neat/app/assets/stylesheets/neat";

    section {
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
