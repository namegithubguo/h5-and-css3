'use strict'
function ajax(url,fnSucc,fnFail){
	if(window.XMLHttpRequest){
		var oAjax=new XMLHttpRequest;
	}else{
		var oAjax=new ActiveXObject('Microsoft.urlencoded');
	}
	
	oAjax.open('GET',url,true);
	
	oAjax.send();
	
	oAjax.onreadystatechange=function(){
		if(oAjax.readyState==4){
			if(oAjax.status>=200&&oAjax.status<300||oAjax.status==304){
				fnSucc&&fnSucc(oAjax.responseText);
			}else{
				fnFail&&fnFail(oAjax.status)
			}
		}
	};
}


/*'use strict'
function ajax(url,fnSccc,fnFail){
	if(window.XMLHttpRequest){
		var oAjax=new XMLHttpRequest;
	}else{
		var oAjax=new ActiveXObject('Microsoft.urlencodec');
	}
	oAjax.open('GET',url,true);
	
	oAjax.send();
	
	oAjax.onreadystatechange=function(){
		if(oAjax.readyState==4){
			if(oAjax.status>=200&&oAjax.status<300||oAjax.status==304){
				fnSucc&&fnSucc(oAjax.responseText);
			}else{
				fnFail&&fnFail(oAjax.status);
			}
		}
	};
}*/