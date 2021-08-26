<template>
  <div class="container-fluid">
    <if-data-binding></if-data-binding>
    <create-product></create-product>
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

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import IfDataBinding  from "./IfDataBinding";
import CreateProduct  from "./CreateProduct";

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
      boolean : false
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
  },
  computed  : { ...mapGetters(["product"]) },
  methods   : {
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
  },
  components: {
    IfDataBinding,
    CreateProduct
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
