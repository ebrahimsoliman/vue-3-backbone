<template>
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
</template>

<script>

export default {
  name: "IfDataBinding",
  data() {
    return {

      i      : 1,
      boolean: false

    };
  },

  methods: {
    //to add products into array
    increment() {
      this.i++;
    },
    toggle() {
      this.boolean = !this.boolean;
    }
  }
};
</script>

<style scoped>

</style>
