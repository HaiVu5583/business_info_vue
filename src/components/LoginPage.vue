<template>
  <a-row id="login-row">
    <a-col :span="8" :offset="8">
      <a-card>
        <a-form :label-align="align">
          <a-form-item :label="$t('message.username')" :colon="false">
            <a-input v-model="username" />
          </a-form-item>

          <a-form-item :label="$t('message.password')" :colon="false">
            <a-input-password
              :visibilityToggle="false"
              v-model="password"
              autocomplete="on"
            />
          </a-form-item>

          <a-form-item>
            <a-spin :spinning="loading">
              <div class="spin-content">
                <a-button type="primary" @click="login">
                  {{ $t("message.login") }}
                </a-button>
              </div>
            </a-spin>
          </a-form-item>
        </a-form>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
import "ant-design-vue/dist/antd.css";
// import router from "@/router";
export default {
  name: "LoginPage",
  data: function() {
    return {
      align: "left",
      username: "",
      password: "",
      loading: false,
    };
  },
  methods: {
    login: function() {
      this.loading = true;
      this.$store
        .dispatch("login", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
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
