<template>
  <form v-on:submit.prevent="restorepassword">
    <div class="container">
      <div class="row">
        <div class="col-md-6"><label for="password">Password</label><input type="password"
                                                                           id="password"
                                                                           v-model="password"
                                                                           class="form-control"></div>
        <div class="col-md-6"><label for="confpassword">Confirm Password</label><input id="confpassword"
                                                                                       v-model="confpassword"
                                                                                       type="password"
                                                                                       class="form-control"></div>

      </div>

    </div>
  </form>
</template>

<script>
export default {
  name: "RestorePassword", data() {
    return {confpassword: '', password: ''}
  }, methods: {
    restorepassword() {
      this.$store.dispatch('getMeetups')
    }
  }
}
</script>

<style scoped>

</style>
