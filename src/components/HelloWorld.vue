<template>
  <div class="container-fluid">

    <div class="row my-5">
      <!--      start if-->
      <div class="col-12 col-md-6">
        <div v-if="boolean">this is a conditional div</div>
        <button class="btn  btn-outline-primary mt-3"
                v-on:click="toggle">toggle
        </button>
      </div>
      <!--end if-->
      <div class="col-12 col-md-6">
        <!--        start data binding-->
        <div>{{ i }}</div>
        <!--        end data binding-->
        <!--        start event binding-->
        <button class="btn btn-primary mt-3"
                v-on:click="increment">Increment
        </button>
        <!--        end event binding-->
      </div>
    </div>
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
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name : "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      name    : "",
      price   : 0,
      quantity: 0,
      i       : 1,
      boolean : false,
      /*products: [{
        name    : "cheese ",
        price   : 5,
        quantity: 3
      },
                 {
                   name    : "cheese ",
                   price   : 5,
                   quantity: 3
                 },
                 {
                   name    : "cheese ",
                   price   : 5,
                   quantity: 3
                 }]*/
    };
  },computed:{...mapGetters(['product'])},
  methods: {
    //to add products into array
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
    },
    increment() {
      this.i++;
    },
    toggle() {
      this.boolean = !this.boolean;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped
       lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
