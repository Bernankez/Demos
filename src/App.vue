<template>
    <div id="app">
        <div class="back">
            <el-button :plain="true" @click="onBack">返回</el-button>
        </div>
        <!-- <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div> -->
        <router-view />
    </div>
</template>

<script>
export default {
    methods: {
        onBack() {
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss">
#app {
    font-family: Source Han Sans CN, Avenir, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    // color: #2c3e50;
}
.back{
  margin: 10px;
}
</style>
