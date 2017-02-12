<template lang="html">
    <ul class="slides container">

        <input type="radio" name="radio-btn" :id="0" :checked="current == 0" />
        <li class="market">
            <router-link to="market.derevenskie.pro" target="_blank">
                <img src="/static/market.jpg" />
                <div class="text">
                    <h1>Собери свою корзину</h1>
                    <p>Настоящий вкус <Icon name="logo" /> Польза для здоровья <Icon name="logo" /> Свежесть</p>
                </div>
            </router-link>
        </li>

        <input type="radio" name="radio-btn" :id="1" :checked="current == 1" />
        <li class="farmer">
            <router-link to="/farmer" target="_self">
                <img src="/static/farmer.jpg" />
                <div class="text">
                    <h1>Русагрохолдинг для фермеров</h1>
                    <p>Услуги КФХ <Icon name="logo" /> Государственная поддержка <Icon name="logo" /> Переработка и сбыт</p>
                </div>
            </router-link>
        </li>

        <input type="radio" name="radio-btn" :id="2" :checked="current == 2" />
        <li class="investor">
            <router-link to="/investor" target="_self">
                <img src="/static/investor.jpg" />
                <div class="text">
                    <h1 >Инвестируй разумно</h1>
                    <p>С гарантией <Icon name="logo" /> От 1 года <Icon name="logo" /> От 5 млн рублей</p>
                </div>
            </router-link>
        </li>

        <input type="radio" name="radio-btn" :id="3" :checked="current == 3" />
        <li class="client">
            <router-link to="/client" target="_self">
                <img src="/static/client.jpg" />
                <div class="text">
                    <h1 slot="title">Хватай удачу за хвостик</h1>
                    <p slot="description">Стань постоянным клиентом</p>
                </div>
            </router-link>
        </li>

        <input type="radio" name="radio-btn" :id="4" :checked="current == 4" />
        <li class="contacts">
            <router-link to="/contacts" target="_self">
                <img src="/static/contacts.jpg" />
                <div class="text">
                    <h1 slot="title">Остались вопросы</h1>
                    <p slot="description">Позвони прямо сейчас (3952) 995-108</p>
                </div>
            </router-link>
        </li>

        <li class="nav-dots">
            <label for="0" @click="change(0)"></label>
            <label for="1" @click="change(1)"></label>
            <label for="2" @click="change(2)"></label>
            <label for="3" @click="change(3)"></label>
            <label for="4" @click="change(4)"></label>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
    .slides {
        padding: 0;
        height: 420px;
        display: block;
        margin-bottom: 2rem;
        position: relative;
        background: #fff;
    }

    .slides * {
        user-select: none;
        -ms-user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -webkit-touch-callout: none;
    }

    input { display: none }

    li {
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        transform: scale(0);
        transition: all .7s ease-in-out;
        opacity: 0;

        input:checked + & {
            opacity: 1;
            transform: scale(1);
            transition: opacity 1s ease-in-out;
        }
    }

    a {
        width: 100%;
        height: 100%;
        position: relative;
        display: block;
        color: #333;

        .farmer & { color: #fff }
        .client & { color: #fff }
    }


    img {
        object-fit: cover;
        width: 100%;
        height: 100%;

        .investor & { object-position: 0 1.5%; }
        .farmer & { object-position: 0 100%; }
        .contacts & { object-position: 0 100%; }
        // .company & { width: 80px; height: 80px; left: 28.5%; top: 25%; position: absolute }
    }

    .text {
        position: absolute;
        text-align: center;
        bottom: 6%;
        right: 2%;

        h1 {
            text-transform: uppercase;
            margin: 2rem 0 1rem;
            font-size: 3.6rem;
            font-weight: 700;
        }
        p {
            font-size: 2rem;
            font-weight: 300;
            margin-bottom: 1rem;
        }
    }

    .nav-dots {
        width: 100%;
        right: 0;
        bottom: 9px;
        height: 11px;
        display: block;
        position: absolute;
        text-align: center;
        opacity: 1;
        transform: scale(1);

        label {
            top: -5px;
            width: 11px;
            height: 11px;
            margin: 0 4px;
            position: relative;
            border-radius: 100%;
            display: inline-block;
            background-color: rgba(0, 0, 0, 0.6);

            &:hover {
                cursor: pointer;
                background-color: rgba(0, 0, 0, 0.8);
            }
        }
    }

    input#1:checked ~ .nav-dots label#img-dot-1,
    input#2:checked ~ .nav-dots label#img-dot-2,
    input#3:checked ~ .nav-dots label#img-dot-3,
    input#4:checked ~ .nav-dots label#img-dot-4,
    input#5:checked ~ .nav-dots label#img-dot-5 {
        background: rgba(0, 0, 0, 0.8);
    }
</style>

<script>
    import Slide from './Slide'
    import Icon from './Icon'
    export default {
        components: { Slide, Icon },
        data() {
            return {
                current: 0,
                timer: ''
            }
        },
        mounted() { this.run() },
        methods: {
            run() {
                this.timer = setTimeout( () => {
                    this.current = this.current < 4 ? ++this.current : 0
                    this.run()
                }, 5000)
            },
            change(id) {
                clearTimeout(this.timer)
                this.current = id
                this.run()
            }
        }
    }
</script>
