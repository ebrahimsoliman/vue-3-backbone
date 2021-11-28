<template>
  <div v-bind:class="'toast '+toastClass"
       role="alert"
       data-bs-autohide="false"
       aria-live="assertive"
       aria-atomic="true">
    <div class="toast-header">
      <img v-bind:src="require(`@/assets/${toastImage}`)"
           class="rounded me-2 img-fluid"
           alt="...">
      <strong class="me-auto">{{ toastTitle }}</strong>
      <small>11 mins ago</small>
      <button type="button"
              class="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
              v-on:click="close"></button>
    </div>
    <div class="toast-body">
      {{ toastDesc }}
    </div>
  </div>
</template>

<script>
import {Toast} from 'bootstrap'
import {mapGetters} from "vuex";


export default {
  name: "Toasts", data() {
    return {toastList: []}
  },
  mounted() {
    let toastElList = [].slice.call(document.querySelectorAll('.toast'))
    // eslint-disable-next-line no-unused-vars
    this.toastList = toastElList.map(function (toastEl) {
      return new Toast(toastEl, {})
    })
    this.toastList[0].show()

  },
  methods: {
    close() {
      this.$store.dispatch('toast', false)
    }
  }, computed: {...mapGetters(['toast', 'toastTitle', 'toastDesc', 'toastImage', 'toastClass'])}
}
</script>

<style scoped>
.toast {
  position: absolute;
  top: 5%;
  left: 3%;
}

img {
  width: 25px;
  height: 25px;
}
</style>
