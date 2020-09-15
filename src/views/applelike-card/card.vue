<template>
    <div>
        <div :class="{ card: true, active: isExpand }" :style="{'--data-offset-top': dataOffsetTop}" @click="onExpand($event)">
            <img :src="card.img" />
            <div class="title">{{card.title}}</div>
            <div class="content-wrapper">
                <div class="content" v-html="card.text">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'card',
    components: {},
    props: {
        card: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            dataOffsetTop: 0,
            isExpand: false,
        };
    },
    created() { },
    mounted() { },
    watch: {
    },
    methods: {
        onExpand(event) {
            let cardItem = event.currentTarget;
            let scrollTop = cardItem.getBoundingClientRect().top;
            this.dataOffsetTop = `${-1 * scrollTop}px`;
            this.isExpand = !this.isExpand;
        },
    },
};
</script>

<style lang="scss" scope>
body {
    --card-width: 94vw;
    --card-height: 58vw;
    --image-height: 45vw;
    --image-height-expanded: 60vw;
    --title-height: calc(var(--card-height) - var(--image-height));
}
.card {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    width: var(--card-width);
    height: var(--card-height);
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 0 0.2rem 2rem rgba(0, 0, 0, 0.1);
    transition: 0.3s all cubic-bezier(0, 1, 1, 1);
    font-size: 15px;
    font-family: Helvetica;
}

.card img {
    display: block;
    width: 100%;
    height: var(--image-height);
    object-fit: cover;

    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
}

.card .title {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    flex-grow: 0;
    height: var(--title-height);
    padding: 0 1.2rem;
    box-sizing: border-box;
    font-size: 1.3rem;
    font-weight: bold;
    letter-spacing: -0.5px;
    //   background-color: #fff;
}

.card .content-wrapper {
    transform: translateY(-1px);
    height: 0;
    overflow: hidden;
}

.card .content-wrapper .content {
    padding: 0 1.2rem;
    background-color: #fff;
    overflow: auto;
}

.card p {
    font-size: 1.1rem;
    line-height: 1.5rem;
}

.card.active {
    transform: translateY(var(--data-offset-top)) scale(calc(100 / 94));
    transform-origin: 50% 0;
    border-radius: 0;
}

.card.active .title {
    background-color: #fff;
}

.card.active img {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    height: var(--image-height-expanded);
}

.card.active .content-wrapper {
    height: 100vh;
    overflow: visible;
}
</style>
