import Vue from "vue";
import Vuex, { createLogger } from "vuex";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fakeData: 1,
    auth: {
      username: "",
      accessToken: "",
    },
  },
  mutations,
  actions,
  modules: {},
  plugins: [createLogger()],
});
