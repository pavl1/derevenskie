<template>
    <div>
        <h1>Контакты для инвесторов</h1>
        <table>
            <tr>
                <td class="right">Адрес офиса</td>
                <td>Российская Федерация, 664025, г. Иркутск, ул. Ленина, д. 6, офис 205</td>
            </tr>
            <tr>
                <td class="right">Контактное лицо</td>
                <td>Омельчук Роман Константинович</td>
            </tr>
            <tr>
                <!-- FIXME: защитить телефон -->
                <td class="right">Телефоны</td>
                <td>8(3952)686-108, 8(902)5-166-108</td>
            </tr>
            <tr>
                <!-- FIXME: защитить e-mail -->
                <td class="right">E-mail</td>
                <td><a href="mailto: roman@invest-in-land.ru">roman@invest-in-land.ru</a></td>
            </tr>
            <tr>
                <td>Иркутское время</td>
                <td><clock /></td>
            </tr>
        </table>
    </div>
</template>

<script>
    import Clock from '../../components/Clock'
    export default {
        components: { Clock },
        props: { locked: String }
    }
</script>

<style></style>
