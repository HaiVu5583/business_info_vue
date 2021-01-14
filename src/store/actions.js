import { get, post } from "@/api/common";
import types from "./types";
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
    const response = await post("auth/get_token", loginInfo);
    // console.log("Response login action", response);
    return response;
  },
};
