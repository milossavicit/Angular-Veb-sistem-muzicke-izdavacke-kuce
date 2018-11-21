<?php
	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Methods: GET');
	header("Content-type: application/json");
	include("functions.php");
	$ret = getPevac();
	echo json_encode($ret)
?>
