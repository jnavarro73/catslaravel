
require('./bootstrap');
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

window.Vue = require('vue');

window.axios = require('axios');

window.axios.defaults.headers.common['Access-Control-Allow-Origin']='*';  

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.component('searchlist-component', require('./components/SearchlistComponent.vue').default);

Vue.component('factcat-component', require('./components/FactcatComponent.vue').default);

const app = new Vue({
    el: '#app'
});
