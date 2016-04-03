<?php
//1.连接数据库
//mysql_connect(地址,用户名,密码);
mysql_connect('localhost','root','');
//2.选择数据库
//mysql_select_db(数据库名);
mysql_select_db('2016-03-09');
//3.发送(执行sql语句)
//mysql_query(SQL语句);
$res = mysql_query('SELECT * FROM user_tab');
//4.接收
while($row = mysql_fetch_row($res)){
	echo $row[0].'==='.$row[1].'<br />';
}
?>










