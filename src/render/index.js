const {app} = require('electron').remote;

module.exports = {
	render: (data) => {
		console.log(data);
		console.log(app.getVersion())
	}
};