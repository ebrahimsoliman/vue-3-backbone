<template>
  <div id="fullpage">
    <div class="section">Some section</div>
    <div class="section">Some section</div>
    <div class="section">Some section</div>
    <div class="section">Some section</div>
  </div>
</template>

<script>
import fullpage from "fullpage.js";

export default {
  name: "FullPageJs",
  data() {
    return { fb: new fullpage };
  },
  mounted() {
    this.fb = new fullpage("#fullpage",
                           {
                             //options here
                             licenseKey        : "26BE4772-4F364C6B-AE53383B-B3B3A766",
                             autoScrolling     : true,
                             scrollHorizontally: true
                           });

  },
  unmounted() {
    this.fb.destroy();
  }
};
</script>

<style scoped>

</style>
