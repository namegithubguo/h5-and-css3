'use strict'
//弹性运动
;(function(){
	var left = 0;
	var iSpeed = 20;
	var timer = null;
	window.startMove = function (obj,iTarget){
		clearInterval(timer);
		timer = setInterval(function(){
			iSpeed+= (iTarget-left)/5;
			iSpeed*=0.75;
			left+=iSpeed;
			obj.style.left = left+'px';
			if(Math.round(iSpeed)==0&&Math.round(left)==iTarget){
				clearInterval(timer);
			}
		},30);
	}
})();