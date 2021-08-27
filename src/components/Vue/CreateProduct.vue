<template>
  <div class="row my-5">
    <div class="col-12">
      <!--region Forms-->
      <!--        form events (prevent default)-->
      <form v-on:submit.prevent="addproduct()">
        <div class="row">
          <div class="col-7 mx-auto">
            <label for="name">Name</label>
            <!--              two way binding-->
            <input type="text"
                   class="form-control"
                   id="name"
                   v-model="name">
          </div>
          <div class="col-7 mx-auto">

            <label for="quantity">Quantity</label>
            <input type="number"
                   class="form-control"
                   v-model="quantity"
                   id="quantity">
          </div>
          <div class="col-7 mx-auto">

            <label for="price">Price</label>

            <input type="number"
                   class="form-control mb-3"
                   v-model="price"
                   id="price">
          </div>
          <div class="col-7 mx-auto">

            <input type="submit"
                   value="add product"
                   class="btn-outline-success btn">
          </div>
        </div>
      </form>
      <!--endregion-->
    </div>
  </div>
</template>

<script>
export default {
  name   : "CreateProduct",
  data() {
    return {
      name    : "",
      price   : 0,
      quantity: 0,
    };
  },
  methods: {
    addproduct() {
      /* this.products.push({
       name    : this.name,
       price   : this.price,
       quantity: this.quantity
       });*/
      this.$store.dispatch("addProduct",
                           {
                             name    : this.name,
                             price   : this.price,
                             quantity: this.quantity
                           });
    }
  }
};
</script>

<style scoped>

</style>
