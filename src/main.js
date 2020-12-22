/**
 * NOTE - This file only exists for development purpose.
 * It will help me to run and test the form
 */


import Vue from 'vue'
import App from './App.vue'
import {VueFormBuilderPlugin} from "@/index";
// import messages from './views/builder/prueba-locales.json';
import VueI18n from 'vue-i18n';


Vue.config.productionTip = false;

Vue.use(VueFormBuilderPlugin);
Vue.use(VueI18n);

const messages = {
  en: {
    message: {
      hello: 'hello world'
    },
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    },
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'ja', // set locale
  messages, // set locale messages
})

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
