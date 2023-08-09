import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import PacoteSophia from "app-sophia-componentes"
import "app-sophia-componentes/dist/app-sophia-componentes.css"

import ElementPlus from "element-plus";
import ptBr from "./helpers/pt-br";
import "element-plus/dist/index.css";

const app = createApp(App);

app.use(PacoteSophia);
app.use(ElementPlus, { locale: ptBr });
app.use(router);
app.mount("#app");
