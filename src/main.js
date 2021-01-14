import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Button,
  Col,
  Row,
  Form,
  FormModel,
  Radio,
  Input,
  InputNumber,
  Layout,
  Card,
  message,
  Menu,
  Breadcrumb,
  Icon,
  Spin,
} from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.config.productionTip = true;

// Use UI before router
Vue.use(Button);
Vue.use(Col);
Vue.use(Row);
Vue.use(Form);
Vue.use(FormModel);
Vue.use(Radio);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Layout);
Vue.use(Card);
Vue.use(message);
Vue.use(Breadcrumb);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Spin);

message.config({
  duration: 3,
  maxCount: 3,
});
Vue.prototype.$message = message;

new Vue({
  router,
  store,
  message,
  render: (h) => h(App),
}).$mount("#app");
