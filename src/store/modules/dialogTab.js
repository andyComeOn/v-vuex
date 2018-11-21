export default {
	state: {
		dialogTabShow: false
	},
	getters: {
		no_show(state) {
			return !state.dialogTabShow
		}
	},
	mutations: {
		switch_dialog_tab(state) {
			state.dialogTabShow = true;
		}
	},
	actions: {
		switch_dialog_tab(context) {
			context.commit('switch_dialog_tab');
		}
	}
}