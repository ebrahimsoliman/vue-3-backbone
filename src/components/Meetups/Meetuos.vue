<template>
  <h1 v-if="loading">LOADING!</h1>
  <div class="container">
    <div class="row">
      <div v-bind:key="meetu"
           v-for="meetu of meetup"
           class="col-md-4">
        <div class="card mt-3">
          <div class="card-header"><h2 class="card-title">{{ meetu.title }}</h2></div>
          <div class="card-body p-0"><img class="img-fluid"
                                          v-bind:src="meetu.image"
                                          alt=""></div>
          <div class="card-footer"><p>{{ meetu.description }}</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";


export default {
  name: "Meetuos",
  data() {
    return {loading: false}
  },
  methods: {
    getData() {
      this.loading = true;
      try {
        this.$store.dispatch('getMeetups');
        this.$store.dispatch('createMeetups');
        this.loading = false;
      } catch (e) {
        this.loading = false;

      }
    }
  },
  computed: {
    ...mapGetters(['meetup'])
  }
  , mounted() {
    this.getData()
  }, watch: {
    meetup() {

    }
  }
}
</script>

<style scoped>

</style>
