<template>
    <div>
        <div class="content">
            <card :card="cardInfo"></card>
            <card :card="cardInfo"></card>
            <card :card="cardInfo"></card>
        </div>
    </div>
</template>

<script>
import card from './card';

export default {
    name: 'index',
    components: { card },
    data() {
        return {
            cardInfo: {
                img: require('../../assets/image/photo-1589963348451-142110e1ad3f.jpg'),
                title: 'APP OF THE DAY',
                text: '<p>asdasdasd</p><p>asdasdasd</p>'
            }
        };
    },
    created() { },
    mounted() { },
    methods: {
    },
};
</script>

<style lang="scss" scope>
body {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-x: hidden;
    background-color: #eee;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: 1rem, 0;
}
</style>
