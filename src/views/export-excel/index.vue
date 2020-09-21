<template>
    <div>
        <el-button @click="onExport" type="primary">导出Excel</el-button>
        <el-table :data="tableData" style="width: 100%" :border="true" :highlight-current-row="true">
            <el-table-column>
                <el-table-column label="Example1" prop="e1" align="center"></el-table-column>
            </el-table-column>
            <el-table-column label="Example" align="center">
                <el-table-column label="Example2" prop="e2" align="center">
                </el-table-column>
                <el-table-column label="Example3" prop="e3" align="center">
                </el-table-column>
            </el-table-column>
            <el-table-column label="Example4" prop="e4" align="center"></el-table-column>
        </el-table>
    </div>
</template>

<script>
import * as EXCEL from '../../vendor/Export2Excel';

export default {
    name: 'index',
    components: {},
    data() {
        return {
            tableData: [
                {
                    e1: 'this',
                    e2: 'is',
                    e3: 'an',
                    e4: 'example'
                }
            ]
        };
    },
    created() { },
    mounted() { },
    methods: {
        onExport() {
            const multiHeader = [[
                ' ',
                'Example',
                ' ',
                'Example4'
            ]];
            const tHeader = [
                'Example1',
                'Example2',
                'Example3',
            ];
            const filterVal = [
                'e1',
                'e2',
                'e3',
                'e4',
            ];
            const merges = [
                'B1:C1',
                'D1:D2'
            ];
            const data = this.tableData.map(v => filterVal.map(j => v[j]));
            EXCEL.export_json_to_excel({
                multiHeader,
                header: tHeader,
                data,
                merges,
                filename: 'ExampleExcel',
            });
        }
    },
};
</script>

<style lang="scss" scope>
body {
    .el-table thead.is-group th {
        background: #fff;
    }
}
</style>