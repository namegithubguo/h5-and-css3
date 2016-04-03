<?php
$uname = $_POST['uname'];
$pass = $_POST['pass'];

if($uname=='admin'&&$pass=='123'){
	echo '^_^登录成功';
}else if($uname=='eric'&&$pass=='1234'){
	echo '^_^登录成功';
}else{
	echo 'T_T用户名或密码错误';
}

?>