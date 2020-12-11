<template>
    <div class="page">
        <el-button class="testbutton" type="primary" @click="onClick">button</el-button>
        <!-- <el-input class="text" type="textarea" :autosize="{ minRows: 10}" v-model="text"></el-input> -->
        <!-- <div class="content">{{text}}</div> -->
        <child :clickButton="onClick" father="父组件传值"></child>

        <el-button plain @click="onTestClick">测试</el-button>
        <el-table :data="tableData" @selection-change="onSelectChange">
            <el-table-column type="selection"></el-table-column>
            <el-table-column prop="ttt" label="Ceshi"></el-table-column>
        </el-table>
    </div>
</template>

<script>
import child from './child';

export default {
    name: 'fast-debug',
    components: { child },
    data() {
        return {
            text: '',
            tableSelected: [],
            tableData: [
                {
                    ttt: '123',
                },
                {
                    ttt: '12344',
                },
                {
                    ttt: '432',
                },
                {
                    ttt: 'ae',
                },
            ],
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
        },
        onTestClick() {
            this.tableData.forEach(item => {
                this.tableSelected.push(item);
            })
        },
        onSelectChange(selected) {
            this.tableSelected = selected;
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