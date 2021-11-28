<template>
  <Signup/>
  <Login/>
  <ForgetPassword/>
</template>

<script>
import Login from "../components/Auth/Login";
import Signup from "../components/Auth/Signup";
import ForgetPassword from "../components/Auth/ForgetPassword";


export default {
  name: "Auth",
  components: {ForgetPassword, Signup, Login}
}
</script>

<style scoped>

</style>
