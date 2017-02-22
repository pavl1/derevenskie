<template>
    <div>
        <h1>Промышленная пасека</h1>
        <p>Потенциал для развития пчеловодства в Иркутской области оценивается в 1 миллион пчелосемей, в то время как сейчас фермерами поддерживается менее 40 тысяч пчелосемей. Экспорт мёда и продуктов пчеловодства в Китай имеет практически безграничный рынок сбыта. Нами разработаны проект на 500 пчелосемей и проект на 2&nbsp;000 пчелосемей, а также изучаются варианты реализации продуктов пчеловодства в России и за рубежом. Инвестиции в строительство 500 ульев окупаются в течение сезона, инвестиции в строительство 2&nbsp;000 ульев окупаются в течение 5 лет, поскольку требуют создания специальных условий для пчёл в межсезонье.</p>
        
        <h2>Ожидаемый эффект</h2>

        <div class="row">
            <div class="description">
                <p>Создание пасеки из 500 ульев позволяет получать ежегодно в среднем 20 тонн мёда и выше. Учитывая, что розничная цена на мёд колеблется от 300 до 500 рублей/кг, а оптовая составляет 150 рублей/кг, расходы окупятся в течение первого года.</p>
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
    export default {
        props: { locked: String },
        components: { ButtonCall, Icon }
    }
</script>

<style></style>
