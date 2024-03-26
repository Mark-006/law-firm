import "./assets/style.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faArrowRightLong,
  faLocationDot,
  faPhone,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faYoutube,
  faGithub,
  faTwitter,
  faFacebook,
  faInstagram,
  faPhone,
  faArrowRightLong,
  faLocationDot,
  faPhone,
  faMessage
);

/* add font awesome icon component */

const app = createApp(App).component("fa", FontAwesomeIcon);

app.use(createPinia());
app.use(router);

app.mount("#app");
