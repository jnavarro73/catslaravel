
require('./bootstrap');

window.Vue = require('vue');

window.axios = require('axios');

window.axios.defaults.headers.common['Access-Control-Allow-Origin']='*';  


Vue.component('searchlist-component', require('./components/SearchlistComponent.vue').default);

Vue.component('factcat-component', require('./components/FactcatComponent.vue').default);

const app = new Vue({
    el: '#app'
});
