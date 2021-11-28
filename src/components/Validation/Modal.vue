<template>
  <!-- Modal -->
  <div class="modal fade"
       id="exampleModal"
       tabindex="-1"
       aria-labelledby="exampleModalLabel"
       aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"
              id="exampleModalLabel">{{ modalTitle }}</h5>
          <button type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  v-on:click="close"></button>
        </div>
        <div class="modal-body">
          {{ modalDesc }}
        </div>
        <div class="modal-footer">
          <button type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal" v-on:click="close">Close
          </button>
          <button type="button"
                  class="btn btn-primary">Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as bs from 'bootstrap'
import {mapGetters} from "vuex";


export default {
  name: "Modal",
  data() {
    return {myModal: null}
  }, computed: {
    ...mapGetters(['modalDesc', 'modalTitle'])
  },
  mounted() {
    this.myModal = new bs.Modal(document.getElementById('exampleModal'), {
      keyboard: false
    })
    this.myModal.show()
  }, methods: {
    close() {
      this.$store.dispatch('modal', false)
    }
  }
}
</script>

<style scoped>

</style>
