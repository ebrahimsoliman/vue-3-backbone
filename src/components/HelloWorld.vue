<template>
  <div class="container">
    <if-data-binding></if-data-binding>
    <create-product></create-product>
    <get-products></get-products>
  </div>
</template>

<script>
import IfDataBinding from "./Vue/IfDataBinding";
import CreateProduct from "./Vue/CreateProduct";
import GetProducts   from "./Vue/GetProducts";

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

  methods   : {

    increment() {
      this.i++;
    },
    toggle() {
      this.boolean = !this.boolean;
    }
  },
  components: {
    IfDataBinding,
    CreateProduct,
    GetProducts
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
