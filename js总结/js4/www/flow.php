<?php
$page = $_GET["page"];
$PAGESIZE = 10;

mysql_connect("localhost","root","");
mysql_select_db("2016-03-09");
$sql = 'SELECT * FROM flow_tab LIMIT '.$page*$PAGESIZE.','.$PAGESIZE;
$res = mysql_query($sql);

$result = '[';
$first = true;
while($row=mysql_fetch_row($res)){
	if($first){
		$result.="'".$row[0]."'";
		$first = false;
	}else{
		$result.=",'".$row[0]."'";
	}
}
$result.=']';

echo $result;
?>









