export default {
	state: {
		show: false
	},
	actions: {
		switch_dialog(context){
			context.commit('switch_dialog');
		}
	},
	mutations: {
		switch_dialog(state) {
			state.show = true;
		}
	},
	
	getters: {
		notshow(state){
			return !state.show
		}
	},
	
}