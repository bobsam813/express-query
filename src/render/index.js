const {app, dialog} = require('electron').remote;
const server = require('../server/app.js');
const Vue = require('vue');

let RequestData = { ShipperCode: "EMS", LogisticCode: "9890190215507" };	// 要用双引号不能用单引号

server.getLogisticsMsg({
	data: RequestData,
	success: function(data){
		console.log(data)
	}
});