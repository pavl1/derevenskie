<template>
    <div>
        <h1>Ввод в оборот залежных земель</h1>
        <p>Наше фермерское хозяйство имеет в собственности 3200 гектаров земель сельскохозяйственного назначения, эффективное использование которых возможно в различных вариантах: выращивание зерновых (пшеница, рожь), бобовых (горох, бобы), кормов (люцерна, овёс, ячмень) или рапса. На начальной стадии требуется раскорчёвка полей от мелкого березняка и расчистка полей от веток, на стадии подготовки паров требуется дискование, сидерация и культивация земель. Инвестиции на покупку и эксплуатацию сельхозтехники в данном проекте позволят ускорить ввод земель в оборот и получение первого урожая.</p>

        <h2>Варианты вложений</h2>
        <p>Нажмите на строку, чтобы редактировать объёмы вложений в зависимости от вводимой в оборот площади залежных земель и увидеть альтернативные варианты</p>
        <table>
            <tr>
                <td class="caption"><icon name="location"/> Вводимая площадь</td>
                <td class="options"><invest-options :data="data.area" name="area" /></td>
            </tr>
            <tr @click="activate('money')">
                <td class="caption"><icon name="money"/> Денежные средства</td>
                <td class="options"><invest-options :data="data.money" name="money" :edit="variation == 'money'" /></td>
            </tr>
            <tr @click="activate('tech')">
                <td class="caption"><icon name="tech" /> Техника</td>
                <td class="options"><invest-options :data="data.tech" name="tech" :edit="variation == 'tech'"/></td>
            </tr>
            <tr @click="activate('fuel')">
                <td class="caption"><icon name="fuel" /> Топливо</td>
                <td class="options"><invest-options :data="data.fuel" name="fuel" :edit="variation == 'fuel'" /></td>
            </tr>
        </table>

        <h2>Ожидаемый эффект</h2>
        <p>Инвестируя в проект деньги, сельскохозяйственную технику или топливо, Вы можете по итогам отчётного периода получить дивиденд либо денежными средствами, либо готовой продукцией, либо долей в фермерском хозяйстве, переоформленной на Вас. Ниже представлены расчёты вариантов доходности от инвестируемых <invest-selected :data="data" />, из которых вы можете выбрать наиболее выгодный для Вас:</p>
        <table>
            <tr>
                <td class="caption"><icon name="money"/> Денежные средства </td>
                <td class="options"><invest-results :data="result.money" name="money" /></td>
            </tr>
            <tr>
                <td class="caption"><icon name="box" /> Продукция</td>
                <td class="options"><invest-results :data="result.product" name="product" /></td>
            </tr>
            <tr>
                <td class="caption"><icon name="location" /> Земли в собственность</td>
                <td class="options"><invest-results :data="result.area" name="area" /></td>
            </tr>
        </table>

        <div class="row">
            <div class="description">
                <p>Ввод в оборот каждой 1000 гектаров земель позволяет получать ежегодно 2000-3000 тонн пшеницы. Последние два года цена на пшеницу в зависимости от сезона колеблется от 5500 рублей за тонну (сентябрь-октябрь) до 12000 рублей за тонну (июль-август).</p>
            </div>
            <div class="question">
                <div class="wrapper-vertical">
                    <button-call>
                        <template slot="text">Задать вопрос</template>
                        <template slot="number">8(902)5-166-108</template>
                    </button-call>
                    <span class="button-delimeter">или</span>
                    <button-call>
                        <template slot="text">Подать заявку</template>
                        <template slot="number">8(3952)686-108</template>
                    </button-call>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Icon from '../../components/Icon'
    import ButtonCall from '../../components/Button-call'
    import InvestOptions from '../../components/Invest-options'
    import InvestResults from '../../components/Invest-results'
    import InvestSelected from '../../components/Invest-selected'
    export default {
        components: { Icon, ButtonCall, InvestOptions, InvestResults, InvestSelected },
        methods: {
            activate(variation) {
                this.variation = variation
                window.Event.$emit('variation-selected', {variation: variation})
            }
        },
        data() {
            return {
                variation: 'money',
                data: {
                    area: [
                        { id: 0, name: '200 гектаров' },
                        { id: 1, name: '300 гектаров' },
                        { id: 2, name: '500 гектаров' },
                        { id: 3, name: '1000 гектаров' }
                    ],
                    money: [
                        { id: 0, name: '3 млн рублей', selected: '3 миллионов рублей' },
                        { id: 1, name: '4,5 млн рублей', selected: '4,5 миллионов рублей' },
                        { id: 2, name: '7,5 млн рублей', selected: '7,5 миллионов рублей' },
                        { id: 3, name: '15 млн рублей', selected: '15 миллионов рублей' }
                    ],
                    tech: [
                        { id: 0, name: '3 трактора МТЗ 82', selected: '3 тракторов МТЗ 82' },
                        { id: 1, name: '2 трактора Беларус МТЗ 1221', selected: '2 тракторов Беларус МТЗ 1221' },
                        { id: 2, name: '1 трактор К-744 Р3', selected: '1 трактора К-744 Р3' },
                        { id: 3, name: '2 трактора К-744 Р3', selected: '2 тракторов К-744 Р3' }
                    ],
                    fuel: [
                        { id: 0, name: '85 т ДТ', selected: '85 тонн дизельного топлива' },
                        { id: 1, name: '125 т ДТ', selected: '125 тонн дизельного топлива' },
                        { id: 2, name: '200 т ДТ', selected: '200 тонн дизельного топлива' },
                        { id: 3, name: '400 т ДТ', selected: '400 тонн дизельного топлива' }
                    ]
                },
                result: {
                    money: [
                        { id: 0, name: '6 млн рублей' },
                        { id: 1, name: '9 млн рублей' },
                        { id: 2, name: '15 млн рублей' },
                        { id: 3, name: '30 млн рублей' }
                    ],
                    product: [
                        { id: 0, name: '600 т пшеницы' },
                        { id: 1, name: '900 т пшеницы' },
                        { id: 2, name: '1500 т пшеницы' },
                        { id: 3, name: '3000 т пшеницы' }
                    ],
                    area: [
                        { id: 0, name: '100 гектаров' },
                        { id: 1, name: '150 гектаров' },
                        { id: 2, name: '250 гектаров' },
                        { id: 3, name: '500 гектаров' }
                    ]
                }
            }
        }
    }
</script>

<style>
    .caption, .options {
        height: 2.5rem;
        vertical-align: middle;
        padding: 0;
    }
    .options {
        padding-left: 3rem
    }
</style>
