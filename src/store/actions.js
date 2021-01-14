import { get, post } from "@/api/common";
import types from "./types";

import authActions from "./authActions";
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
  ...authActions,
};
