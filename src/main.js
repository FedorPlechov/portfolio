import { createApp } from "vue";
import App from "./App.vue";
import ScrollAnimation from './directives/skrollanimation'

createApp(App).directive('scrollanimation', ScrollAnimation).mount("#app");
