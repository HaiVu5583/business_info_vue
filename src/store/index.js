import Vue from "vue";
import Vuex, { createLogger } from "vuex";
import { INCREMENT } from "./mutations_type";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fakeData: 1,
  },
  mutations: {
    [INCREMENT](state) {
      state.fakeData++;
    },
  },
  actions: {
    incrementAsyns({ commit }) {
      setTimeout(() => {
        commit(INCREMENT);
      }, 1000);
    },
  },
  modules: {},
  plugins: [createLogger()],
});
