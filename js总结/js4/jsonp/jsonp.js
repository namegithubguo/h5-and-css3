'use strict'
function jsonp(url,data,fn){
	data[data.cbName] = 'show'+Math.random();
	data[data.cbName] = data[data.cbName].replace('.','');
	var arr = [];
	for(var name in data){
		arr.push(name+'='+encodeURIComponent(data[name]));
	}
	var str = arr.join('&');
	window[data[data.cbName]] = function (json){
		fn&&fn(json);
		oH.removeChild(oS);
	}
	var oH = document.getElementsByTagName('head')[0];
	var oS = document.createElement('script');
	oS.src = url+'?'+str;
	oH.appendChild(oS);
}