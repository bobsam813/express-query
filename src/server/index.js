import * as Utils from '../common/utils';

const http = require('http');
const crypto = require('crypto');
const url = require('url');
const querystring = require('querystring');

const EBusinessID = '1266338';
const RequestType = '1002';
const DataType = '2';
const APP_KEY = '2b0f4caf-0eb5-4ab1-84c9-c9111ac9ac55';

module.exports = {
	request: request,
	getLogisticsMsg: getLogisticsMsg
};

function request(config){
	let that = this;
	let reqUrl = config.url;
	let oUrl = url.parse(reqUrl);
	let protocol = oUrl.protocol || 'http:';
	let hostname = oUrl.hostname;
	let path = oUrl.path;
	let method = config.type.toLowerCase() || 'GET';
	let headers = config.headers;
	let success = config.success;
	let error = config.error;
	let oReqOptions = {
		protocol: protocol,
		hostname: hostname,
		path: path,
		method: method,
	  	headers: headers
	};
	let sData = querystring.stringify(config.data);

	let req = http.request(oReqOptions, (res) => {
		res.setEncoding('utf8');
		let code = res.statusCode;
		if(code >= 200 && code < 400){
			let body = '';
			res.on('data', (chunk) => {
				body += `${chunk}`;
			}).on('end', () => {
				body = JSON.parse(body);
				success && success.call(that, body, code);
			});
		}else{
			error && error.call(that, code);
		}
	});

	req.on('error', (e) => {
	  	error && error.call(that, e.message);
	});

	req.write(sData);
	req.end();
}

function getLogisticsMsg(config){
	const sApi = 'http://api.kdniao.cc/Ebusiness/EbusinessOrderHandle.aspx';
	let oData = config.data;
	let oEncodeRequestData = querystring.escape(JSON.stringify(oData));
	let DataMD5 = Utils.md5(JSON.stringify(oData) + APP_KEY);
	let DataSign = Utils.base64(DataMD5);
	let oReqData = { RequestData: oEncodeRequestData, EBusinessID: EBusinessID, RequestType: RequestType, DataSign: DataSign, DataType: DataType};
	let sData = querystring.stringify(oReqData);

	request({
		url: sApi,
		data: oReqData,
		type: 'post',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
			'Content-Length': Buffer.byteLength(sData)
		},
		success: config.success,
		error: config.error
	});
}