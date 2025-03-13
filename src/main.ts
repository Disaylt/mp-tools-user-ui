import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia';
import route from './route/route';
import PrimeVue from 'primevue/config';
import primeVueComponentManager from './presets/PrimeVueComponentManager';
import Aura from '@primeuix/themes/aura'

const app = createApp(App);

primeVueComponentManager.addTo(app);
app.use(createPinia());
app.use(route);
app.use(PrimeVue, {
        theme: {
            preset: Aura,
            ripple: true,
            options: {
                prefix: 'p',
                darkModeSelector: ".app-dark"
            },
            cssLayer: {
                name: 'primevue',
                order: 'theme, base, primevue'
            }
        }
    }
);


app.mount('#app');