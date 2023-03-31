import { createApp } from 'vue'
import App from './App.vue'
import routers from './router/router.js'
import naive from 'naive-ui/es/preset'
import { createPinia } from "pinia";
let app = createApp(App)
app.use(routers)
app.use(naive)
app.use(createPinia());
app.mount('#app')
