const http = require('http');
const crypto = require('crypto');
const querystring = require('querystring');
const render = require('../render/index.js');

const EBusinessID = '1266338';
const RequestType = '1002';
const DataType = '2';
const APP_KEY = '2b0f4caf-0eb5-4ab1-84c9-c9111ac9ac55';

let RequestData = { ShipperCode: "EMS", LogisticCode: "9890190215507" };	// 要用双引号不能用单引号
let EncodeRequestData = querystring.escape(JSON.stringify(RequestData));
let DataMD5 = crypto.createHash('md5').update(JSON.stringify(RequestData) + APP_KEY).digest('hex');
let DataSign = new Buffer(DataMD5, 'utf8').toString('base64');

let oData = { RequestData: EncodeRequestData, EBusinessID: EBusinessID, RequestType: RequestType, DataSign: DataSign, DataType: DataType};
let sData = querystring.stringify(oData);

let oReqOptions = {
  	hostname: 'api.kdniao.cc',
  	path: '/Ebusiness/EbusinessOrderHandle.aspx',
  	method: 'POST',
  	headers: {
	    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
	    'Content-Length': Buffer.byteLength(sData)
  	}
};

let req = http.request(oReqOptions, (res) => {
	res.setEncoding('utf8');
	if(res.statusCode >= 200 && res.statusCode < 400){
		let body = '';
		res.on('data', (chunk) => {
			body += `${chunk}`;
		}).on('end', () => {
			render.render(JSON.parse(body));
		});
	}else{
		console.log(`request error!`);
	}
});


req.on('error', (e) => {
  	console.log(`problem with request: ${e.message}`);
});

req.write(sData);
req.end();