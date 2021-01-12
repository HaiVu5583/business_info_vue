<template>
  <a-row id="login-row">
    <a-col :span="8" :offset="8">
      <a-card>
        <a-form :label-align="align">
          <a-form-item label="Username" :colon="false">
            <a-input v-model="username" />
          </a-form-item>

          <a-form-item label="Password" :colon="false">
            <a-input-password
              :visibilityToggle="false"
              v-model="password"
              autocomplete="on"
            />
          </a-form-item>
          <a-form-item>
            <a-button type="primary" @click="login">
              Login
            </a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
import "ant-design-vue/dist/antd.css";
import router from "@/router";
export default {
  name: "LoginPage",
  data: function() {
    return {
      align: "left",
      username: "",
      password: "",
    };
  },
  methods: {
    login: function() {
      // const user = localStorage.getItem("user");
      // console.log("Old", user);
      // localStorage.setItem(
      //   "user",
      //   JSON.stringify({ username: this.username, password: this.password })
      // );
      this.$message.info(`User: ${this.username}, Pass: ${this.password}`);
      localStorage.setItem("token", "what a token");
      router.push({ name: "Home" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login-row {
  margin-top: 100px;
}
</style>
