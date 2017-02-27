<template lang="html">
    <i :class="'icon icon-' + name"></i>
</template>

<script>
export default {
    props: { name: String }
}
</script>

<style lang="scss" scoped>
    @font-face {
        font-family: 'fontello';
        src: url('../font/fontello.eot?48367180');
        src: url('../font/fontello.eot?48367180#iefix') format('embedded-opentype'),
        url('../font/fontello.woff2?48367180') format('woff2'),
        url('../font/fontello.woff?48367180') format('woff'),
        url('../font/fontello.ttf?48367180') format('truetype'),
        url('../font/fontello.svg?48367180#fontello') format('svg');
        font-weight: normal;
        font-style: normal;
    }

     [class^="icon-"]:before, [class*=" icon-"]:before {
      font-family: "fontello";
      font-style: normal;
      font-weight: normal;
      speak: none;

      display: inline-block;
      text-decoration: inherit;
      width: 1em;
      margin-right: .2em;
      text-align: center;
      /* opacity: .8; */

      /* For safety - reset parent styles, that can break glyph codes*/
      font-variant: normal;
      text-transform: none;

      /* fix buttons height, for twitter bootstrap */
      line-height: 1em;

      /* Animation center compensation - margins should be symmetric */
      /* remove if not needed */
      margin-left: .2em;

      /* you can be more comfortable with increased icons size */
      /* font-size: 120%; */

      /* Font smoothing. That was taken from TWBS */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      /* Uncomment for 3D effect */
      /* text-shadow: 1px 1px 1px rgba(127, 127, 127, 0.3); */
    }

    .icon-phone:before { content: '\e800'; } /* '' */
    .icon-investor:before { content: '\e802'; } /* '' */
    .icon-market:before { content: '\e803'; } /* '' */
    .icon-logo:before { content: '\e806'; } /* '' */
    .icon-farmer:before { content: '\e808'; } /* '' */
    .icon-location:before { content: '\e809'; } /* '' */
    .icon-fuel:before { content: '\e80a'; } /* '' */
    .icon-company:before { content: '\e80b'; } /* '' */
    .icon-tech:before { content: '\e80c'; } /* '' */
    .icon-tools:before { content: '\e80d'; } /* '' */
    .icon-cow:before { content: '\e80f'; } /* '' */
    .icon-money:before { content: '\e810'; } /* '' */
    .icon-box:before { content: '\e811'; } /* '' */
    .icon-file-pdf:before { content: '\e812'; } /* '' */
    .icon-contacts:before { content: '\e813'; } /* '' */
    .icon-mobile:before { content: '\f10b'; } /* '' */
    .icon-send:before { content: '\f1d8'; } /* '' */
    .icon-percent:before { content: '\f295'; } /* '' */
    .icon-deal:before { content: '\f2b5'; } /* '' */
</style>
