<template>
    <div class="page">
        <edit-view v-model="code" @running="running"></edit-view>
        <running-view :value="code" ref="run"></running-view>
    </div>
</template>
<script>
import editView from './edit-view'
import runningView from './running-view'

export default {
    name: 'online-vue-editer',
    components: {
        editView,
        runningView
    },
    data() {
        return {
            code: ''
        }
    },
    methods: {
        running() {
            this.$refs.run.reset()
            this.$refs.run.buildDom()
        }
    }
}
</script>

<style lang="scss" scoped>
.page {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>