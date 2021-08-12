import {createApp} from "vue";
import App from "./App.vue";
import ScrollAnimation from './directives/skrollanimation'
import ScrollNav from './directives/skrollnavanimate'

const app = createApp(App)
app.directive('scrollanimation', ScrollAnimation)
app.directive("scrollnav", ScrollNav)
app.mount("#app");
