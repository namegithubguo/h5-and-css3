<?php
$act = $_GET["act"];
$uname = $_GET["uname"];
$pass = $_GET["pass"];

switch($act){
	case "add":
		mysql_connect("localhost","root","");
		mysql_select_db("2016-03-09");
		$sql = "SELECT * FROM user_tab WHERE uname='".$uname."'";
		$res = mysql_query($sql);
		$row = mysql_fetch_row($res);
		if($row){
			echo "{\"err\":1,\"msg\":\"此用户名已被注册\"}";
		}else{
			$sql = "INSERT iNTO user_tab VALUES('".$uname."','".$pass."')";
			mysql_query($sql);
			echo "{\"err\":0,\"msg\":\"注册成功\"}";
		}
		break;
	case "log":
		mysql_connect("localhost","root","");
		mysql_select_db("2016-03-09");
		$sql = "SELECT * FROM user_tab WHERE uname='".$uname."'";
		$res = mysql_query($sql);
		$row = mysql_fetch_row($res);
		if($row){
			if($row[1]==$pass){
				echo "{\"err\":0,\"msg\":\"登录成功\"}";
			}else{
				echo "{\"err\":1,\"msg\":\"用户名或密码有误\"}";
			}
		}else{
			echo "{\"err\":1,\"msg\":\"用户未注册\"}";
		}
		break;
}

?>