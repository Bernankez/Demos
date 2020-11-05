<template>
    <div class="page">
        <el-button class="testbutton" type="primary" @click="onClick">button</el-button>
        <!-- <el-input class="text" type="textarea" :autosize="{ minRows: 10}" v-model="text"></el-input> -->
        <!-- <div class="content">{{text}}</div> -->
        <child :clickButton="onClick" father="父组件传值"></child>
    </div>
</template>

<script>
import child from './child';

export default {
    name: 'fast-debug',
    components: { child },
    data() {
        return {
            text: ''
        }
    },
    created() {

    },
    methods: {
        onClick() {
            // this.$message(this.text);
            // console.log('父组件');
            setTimeout(() => {
                console.log('父组件');
            }, 800);
        }
    }
}
</script>

<style lang="scss" scoped>
.page {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .testbutton {
        margin: 10px;
    }

    .text {
        margin: 10px;
        width: 94%;
        height: 300px;
    }

    .content {
        margin: 10px;
        font-size: 15px;
        color: #333;
    }
}
</style>