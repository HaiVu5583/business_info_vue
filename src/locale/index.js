import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "./en";
import vi from "./vi";

Vue.use(VueI18n);
const messages = {
  en: {
    message: en,
  },
  vi: {
    message: vi,
  },
};

export default new VueI18n({
  locale: "vi",
  fallbackLocale: "en",
  messages,
});
