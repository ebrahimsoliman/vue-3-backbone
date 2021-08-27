<template>
  <div class="owl-carousel owl-theme">
    <div class="item">
      <h4>1</h4>
    </div>
    <div class="item">
      <h4>2</h4>
    </div>
    <div class="item">
      <h4>3</h4>
    </div>
    <div class="item">
      <h4>4</h4>
    </div>
    <div class="item">
      <h4>5</h4>
    </div>
    <div class="item">
      <h4>6</h4>
    </div>
    <div class="item">
      <h4>7</h4>
    </div>
    <div class="item">
      <h4>8</h4>
    </div>
    <div class="item">
      <h4>9</h4>
    </div>
    <div class="item">
      <h4>10</h4>
    </div>
    <div class="item">
      <h4>11</h4>
    </div>
    <div class="item">
      <h4>12</h4>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "OwlCarouselFullOptions",
  mounted() {
    $(".owl-carousel")
      .owlCarousel({
                     loop              : true,
                     margin            : 10,
                     nav               : true,
                     freeDrag          : true,
                     autoplay          : true,
                     autoplayTimeout   : 1000,
                     autoplayHoverPause: true,
                     smartSpeed        : 1000,
                     callbacks         : true,
                     video             : true,
                     animateOut        : "slideOutDown",
                     animateIn         : "flipInX",
                     responsive        : {
                       0: {
                         items: 1
                       }
                     }
                   });
  }
};
//don't forget to import global files into main.js
//docs https://owlcarousel2.github.io/OwlCarousel2/docs/started-welcome.html
</script>

<style scoped>

</style>
