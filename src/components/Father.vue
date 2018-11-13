<template>
    <div class="Father">
        
            <!-- vuex的bak -->
            <a href="javascript:;" @click="$store.state.show = true">点击</a>
            <!-- <a href="javascript:;" @click="show = true">点击</a> -->
            <!-- sync非简写 -->
            <!-- <t-dialog  :show="show" @update:show="show = $event"></t-dialog>  -->
            <!-- <t-dialog :show.sync="show"></t-dialog> -->
            <t-dialog></t-dialog>
        
    </div>
</template>

<script>
import dialog from '@/components/dialog.vue'
export default {
    name: "Father",
    components: {
        "t-dialog": dialog
    },
    data() {
        return {
            // show: false
        };
    }
};
</script>

<style scoped>
</style>
