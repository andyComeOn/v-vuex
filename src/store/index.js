import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import dialog from './modules/dialog';
import dialogTab from './modules/dialogTab';

export default new Vuex.Store({
    modules: {
        dialog: dialog,
        dialogTab: dialogTab
    }
})
