<template>
    <vue-run-sfc :js-labs="jsLabs" :css-labs="cssLabs" title="在线vue调试" :row="true" height="400px" :isHideHeader="false" :open="true" :code="code">
    </vue-run-sfc>
</template>

<script>
import { VueRunSfc } from "vue-run-sfc";

export default {
    name: 'online-vue-debug',
    components: { VueRunSfc },
    data() {
        return {
            jsLabs: ["https://cdn.jsdelivr.net/npm/element-ui@2.12.0/lib/index.js"],
            cssLabs: ["https://cdn.jsdelivr.net/npm/element-ui@2.12.0/lib/theme-chalk/index.css"],
            code: `<template>
    <div class="page">
        <el-button class="testbutton" type="primary" @click="onClick">button</el-button>
        <el-input class="text" type="textarea" :autosize="{ minRows: 10}" v-model="text"></el-input>
        <div class="content">{{text}}</div>
    </div>
</template>

<script>
export default {
    name: 'fast-debug',
    components: {},
    data() {
        return {
            text: ''
        }
    },
    created() {

    },
    methods: {
        onClick() {
            this.$message(this.text);
        }
    }
}
<\/script>

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
</style>`,
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
</style>