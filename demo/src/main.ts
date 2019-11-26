import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

import iscroll from 'iscroll-business';

Vue.use(iscroll);

new Vue({
    render: h => h(App)
}).$mount('#app');