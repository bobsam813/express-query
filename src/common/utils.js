const crypto = require('crypto');

export {md5, base64, trim};

function md5(str){
	if(str){
		return crypto.createHash('md5').update(str).digest('hex');
	}else{
		return '';
	}
}

function base64(str){
	if(str){
		return new Buffer(str, 'utf8').toString('base64');
	}else{
		return '';
	}
}

function trim(s){
	return s.replace(/(^\s*)|(\s*$)/g, "").replace(/(^　*)|(　*$)/g, "");
}