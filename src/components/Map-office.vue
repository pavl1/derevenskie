<template lang="html">
    <div class="map">
        <div id='office' style='width: 100%; height: 60rem; max-height: 100%;'></div>
        <div class="card">
            <h2>Наши контакты</h2>
            <p class="text"><icon name="location" /> Российская Федерация, 664025, г.&nbsp;Иркутск, ул. Ленина, д. 6, оф. 205</p>
            <p class="text"><icon name="phone" /> 8(3952)995-108</p>
            <p class="text"><icon name="mobile" /> 8(914)8-995-108</p>
        </div>
    </div>
</template>

<script>
    import Icon from './Icon'

    export default {
        components: { Icon },
        mounted() {
            DG.then( function() {
                var office = DG.map('office', {
                    center: [ 52.28979260716191, 104.28500791168214 ],
                    zoom:16,
                    projectDetector: false,
                    fullscreenControl: false,
                    scrollWheelZoom: false
                })
                DG.marker([ 52.2895, 104.2790 ]).addTo(office)
            })
        }
    }
</script>

<style lang="scss" scoped>
    h2 { margin-top: 0 }
    .map { position: relative }
    .card {
        position: absolute;
        top: 20%;
        right: 10%;
        width: 40%;
        padding: 2rem;
        background: #fff;
        z-index: 1000;
    }
    .text { margin-left: 3rem; text-align: left }
    .icon { position: absolute; left: 2rem }
</style>
