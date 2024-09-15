import { createApp } from 'vue';
import App from './App.vue';
import LearningResource from './components/LearningResource.vue';
import './main.css';

const app = createApp(App);

app.component('learning-resource', LearningResource);

app.mount('#app');
