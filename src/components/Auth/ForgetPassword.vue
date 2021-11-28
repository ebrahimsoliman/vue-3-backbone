<template>
  <form v-on:submit.prevent="forgetconfemail">
    <div class="container">
      <div class="row">
        <div class="col-md-6"><label for="email">Email</label><input id="email"
                                                                     v-model="email"
                                                                     type="email"
                                                                     class="form-control"></div>
        <div class="col-md-6"><label for="confemail">Confirmation Email</label><input type="confemail"
                                                                                      id="confemail"
                                                                                      v-model="confemail"
                                                                                      class="form-control"></div>
      </div>

    </div>
  </form>
</template>

<script>
export default {
  name: "ForgetPassword", data() {
    return {email: '', confemail: ''}
  }, methods: {
    forgetconfemail() {
      this.$store.dispatch('getMeetups')
    }
  }
}
</script>

<style scoped>

</style>
