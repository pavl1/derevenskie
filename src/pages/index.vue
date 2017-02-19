<template>
    <div class="container">
        <slider></slider>

        <div class="content">
            <article v-for="item in items" class="item" :class="item.name">
                <div class="tile">
                    <center><icon :name="item.name" /></center>
                    <p>{{ item.description }}</p>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
    import Slider from '../components/Slider'
    import Icon from '../components/Icon'

    export default {
        components: { Slider, Icon },
        data () {
            return {
                items: [
					{
						description: "ИНТЕРНЕТ-МАГАЗИН НАТУРАЛЬНЫХ ДЕРЕВЕНСКИХ ПРОДУКТОВ, ВЫРАЩЕННЫХ, ПЕРЕРАБОТАННЫХ, УПАКОВАННЫХ И ДОСТАВЛЕННЫХ ПРЯМО К ВАШЕМУ СТОЛУ. ОФОРМЛЯЙТЕ ЗАКАЗ И ОЦЕНИТЕ ОТЛИЧНЫЙ ВКУС ЗДОРОВОЙ ПИЩИ!",
						name: "market"
					}, {
						description: "ЭФФЕКТИВНЫЕ ИНВЕСТИЦИИ В ПРОИЗВОДСТВО СЕЛЬСКОХОЗЯЙСТВЕННОЙ ПРОДУКЦИИ ПОЛНОГО ЦИКЛА НА СРОК ОТ 1 ГОДА ДО 3 ЛЕТ . ПРИГЛАШАЕМ К СОТРУДНИЧЕСТВУ И ГАРАНТИРУЕМ ВЫСОКИЙ ДИВИДЕНД",
						name: "investor"
					}, {
						description: "РУСАГРОХОЛДИНГ ОКАЗЫВАЕТ ПОДДЕРЖКУ ФЕРМЕРАМ В ПОЛУЧЕНИИ ГОСУДАРСТВЕННОЙ ПОДДЕРЖКИ, ПРИОБРЕТЕНИИ ТЕХНИКИ, УДОБРЕНИЙ И ТОПЛИВА, ПЕРЕРАБОТКИ И СБЫТА ПРОДУКЦИИ, РЕШЕНИЯ ЮРИДИЧЕСКИХ И БУХГАЛТЕРСКИХ ПРОБЛЕМ. ПРИСОЕДИНЯЙТЕСЬ!",
						name: "company"
					}, {
						description: "ПРОЕКТ «ДЕРЕВЕНСКИЕ ПРОДУКТЫ» ОСУЩЕСТВЛЯЕТ ОТБОР ЗАЯВОК ФЕРМЕРОВ, ЖЕЛАЮЩИХ НАЛАДИТЬ РОЗНИЧНУЮ РЕАЛИЗАЦИЮ СВОЕЙ ПРОДУКЦИИ, А ТАКЖЕ ЭКСПОРТНЫЕ ПОСТАВКИ ОПТОВЫХ ПАРТИЙ ЗЕРНОВЫХ. РЕГИСТРИРУЙТЕСЬ!",
						name: "farmer"
					}, {
						description: "ПОЛЕЗНАЯ ИНФОРМАЦИЯ ДЛЯ ФЕРМЕРОВ ПРИБАЙКАЛЬЯ И БЛОГИ О СЕЛЬСКОМ ХОЗЯЙСТВЕ В СОЦИАЛЬНЫХ СЕТЯХ ДЛЯ ТЕХ, КТО ИНТЕРЕСУЕТСЯ КАК И ЗАЧЕМ ВЫРАЩИВАЮТ ДЕРЕВЕНСКИЕ ПРОДУКТЫ В ИРКУТСКОЙ ОБЛАСТИ. ПРИСОЕДИНЯЙТЕСЬ!",
						name: "contacts"
					}, {
						description: "ЭКОЛОГИЧЕСКИ ЧИСТЫЕ ДЕРЕВЕНСКИЕ ПРОДУКТЫ ВЫРАЩИВАЮТСЯ НА ПЛОДОРОДНЫХ ЗЕМЛЯХ ЮГА ТУЛУНСКОГО РАЙОНА СПЕЦИАЛИСТАМИ КРЕСТЬЯНСКО-ФЕРМЕРСКИХ ХОЗЯЙСТВ СТАРОСТЕНКО А.А. (ИКЕЙ) И ВОЙТОВИЧ Н.А. (ЕДОГОН). ВЫБИРАЙТЕ ЛУЧШЕЕ!",
						name: "logo"
					}
				]
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "~bourbon/app/assets/stylesheets/bourbon";
    @import "~bourbon-neat/app/assets/stylesheets/neat";
    @import "../assets/variables";

    .container { display: block }
    .content { display: flex; justify-content: space-between; flex-flow: row wrap; padding: 0; margin-bottom: -2rem }
    .item {
        margin-bottom: 2rem; width: 30%; flex-grow: 1; margin-right: 2rem;
        &:nth-child(3n+3) { margin-right: 0 }

    }
    .market { background: $blue }
    .investor { background: $yellow }
    .company { background: $orange }
    .farmer { background: $green }
    .contacts { background: $red }
    .logo { background: $blue }

    .tile { padding: 2rem 1rem; color: #fff }

	p {
        font-weight: 300;
        text-align: center;
        font-size: 1.5rem;
        line-height: 1.75;
        margin-bottom: 0;
    }
	i {
        font-size: 4rem;
        &:before { margin-bottom: 1.5rem }
    }
</style>
