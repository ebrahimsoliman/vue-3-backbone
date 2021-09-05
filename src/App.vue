<template>
  <div id="nav">
    <router-link to="/">Vue</router-link>
    |
    <router-link to="/bootstrap">Bootstrap</router-link>
    |
    <router-link to="/owl">Owl Carousel</router-link>
    |
    <router-link to="/aos">Animate On Scroll</router-link>
    |
    <router-link to="/odometer">OdoMeter</router-link>
    |
    <router-link to="/fullpage">Full Page Js</router-link>

  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
