<template>
  <form v-on:submit.prevent="login">
    <div class="container">
      <div class="row">
        <div class="col-md-6"><label for="email">Email</label>
          <input id="email"
                 v-model="identifier"
                 type="email"
                 class="form-control"></div>
        <div class="col-md-6"><label for="password">Password</label>
          <input type="password"
                 id="password"
                 v-model="password"
                 class="form-control"></div>
      </div>

    </div>
  </form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {identifier: '', password: ''}
  },
  methods: {
    login() {
      this.$store.dispatch('login',
          {identifier: this.identifier, password: this.password});
    }
  }
}
</script>

<style scoped>

</style>
