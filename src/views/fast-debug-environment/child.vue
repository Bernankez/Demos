<template>
    <div>
        <div>我是子组件</div>
        <el-button plain @click="triggerFather">触发父组件事件</el-button>
    </div>
</template>

<script>
export default {
    name: 'child',
    components: {},
    props: {
        father: {
            type: String,
            defult: null,
        },
        clickButton: {
            type: Function,
            default: null,
        }
    },
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
        triggerFather(){
            // this.$emit('clickButton');
            this.clickButton();
            console.log('子组件');
        }
    }
}
</script>

<style lang="scss" scoped>
</style>