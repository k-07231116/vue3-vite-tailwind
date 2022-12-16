import setupPlugins from './plugins';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
setupPlugins();

app.mount('#app');
