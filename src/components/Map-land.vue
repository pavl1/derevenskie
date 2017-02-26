<template lang="html">
    <div id='land' style='width: 100%; height: 60rem;'></div>
</template>

<script>
export default {
    mounted() {
        var map = new Microsoft.Maps.Map(document.getElementById('land'), {
            credentials: 'AkFwAun3D6HsTXiG74ju4MM9SabwaLZAnQJA4_KH27j-ckow6CepU4wHa4ceLfyn',
            center: new Microsoft.Maps.Location(54.22404760407108,100.11099411613597),
            mapTypeId: Microsoft.Maps.MapTypeId.aerial,
            zoom: 12,
            liteMode: true,
            showLocatMeButton: true,
            showScaleBar: false,
            showMapTypeSelector: false
        });
        var burbuk = new Microsoft.Maps.Pushpin({ latitude: 54.25693087288761, longitude: 99.97811149999991, altitude: 0 }, { color: '#b64201' })
        var edogon = new Microsoft.Maps.Pushpin({ latitude: 54.253664782196886, longitude: 100.24103099999995, altitude: 0 }, { color: '#b64201' })
        var ikey = new Microsoft.Maps.Pushpin({ latitude: 54.189123869229256, longitude: 100.08171449999998, altitude: 0 }, { color: '#b64201' })
        map.entities.push(burbuk)
        map.entities.push(edogon)
        map.entities.push(ikey)
    }
}
</script>

<style lang="css">
</style>
