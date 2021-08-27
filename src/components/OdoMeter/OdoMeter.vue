<template>
  <div id="odometer"
       class="odometer">123
  </div>
</template>

<script>
export default {
  name: "OdoMeter",
  mounted() {
    setTimeout(function() {
                 document.getElementById("odometer").innerHTML = 456;
               },
               1000);
  }
};
</script>

<style scoped>
.odometer {
  font-size: 100px;
}
</style>
