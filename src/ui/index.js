import Vue from 'vue';
import * as Server from '../server/index';
import * as electron from 'electron';
import App from '../components/App';

require('../common/css/reset.css');

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