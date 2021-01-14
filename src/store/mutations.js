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
  [types.CLEAR_LOGIN_DATA](state) {
    state.auth = null;
  },
};
