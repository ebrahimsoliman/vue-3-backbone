<template>
  <div id="odometer"
       class="odometer">123
  </div>
</template>

<script>
import Odometer from "odometer/odometer";

export default {
  name: "OdoMeter",
  mounted() {
    let el = document.getElementById("odometer")
    new Odometer({
                            el   : el,
                            value: 0,
                            // Any option (other than auto and selector) can be passed in here
                            format: "",
                            theme : "default"
                          });

    el.innerHTML = 555
  }
};
</script>

<style scoped>
.odometer {
  font-size: 100px;
}
</style>
