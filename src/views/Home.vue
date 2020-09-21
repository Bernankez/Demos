<template>
    <div class="page">
        <header>
            This is Home Page of demos.
        </header>
        <div class="container">
            <el-link href="/fast-debug">快速测试</el-link>
            <el-link href="/app-card">类似app store首页的card</el-link>
            <el-link href="/export-excel">导出excel</el-link>
        </div>
        <footer></footer>
    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {},
};
</script>

<style lang="scss" scope>
.page .container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
</style>
