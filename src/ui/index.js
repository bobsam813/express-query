import Vue from 'vue';
import { RadonInstall } from 'radon-ui';
import App from '../components/App';

require('../common/css/reset.css');
require('radon-ui/dist/static/css/dist.css');

Vue.use(RadonInstall);

new Vue({
	el: '#app',
	template: `<div><App /></div>`,
	components: { App }
});



/*let RequestData = { ShipperCode: "EMS", LogisticCode: "9890190215507" };

Server.getLogisticsMsg({
	data: RequestData,
	success: function(data){
		console.log(data)
	}
});*/