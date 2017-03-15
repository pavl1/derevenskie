<template lang="html">
    <div id="yandex">
        <noscript><div><img src="https://mc.yandex.ru/watch/43219064" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    </div>
</template>

<script>
export default {
    props: { name: String },
    mounted() {
        (function (d, w, c) {
            (w[c] = w[c] || []).push(function() {
                try {
                    w.yaCounter43219064 = new Ya.Metrika({
                        id:43219064,
                        clickmap:true,
                        trackLinks:true,
                        accurateTrackBounce:true,
                        webvisor:true,
                        trackHash:true
                    });
                } catch(e) { }
            });

            // var n = d.getElementsByTagName("script")[0],
            var n = d.getElementById("yandex"),
                s = d.createElement("script"),
                f = function () { n.parentNode.insertBefore(s, n); };
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://mc.yandex.ru/metrika/watch.js";

            if (w.opera == "[object Opera]") {
                d.addEventListener("DOMContentLoaded", f, false);
            } else { f(); }
        })(document, window, "yandex_metrika_callbacks");
    }
}
</script>

<style></style>
