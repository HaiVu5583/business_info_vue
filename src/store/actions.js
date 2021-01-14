import { get, post } from "@/api/common";
import types from "./types";
import router from "@/router";
import i18n from "@/locale";

export default {
  incrementAsyns({ commit }) {
    setTimeout(() => {
      commit(types.INCREMENT);
    }, 1000);
  },
  async makeRequest() {
    const response = await get("auth/test");
    return response;
  },

  async login({ commit, dispatch }, loginInfo) {
    console.log("Commit dispatch", commit, dispatch);
    console.log("logn info", loginInfo);
    try {
      const response = await post("auth/get_token", loginInfo);
      console.log("Response", response);
      // console.log("Vm", this._vm.$message);
      if (response.status == 200) {
        const userInfo = response.data;
        console.log("Response data", userInfo);
        this._vm.$message.success(i18n.t("message.welcome_back"));
        localStorage.setItem("user", JSON.stringify(userInfo));
        commit(types.SAVE_LOGIN_DATA, userInfo);
        router.push({ name: "Home" });
      } else if (response.status == 401) {
        this._vm.$message.error(i18n.t("message.invalid_username_password"));
      } else {
        this._vm.$message.error(i18n.t("message.general_error"));
      }
      return true;
    } catch (err) {
      this._vm.$message.error(i18n.t("message.general_error"));
      return true;
    }
  },

  async logout({ commit, dispatch }) {
    localStorage.removeItem("user");
    commit(types.CLEAR_LOGIN_DATA);
    router.push({ name: "Login" });
  },
};
