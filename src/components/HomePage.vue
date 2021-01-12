<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <a-button type="danger" @click="logout">
      Logout
    </a-button>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "HomePage",
  props: {
    msg: String,
  },
  methods: {
    logout: function() {
      localStorage.removeItem("token");
      router.push({ name: "Login" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
