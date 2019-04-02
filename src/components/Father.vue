<template>
    <div class="Father">

        <!-- vuex的bak -->
        <div style="margin-bottom: 30px;">
            <a href="javascript:;" @click="$store.dispatch('switch_dialog')">点击</a>
        </div>
        <!-- <a href="javascript:;" @click="show = true">点击</a> -->
        <!-- sync非简写 -->
        <!-- <t-dialog  :show="show" @update:show="show = $event"></t-dialog>  -->
        <!-- <t-dialog :show.sync="show"></t-dialog> -->

        <div style="">
            <!-- <a href="javascript:;" @click="$store.state.dialogTab.dialogTabShow = true">打开嵌套表格的 Dialog</a> -->
            <!-- $store.dispatch('switch_dialog_tab') -->
			<a href="javascript:;" @click="$store.dispatch('switch_dialog_tab')">打开嵌套表格的 Dialog</a>
        </div>
        
        <m-dialog></m-dialog>
        <tab-dialog></tab-dialog>
        
        <el-button v-show="$store.getters.notshow" type="primary" icon="el-icon-edit" circle></el-button>
		<el-button v-show="$store.getters.no_show" type="danger" icon="el-icon-delete" circle></el-button>

        <el-button type="primary" icon="el-icon-delete" circle @click="kk"></el-button>

        <mu-dialog width="360" transition="slide-bottom" fullscreen :open.sync="zbCityVisible">
            
        </mu-dialog>
    </div>
</template>

<script>
import dialog from "@/components/dialog.vue";
import dialogTab from "@/components/dialogTab.vue";
export default {
    name: "Father",
    components: {
        "m-dialog": dialog,
        "tab-dialog": dialogTab
    },
    data() {
        return {
            // show: false
            zbCityVisible: false
        };
	},
	methods: {
		dialog_tab(){
			// if () {}
        },
        kk () {
            this.zbCityVisible = true;
        }
	}
};
</script>

<style scoped>

/* el-button el-button--primary is-circle */
.el-button {
    width: 50px;
    height: 50px;
}
.el-button /deep/ .el-icon-edit:before {
    /* content: "\E61C"; */
    content: "\E612"; 
}

.mu-dialog-wrapper /deep/ .mu-dialog-body {
  height: 100%;
}
</style>
