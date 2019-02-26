<template>
    <div class="dialog">
        <!-- 使用vuex的bak -->
        <el-dialog title="dialog" :visible.sync="$store.state.dialog.show"></el-dialog>
        <!-- <el-dialog :visible.sync="currentShow"></el-dialog> -->
    </div>
</template>

<script>
export default {
    // props: ["show"],
    // computed: {
    //     currentShow: {
    //         get() {
    //             return this.show;
    //         },
    //         set(val) {
    //             console.log(val);
    //             this.$emit("update:show", val);
    //         }
    //     }
    // }
};
</script>

<style scoped>
</style>
