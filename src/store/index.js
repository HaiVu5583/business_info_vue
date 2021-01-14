import Vue from "vue";
import Vuex, { createLogger } from "vuex";
import actions from "./actions";
import mutations from "./mutations";

Vue.use(Vuex);
const getAuth = () => {
  const userStr = localStorage.getItem("user");
  try {
    const userInfo = JSON.parse(userStr);
    console.log("Previous user info", userInfo);
    return userInfo;
  } catch (err) {
    return null;
  }
};

export default new Vuex.Store({
  state: {
    fakeData: 1,
    auth: getAuth(),
  },
  mutations,
  actions,
  modules: {},
  plugins: [createLogger()],
});
