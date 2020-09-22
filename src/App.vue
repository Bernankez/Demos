<template>
    <div id="app" class="outer">
        <div class="siderbar">
            <router-link v-for="(item, index) in menuItem" :key="index" :to="item.url">
                <div :class="{submenu: true, active: index === isIndexActive}" @click="onMenu(index)">
                    {{item.title}}
                </div>
            </router-link>
        </div>
        <router-view class="content" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            isIndexActive: 0,
            menuItem: [
                {
                    title: '主页',
                    url: './'
                },
                {
                    title: 'vue-run-sfc',
                    url: './vue-run-sfc'
                },
                {
                    title: '在线vue调试',
                    url: '/online-vue-editer'
                },
                {
                    title: '快速测试',
                    url: './fast-debug'
                },
                {
                    title: 'Excel的导出',
                    url: './export-excel'
                },
            ]
        }
    },
    methods: {
        onMenu(index) {
            this.isIndexActive = index;
        }
    }
}
</script>

<style lang="scss" scoped>
#app {
    font-family: Source Han Sans CN, Avenir, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    // color: #2c3e50;
}

a:link {
    color: #333;
    text-decoration: none;
    // cursor: default;
}

a:visited {
    color: #333;
}

a:hover {
    color: #333;
}

a:active {
    color: #333;
}

@media screen and (max-width: 600px) {
    .outer {
        display: flex;
        flex-direction: column;
    }
}

.outer {
    display: flex;
}

.outer .siderbar {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-basis: 200px;
    flex-grow: 0;
    flex-shrink: 0;
    overflow: auto;
    background-color: #fff;
}

.outer .siderbar .submenu {
    display: flex;
    align-items: center;
    padding-left: 10px;
    box-sizing: border-box;
    height: 70px;
    background-color: #fff;
    transition: all 0.3s ease;
}

.outer .siderbar .submenu:hover {
    background-color: #eee;
}

.outer .siderbar .submenu.active {
    background-color: #c6e2ff;
}

.outer .siderbar::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 10px;
}

.outer .siderbar::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    background: rgba(230, 230, 230, 100);
    transition: all 1s ease 0.5s;
}

.outer .siderbar::-webkit-scrollbar-thumb:hover {
    /*滚动条里面小方块*/
    border-radius: 10px;
    background: rgba(200, 200, 200, 100);
    transition: all 1s ease 0.5s;
}

.outer .siderbar::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    border-radius: 10px;
    background: rgba(0, 0, 0, 0);
}

.outer .content {
    flex-grow: 1;
}
</style>
