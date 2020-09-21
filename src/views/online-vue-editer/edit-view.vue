<template>
    <div class="edit-box">
        <div class="btn-box">
            <el-button @click="handleClick">运行代码</el-button>
            <el-button class="edit" @click="edit">重新编辑</el-button>
        </div>
        <div class="style-box">
            <textarea :disabled="disabled" name="code" placeholder="请在此编写.vue文件" @input="handleChange"></textarea>
        </div>
    </div>
</template>

<script>
export default {
    name: 'editView',
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            currentValue: this.value,
            disabled: false
        }
    },
    methods: {
        handleChange(e) {
            const val = e.target.value
            this.$emit('input', val)
        },
        handleClick() {
            this.$emit('running')
            if (this.currentValue) {
                this.disabled = true
            }
        },
        edit() {
            this.disabled = false
        }
    }
}
</script>

<style lang="scss" scoped>
.edit-box {
    display: flex;
    flex-direction: column;
}

.edit-box .btn-box {
    display: flex;
    justify-content: space-evenly;
    padding: 10px;
    box-sizing: border-box;
}
</style>