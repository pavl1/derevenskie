<template>
    <div>
        <h1>Запуск тепличного хозяйства</h1>
        <p>Наше фермерское хозяйство имеет в собственности земельные участки сельскохозяйственного назначения, расположенные около полноводной реки, берущей начало у подножья Саян. Наличие удобных подъездных путей и подведённые электрические сети, а также характерные для юга Тулунского района влажный климат и высокая солнечная активность благоприятствуют выращиванию овощей закрытого грунта. По оценке Министерства сельского хозяйства Иркутская область нуждается в 50 гектарах теплиц для огурцов, томатов и салата, в то время как сейчас используется только 25 гектаров. Нами разработан проект строительства тепличного комплекса из 20 фермерских теплиц площадью по 500 м<sup>2</sup> каждая. Инвестиции на строительство и эксплуатацию тепличного комплекса в данном проекте позволят окупить каждую теплицу за один сезон, при этом возможно привлечение до 20 инвесторов одновременно (по инвестору на проект из 20 фермерских теплиц).</p>

        <h2>Варианты вложений</h2>
        <p>Нажмите на строку, чтобы редактировать объёмы вложений в зависимости от вариантов инвестиций и увидеть альтернативные варианты</p>
        <table>
            <tr>
                <td class="caption"><icon name="deal"/> Варианты инвестиций</td>
                <td class="options"><invest-options :data="data.deal" name="deal" /></td>
            </tr>
            <tr @click="activate('money')">
                <td class="caption"><icon name="money"/> Денежные средства</td>
                <td class="options"><invest-options :data="data.money" name="money" :edit="variation == 'money'" /></td>
            </tr>
            <tr @click="activate('tools')">
                <td class="caption"><icon name="tools" /> Стройматериалы</td>
                <td class="options"><invest-options :data="data.tools" name="tools" :edit="variation == 'tools'"/></td>
            </tr>
            <tr @click="activate('fuel')">
                <td class="caption"><icon name="fuel" /> Топливо</td>
                <td class="options"><invest-options :data="data.fuel" name="fuel" :edit="variation == 'fuel'" /></td>
            </tr>
        </table>



        <h2>Ожидаемый эффект</h2>
        <p>Инвестируя в проект деньги, сельскохозяйственную технику, стройматериалы или топливо, Вы можете по итогам отчётного периода получить дивиденд либо денежными средствами, либо готовой продукцией, либо долей в действующем фермерском хозяйстве, оформленной на Вас в собственность или в аренду. Ниже представлены расчёты вариантов доходности от инвестируемых <invest-selected :data="data" />, из которых вы можете выбрать наиболее выгодный для Вас:</p>
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
                <td class="caption"><icon name="percent" /> Дивиденд</td>
                <td class="options"><invest-results :data="result.dividend" name="diovidend" /></td>
            </tr>
        </table>

        <div class="row">
            <div class="description">
                <p>Строительство и запуск фермерской теплицы площадью 500 м<sup>2</sup> позволяет получать 5-6 тонн томатов или 30-35 тонн огурцов за цикл, при этом отапливаемая теплица позволяет реализовать 2 цикла за год. Оптовая цена на помидоры составляет 90-95 рублей/кг, розничная – 150-200 рублей/кг, оптовая цена на огурцы составляет 100-140 рублей/кг, розничная – 200-220 рублей/кг.</p>
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
        components: { ButtonCall, Icon, InvestOptions, InvestResults, InvestSelected },
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
                    deal: [
                        { id: 0, name: 'Теплица 500 м<sup>2</sup>' },
                        { id: 1, name: 'Теплица 500 м<sup>2</sup>' },
                        { id: 2, name: '1 теплица 500 м<sup>2</sup> под огруцы и 1 теплица 500 м<sup>2</sup> под помидоры' },
                        { id: 3, name: 'Годовая подписка на ежемесячную поставку 1,5 т огурцов и 1,5 т помидоров' }
                    ],
                    money: [
                        { id: 0, name: '1,5 млн рублей', selected: '1,5 миллионов рублей' },
                        { id: 1, name: '1,5 млн рублей', selected: '1,5 миллионов рублей' },
                        { id: 2, name: '3 млн рублей', selected: '3 миллионов рублей' },
                        { id: 3, name: '3,5 млн рублей', selected: '3,5 миллионов рублей' }
                    ],
                    tools: [
                        { id: 0, name: 'на сумма 1,8 млн рублей', selected: 'строительных материалов на сумму 1,8 миллиона рублей' },
                        { id: 1, name: 'на сумма 1,8 млн рублей', selected: 'строительных материалов на сумму 1,8 миллиона рублей' },
                        { id: 2, name: 'на сумма 3,6 млн рублей', selected: 'строительных материалов на сумму 3,6 миллиона рублей' },
                        { id: 3, name: 'на сумма 4 млн рублей', selected: 'строительных материалов на сумму 4 миллиона рублей' }
                    ],
                    fuel: [
                        { id: 0, name: '45 т ДТ', selected: '45 тонн дизельного топлива' },
                        { id: 1, name: '45 т ДТ', selected: '45 тонн дизельного топлива' },
                        { id: 2, name: '85 т ДТ', selected: '85 тонн дизельного топлива' },
                        { id: 3, name: '100 т ДТ', selected: '100 тонн дизельного топлива' }
                    ]
                },
                result: {
                    money: [
                        { id: 0, name: '3 млн рублей' },
                        { id: 1, name: '3 млн рублей' },
                        { id: 2, name: '6 млн рублей' },
                        { id: 3, name: '18 т огурцов и 18 т помидоров с доставкой' }
                    ],
                    product: [
                        { id: 0, name: '47,5 т огурцов' },
                        { id: 1, name: '32,5 т помидоров' },
                        { id: 2, name: '47,5 т огурцов и 32,5 т помидоров' },
                        { id: 3, name: '18 т огурцов и 18 т помидоров с доставкой' }
                    ],
                    dividend: [
                        { id: 0, name: '100% в течение 3 лет' },
                        { id: 1, name: '100% в течение 3 лет' },
                        { id: 2, name: '100% в течение 3 лет' },
                        { id: 3, name: '18 т огурцов и 18 т помидоров с доставкой' }
                    ]
                }
            }
        }
    }
</script>

<style></style>
