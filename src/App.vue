<template>
  <Loading v-if="loading"/>
  <Toasts v-if="toast"/>
  <Modal v-if="modal"/>
  <div id="nav">
    <router-link to="/">Vue</router-link>
    |
    <router-link to="/bootstrap">Bootstrap</router-link>
    |
    <router-link to="/owl">Owl Carousel</router-link>
    |
    <router-link to="/aos">Animate On Scroll</router-link>
    |
    <router-link to="/odometer">OdoMeter</router-link>
    |
    <a href="/fullpage">Full Page Js</a>
    |
    <a href="/api">API</a>

  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import Loading from "./components/Validation/Loading";
import {mapGetters} from "vuex";
import Toasts from "./components/Validation/Toasts";
import Modal from "./components/Validation/Modal";


export default {
  components: {Modal, Toasts, Loading},
  data() {
    return {load: false}
  },
  watch: {
    loading: function () {
      this.load = this.loading
      console.log(this.load)
    },
  }, mounted() {
    this.$store.dispatch('tryLogin');
  },
  computed: {...mapGetters(["loading", "toast", "modal"])},

}
</script>
