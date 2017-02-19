<template lang="html">
    <div class="button button-investor">
        <div class="displayed">
            <slot name="text" />
        </div>

        <div class="hovered">
            <slot name="number" />
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    @import "../assets/variables";

    .button {
        display: inline-block;
        position: relative;
        width: 20rem;
        height: 5rem;
        background-color: $yellow;
        border: 1px solid $yellow;
        overflow: hidden;
        font-size: 2rem;
        font-weight: 300;
        text-transform: uppercase;
        color: #fff;
        cursor: pointer;

        &:hover {
            .displayed, .hovered {
                transform: translateY(-100%);
            }
        }
    }

    .displayed, .hovered {
        position: absolute;
        text-align: center;
        line-height: 5rem;
        width: 100%;
        height: 100%;
        transition: transform .3s ease;
    }

    .hovered {
        top: 100%;
        background-color: #fff;
        color: $yellow;
    }


</style>
