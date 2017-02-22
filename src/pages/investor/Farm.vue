<template>
    <div>
        <h1>Молочная ферма с молокозаводом</h1>
        <p>Наше фермерское хозяйство имеет в собственности списанную молочную ферму в Тулунском районе с огороженной и охраняемой территорией для складирования кормов. Инвестиции на восстановление фермы (включая восстановление силосных ям и котельной), закуп 200 племенных молочных коров, а также запуск минизавода по переработке молока в городе Тулун оцениваются нами в 25-30 миллионов рублей.</p>

        <h2>Варианты вложений</h2>
        <p>Нажмите на строку, чтобы редактировать объёмы вложений в зависимости от вводимой в оборот площади залежных земель и увидеть альтернативные варианты:</p>
        <table>
            <tr>
                <td class="caption"><icon name="cow"/> Поголовье стада</td>
                <td class="options"><invest-options :data="data.herd" name="herd" /></td>
            </tr>
            <tr @click="activate('money')">
                <td class="caption"><icon name="money"/> Денежные средства</td>
                <td class="options"><invest-options :data="data.money" name="money" :edit="variation == 'money'" /></td>
            </tr>
            <tr @click="activate('tools')">
                <td class="caption"><icon name="tools" /> Спецтехника и строийматериалы</td>
                <td class="options"><invest-options :data="data.tools" name="tools" :edit="variation == 'tools'" /></td>
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
                <td class="caption"><icon name="money"/> Денежные&nbsp;средства </td>
                <td class="options"><invest-results :data="result.money" name="money" /></td>
            </tr>
            <tr>
                <td class="caption"><icon name="box" /> Продукция</td>
                <td class="options"><invest-results :data="result.product" name="product" /></td>
            </tr>
            <tr>
                <td class="caption"><icon name="percent" /> Дивиденд</td>
                <td class="options"><invest-results :data="result.dividend" name="dividend" /></td>
            </tr>
        </table>

        <div class="row">
            <div class="description">
                <p>Запуск полноценной молочной фермы на 200 голов позволяет получать ежедневно 1&nbsp;500-2&nbsp;500 литров молока. Минизавод по переработке молока позволяет получать ежедневно молока 2,5% жирности 400 кг, кефира 2,5% жирности 250 кг, йогурта 2,5% жирности 200 кг, сметаны 20% жирности 100 кг, творога 9% жирности 150 кг, масла сливочного 82,5% жирности 25 кг. Годовая выручка от реализации продукции, половина которой уходит на покрытие текущих расходов, составит 20-22 млн рублей.</p>
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
        props: { locked: String },
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
                    herd: [
                        { id: 0, name: '30 коров' },
                        { id: 1, name: '70 коров' },
                        { id: 2, name: '100 коров' },
                        { id: 3, name: '200 коров' }
                    ],
                    money: [
                        { id: 0, name: '5 млн рублей', selected: '5 миллионов рублей' },
                        { id: 1, name: '10 млн рублей', selected: '10 миллионов рублей' },
                        { id: 2, name: '15 млн рублей', selected: '15 миллионов рублей' },
                        { id: 3, name: '30 млн рублей', selected: '30 миллионов рублей' }
                    ],
                    tools: [
                        { id: 0, name: 'Спецтехника, стройматериалы', selected: 'cпецтехники и строительных материалов' },
                        { id: 1, name: 'Спецтехника, стройматериалы', selected: 'cпецтехники и строительных материалов' },
                        { id: 2, name: 'Спецтехника, стройматериалы', selected: 'cпецтехники и строительных материалов' },
                        { id: 3, name: 'Спецтехника, стройматериалы', selected: 'cпецтехники и строительных материалов' }
                    ],
                    fuel: [
                        { id: 0, name: '135 т ДТ', selected: '135 тонн дизельного топлива' },
                        { id: 1, name: '265 т ДТ', selected: '265 тонн дизельного топлива' },
                        { id: 2, name: '400 т ДТ', selected: '400 тонн дизельного топлива' },
                        { id: 3, name: '800 т ДТ', selected: '800 тонн дизельного топлива' }
                    ]
                },
                result: {
                    money: [
                        { id: 0, name: '10 млн рублей' },
                        { id: 1, name: '20 млн рублей' },
                        { id: 2, name: '30 млн рублей' },
                        { id: 3, name: '60 млн рублей' }
                    ],
                    product: [
                        { id: 0, name: '1,35 т масла, 8,1 т творога, 5,4 т сметаны, 10,8 т йогурта, 13,5 т кефира, 21,6 т молока' },
                        { id: 1, name: '3,15 т масла, 18,9 т творога, 12,6 т сметаны, 25,2 т йогурта, 31,5 т кефира, 50,4 т молока' },
                        { id: 2, name: '4,5 т масла, 27 т творога, 18 т сметаны, 36 т йогурта, 45 т кефира, 72 т молока' },
                        { id: 3, name: '9 т масла, 54 т творога, 36 т сметаны, 72 т йогурта, 90 т кефира, 144 т молока'}
                    ],
                    dividend: [
                        { id: 0, name: '40% в течение 5 лет' },
                        { id: 1, name: '40% в течение 5 лет' },
                        { id: 2, name: '40% в течение 5 лет' },
                        { id: 3, name: '40% в течение 5 лет' }
                    ]
                }
            }
        }
    }
</script>

<style></style>
