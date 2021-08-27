<template>
  <div class="row my-5">
    <!--region property binding and for loop-->
    <div class="col-12 col-md-6 col-lg-4 my-3"
         v-for="product in product"
         v-bind:key="product.name">
      <div class="card">
        <p class="card-header">{{ product.name }}</p>
        <p>QUANTITY: {{ product.quantity }}</p>
        <p>PRICE: {{ product.price }}</p>
      </div>
    </div>
    <!--endregion-->
  </div>

</template>

<script>
import { mapGetters } from "vuex";

export default {
  name    : "GetProducts",
  computed: { ...mapGetters(["product"]) }
};
</script>

<style scoped>

</style>
