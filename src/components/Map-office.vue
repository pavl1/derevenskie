<template lang="html">
    <div class="map">
        <div id='office' style='width: 100%; height: 60rem; max-height: 100%;'></div>
        <div class="card">
            <h2>Наши контакты</h2>
            <p class="text"><icon class="icon-absolute" name="location" /> Российская Федерация, 664025, г.&nbsp;Иркутск, ул. Ленина, д. 6, оф. 205</p>
            <p class="text"><icon class="icon-absolute" name="phone" /> 8(3952)995-108</p>
            <p class="text"><icon class="icon-absolute" name="mobile" /> 8(914)8-995-108</p>
            <span class="callback-button" @click="showModal()">Заказать звонок</span>
        </div>

        <modal v-show="modal">
            <h1 slot="title">Заказать обратный звонок</h1>
            <div slot="content">
                <p>Заполните форму и мы перезвоним Вам</p>
                <form v-on:submit.prevent="sendCallback()">
                    <input type="text" class="callback-name" v-model="callback.name" placeholder="Имя">
                    <input type="text" class="callback-phone" v-model="callback.phone" placeholder="Телефон">
                    <button type="submit" class="callback-button" :disabled="!error"><icon name="send" /> Позвоните мне</button>
                </form>
            </div>
        </modal>

    </div>
</template>

<script>
    import Icon from './Icon'
    import Modal from './Modal'

    export default {
        components: { Icon, Modal },
        data() {
            return {
                modal: false,
                callback: {
                    name: '',
                    phone: ''
                }
            }
        },
        computed: {
            error() {
                return (this.callback.name.length > 3) && (this.callback.phone.length == 11)
            }
        },
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
            window.Event.$on('modal-hide', () => { this.hideModal() })
        },
        methods: {
            showModal() { this.modal = true },
            hideModal() { this.modal = false },
            sendCallback() {
                console.log(this.callback.name +  ' ' + this.callback.phone)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/variables";

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
    .icon-absolute { position: absolute; left: 2rem }

    .callback-button {
        display: block;
        margin: 1rem auto 0;
        padding: 1rem 2rem;
        width: 20rem;
        background: $green;
        font-size: 1.6rem;
        color: #fff;
        text-align: center;
        cursor: pointer;
        transition: background .3s ease;
        border: 0;

        &:hover {
            background: scale-color($green, $lightness: 10%);
        }

        &:disabled {
            background: $black;
            cursor: not-allowed;
        }
    }

    .callback {

        &-name, &-phone {
            display: inline-block;
            font-size: 1.6rem;
            padding: 0.5rem 1rem;
            width: 48%;
        }
        &-name {
            margin-right: 4%;
            float: left;
        }
    }
</style>
