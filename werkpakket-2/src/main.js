import '../src/scss/main.scss'
import { createApp } from 'vue'
import { createPinia} from 'pinia';
import router from './router'
import App from './App.vue'
import { useProductenStore } from './stores/counter.js';
import Login from './views/loginView.vue'

const app = createApp(App)
const pinia = createPinia();
export default pinia;
app.use(pinia)
app.component('Login', Login)
app.use(router);

 // const productenStore = useProductenStore();
 // productenStore.setProducten();


app.mount('#app')