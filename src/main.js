import Vue from 'vue'
import App from './App.vue'


/* imports the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* imports specific icons */
import { faRoad } from '@fortawesome/free-solid-svg-icons';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { faTint } from '@fortawesome/free-solid-svg-icons';

/* imports font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* adds icons to the library */
library.add(faRoad);
library.add(faVideo);
library.add(faTint);

/* adds font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
