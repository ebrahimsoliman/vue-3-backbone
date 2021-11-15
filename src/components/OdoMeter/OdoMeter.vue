<template>
  <div id="odometer"
       class="odometer">123
  </div>
  <lottie-player
      autoplay
      controls
      loop
      mode="normal"
      v-bind:src="require('@/assets/ani/1.json')"
      style="width: 320px"
  >
  </lottie-player>  <lottie-player
      autoplay
      controls
      loop
      mode="normal"
      v-bind:src="require('@/assets/ani/2.json')"
      style="width: 320px"
  >
  </lottie-player>  <lottie-player
      autoplay
      controls
      loop
      mode="normal"
      v-bind:src="require('@/assets/ani/3.json')"
      style="width: 320px"
  >
  </lottie-player>  <lottie-player
      autoplay
      controls
      loop
      mode="normal"
      v-bind:src="require('@/assets/ani/4.json')"
      style="width: 320px"
  >
  </lottie-player>  <lottie-player
      autoplay
      controls
      loop
      mode="normal"
      v-bind:src="require('@/assets/ani/5.json')"
      style="width: 320px"
  >
  </lottie-player>  <lottie-player
      autoplay
      controls
      loop
      mode="normal"
      v-bind:src="require('@/assets/ani/6.json')"
      style="width: 320px"
  >
  </lottie-player>  <lottie-player
      autoplay
      controls
      loop
      mode="normal"
      v-bind:src="require('@/assets/ani/7.json')"
      style="width: 320px"
  >
  </lottie-player>
</template>

<script>
import Odometer from "odometer/odometer";


export default {
  name: "OdoMeter",
  mounted() {
    let el = document.getElementById("odometer");
    new Odometer({
      el: el,
      value: 0,
      format: "",
      theme: "default"
    });

    el.innerHTML = 123;
  }
};
</script>

<style scoped>
.odometer {
  font-size: 100px;
}lottie-player{
   display: inline;
 }
</style>
