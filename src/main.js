import { createApp }     from "vue";
import App               from "./App.vue";
import "./registerServiceWorker";
import router            from "./router";
import store             from "./store";
//imported global packages
import "@popperjs/core/dist/umd/popper";
import "jquery/dist/jquery";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "animate.css/source/animate.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "owl.carousel/dist/owl.carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "aos/dist/aos";
import "aos/dist/aos.css";
import "odometer/odometer";
import "odometer/themes/odometer-theme-default.css";
import "fullpage.js/dist/fullpage.css";
import { Quasar }        from "quasar";
import quasarUserOptions from "./quasar-user-options";
import "fullpage.js/dist/fullpage.js";
import "fullpage.js/vendors/easings.min";
import "fullpage.js/dist/fullpage.extensions.min";
createApp(App)
  .use(Quasar,
       quasarUserOptions)
  .use(Quasar,
       quasarUserOptions)
  .use(store)
  .use(router)
  .mount("#app");
