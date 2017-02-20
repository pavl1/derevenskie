<template lang="html">
    <div id='office' style='width: 100%; height: 60rem; max-height: 100%;'></div>
</template>

<script>
    export default {
        mounted() {
            DG.then( function() {
                var office = DG.map('office', {
                    center: [ 52.28979260716191, 104.27900791168214 ],
                    zoom:16,
                    projectDetector: false,
                    fullscreenControl: false
                })
                DG.marker([ 52.2895, 104.2790 ]).addTo(office)
            })
        }
    }
</script>

<style lang="css">
.map {
}
</style>
