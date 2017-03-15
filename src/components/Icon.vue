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
    .icon-percent-1:before { content: '\e80e'; } /* '' */
    .icon-cow:before { content: '\e80f'; } /* '' */
    .icon-money:before { content: '\e810'; } /* '' */
    .icon-box:before { content: '\e811'; } /* '' */
    .icon-file-pdf:before { content: '\e812'; } /* '' */
    .icon-contacts:before { content: '\e813'; } /* '' */
    .icon-loading:before { content: '\e830'; } /* '' */
    .icon-facebook:before { content: '\f09a'; } /* '' */
    .icon-mobile:before { content: '\f10b'; } /* '' */
    .icon-youtube:before { content: '\f167'; } /* '' */
    .icon-vkontakte:before { content: '\f189'; } /* '' */
    .icon-odnoklassniki:before { content: '\f263'; } /* '' */
    .icon-percent:before { content: '\f295'; } /* '' */
    .icon-deal:before { content: '\f2b5'; } /* '' */

    .animate-spin {
      -moz-animation: spin 2s infinite linear;
      -o-animation: spin 2s infinite linear;
      -webkit-animation: spin 2s infinite linear;
      animation: spin 2s infinite linear;
      display: inline-block;
    }
    @-moz-keyframes spin {
      0% {
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }

      100% {
        -moz-transform: rotate(359deg);
        -o-transform: rotate(359deg);
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
      }
    }
    @-webkit-keyframes spin {
      0% {
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }

      100% {
        -moz-transform: rotate(359deg);
        -o-transform: rotate(359deg);
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
      }
    }
    @-o-keyframes spin {
      0% {
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }

      100% {
        -moz-transform: rotate(359deg);
        -o-transform: rotate(359deg);
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
      }
    }
    @-ms-keyframes spin {
      0% {
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }

      100% {
        -moz-transform: rotate(359deg);
        -o-transform: rotate(359deg);
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
      }
    }
    @keyframes spin {
      0% {
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }

      100% {
        -moz-transform: rotate(359deg);
        -o-transform: rotate(359deg);
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
      }
    }


</style>
