<template lang="html">
    <div id='land' style='width: 100%; height: 40rem;'></div>
</template>

<script>
export default {
    mounted() {
        var map = new Microsoft.Maps.Map(document.getElementById('land'), {
            credentials: 'AkFwAun3D6HsTXiG74ju4MM9SabwaLZAnQJA4_KH27j-ckow6CepU4wHa4ceLfyn',
            center: new Microsoft.Maps.Location(54.22704760407108,100.06599411613597),
            mapTypeId: Microsoft.Maps.MapTypeId.aerial,
            zoom: 12,
            liteMode: true,
            showLocatMeButton: true,
            showScaleBar: false,
            showMapTypeSelector: false
        });
    }
}
</script>

<style lang="css">
</style>
