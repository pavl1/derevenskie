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

        <transition name="modal">
            <modal v-show="modal" :status="status">
                <h1 slot="title">Заказать обратный звонок</h1>
                <div slot="content">
                    <p>Заполните форму и мы перезвоним Вам</p>
                    <form id="form" v-on:submit.prevent="sendCallback">
                        <!-- FIXME: анимация правильного/неправльного значения (зеленая/красная окантовка у полей) -->
                        <input
                            type="text"
                            class="callback-name"
                            v-model="callback.name"
                            placeholder="Имя" />
                        <cleave
                            type="text"
                            class="callback-phone"
                            v-model="callback.phone"
                            v-bind:options="options.phone"
                            placeholder="Телефон" />
                        <input type="text" class="callback-captcha" v-model="callback.captcha" />
                        <button type="button" class="callback-button" @click="sendCallback" :disabled="!error"> Позвоните мне</button>
                    </form>
                    <!-- <div class="success" slot="success">
                        Succes
                    </div>
                    <div class="error" slot="error">
                        Error
                    </div> -->
                </div>

            </modal>
        </transition>

    </div>
</template>

<script>
    import Icon from './Icon'
    import Modal from './Modal'
    import Axios from 'axios'
    import Cleave from './Cleave'
    require('../assets/cleave-phone.ru.js')

    export default {
        components: { Icon, Modal, Cleave },
        data() {
            return {
                modal: false,
                status: 'form',
                callback: {
                    name: '',
                    phone: '',
                    captcha: ''
                },
                options: {
                    phone: {
                        phone: true,
                        phoneRegionCode: 'RU'
                    }
                }
            }
        },
        computed: {
            error() {
                return (this.callback.name.length > 3) && ( this.callback.phone.length > 12)
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
            hideModal() { this.modal = false; this.status = "form" },
            sendCallback() {
                Axios.post('/mail.php', {
                    name: this.callback.name,
                    phone: this.callback.phone,
                    captcha: this.callback.captcha
                })
                .then( (response) => {
                    console.log(response);
                })
                .catch( (error) => {
                    console.log(error);
                })
                // FIXME: анимация
                // console.log('succes')
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

        &-button {
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

        &-captcha {
            display: none;
        }
    }

    // Transitions
    .modal-enter-active, .modal-leave-active {
        transition: opacity .3s ease, z-index 0s;
    }
    .modal-enter, .modal-leave-to{
        opacity: 0;
    }

</style>
