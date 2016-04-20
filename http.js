var http = require('http');
var options = {
	host:'music.163.com',
	//port:80,
	path:'/weapi/login/cellphone/?csrf_token',
	method:'POST',
	headers:{
		'Accept':'*/*',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Cache-Control':'no-cache',
		'Connection':'keep-alive',
		'Content-Type':'application/x-www-form-urlencoded',
		'Host':'music.163.com',
		'Origin':'http://music.163.com',
		'Pragma':'no-cache',
		'Referer':'http://music.163.com/',
		'User-Agent':'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36'

	}
};
var req = http.request(options,function(res){
	console.log('statusCode:'+res.statusCode);
	res.setEncoding('utf-8');
	res.on('data',function(chunk){
		console.log('BODY:'+chunk);
	});
	res.on('end',function(){
		console.log('END');
	});
	//console.log(res);
});
req.on('error',function(e){
	console.log('error:'+e.message);
});
req.write('params=h1kZ5owDkR1bNXZpe0AQp%2Fa6u7LGCPN3lXAan3TUVBIKP5d6tuc9esh7pfhTdoFPNGKCd4qydNFu%2B2X2J%2FdrxcBEoWd1CnAgsGH8I%2BcRGyNnrtVNpofwjjIV8Y9vicqiFEm9DwpTmANkhNrhy8Eg9Sz4VNUxgKtGzAXAndch8ggD91IbK7k9jCRmlM3VVPBE3ONpdc3fALgVvBIfyXvm7g%3D%3D&encSecKey=524650c67a18166b21a431c145dc43c688428ef4277f53f0ffcb3c70333467e59369ae043059601c70341f1e2ba5f8f824aaa36b337af26040b6d4268bec3c42cd5e97b2bfce3c06161ca3441629c5b82152dcedf3cfc2664fde0d46a896e2001ba40a43178caab88975dfdc06f6a957f8f38430c3c3f4b319574c3cc896d8ae');
req.end();

console.log('over');
