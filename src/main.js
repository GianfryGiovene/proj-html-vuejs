import Vue from 'vue'
import App from './App.vue'


/* imports the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* imports specific icons */
import { faRoad, faVideo, faTint, faCog, faBuilding, faChartLine, faBars} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle, faYoutube, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';



/* imports font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* adds icons to the library */
library.add(faRoad);
library.add(faBars);
library.add(faVideo);
library.add(faTint);
library.add(faCog);
library.add(faBuilding);
library.add(faChartLine);
library.add(faGoogle);
library.add(faFacebook);
library.add(faTwitter);
library.add(faInstagram);
library.add(faYoutube);

/* adds font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
