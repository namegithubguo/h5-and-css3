'use strict'
function jsonp(json){
	json = json || {};
	if(!json.url)return;
	json.cbName = json.cbName||'cb';
	json.data = json.data||{};
	json.timeout = json.timeout||5000;
	
	json.data[json.cbName] = 'show'+Math.random();
	json.data[json.cbName] = json.data[json.cbName].replace('.','');
	
	var arr = [];
	for(var name in json.data){
		arr.push(name+'='+encodeURIComponent(json.data[name]));
	}
	
	var timer = setTimeout(function(){
		window[json.data[json.cbName]]=null;
		json.error&&json.error('请求失败，网络不给力');
	},json.timeout);
	
	window[json.data[json.cbName]] = function(result){
		clearTimeout(timer);
		json.success&&json.success(result);
		oH.removeChild(oS);
	};
	
	var oH = document.getElementsByTagName('head')[0];
	var oS = document.createElement('script');
	oS.src = json.url+'?'+arr.join('&');
	oH.appendChild(oS);
	
}







