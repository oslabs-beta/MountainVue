import { createApp } from "vue";
import App from "../../src/webviews/src/App.vue";
import "../../src/webviews/src/registerServiceWorker";
import store from "../../src/webviews/src/store";

createApp(App).use(store).mount("#app");