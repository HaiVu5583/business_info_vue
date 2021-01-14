import types from "./types";
export default {
  [types.INCREMENT](state) {
    state.fakeData++;
  },
  [types.SAVE_LOGIN_DATA](state, loginData) {
    state.auth = {
      ...state.auth,
      ...loginData,
    };
  },
};
