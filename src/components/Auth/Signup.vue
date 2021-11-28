<template>
  <form v-on:submit.prevent="signup">
    <div class="container">
      <div class="row">
        <div class="col-md-6"><label for="email">Username</label><input id="username"
                                                                        v-model="username"
                                                                        type="text"
                                                                        class="form-control"></div>
        <div class="col-md-6"><label for="email">Email</label><input id="email"
                                                                     v-model="email"
                                                                     type="email"
                                                                     class="form-control"></div>
        <div class="col-md-6"><label for="password">Password</label><input type="password"
                                                                           id="password"
                                                                           v-model="password"
                                                                           class="form-control"></div>
        <div class="col-md-6"><label for="confpassword">Password</label><input type="password"
                                                                               id="confpassword"
                                                                               v-model="confpassword"
                                                                               class="form-control"></div>
      </div>

    </div>
  </form>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {username: '', email: '', password: '', confpassword: ''}
  }, methods: {
    signup() {
      this.$store.dispatch('signup',
          {username: this.username, email: this.email, password: this.password, confpassword: this.confpassword})
    }
  }
}
</script>

<style scoped>

</style>
