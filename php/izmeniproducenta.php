<?php
	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Methods: POST');
	header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization, Token, token, TOKEN');
	include("functions.php");
	if(isset($_POST['id']) && isset($_POST['ime']) && isset($_POST['prezime']) && isset($_POST['brojPesama'])){
		$id = $_POST['id'];
		$ime = $_POST['ime'];
		$prezime = $_POST['prezime'];
		$brojPesama = $_POST['brojPesama'];
		echo azurirajProducenta($id,$ime,$prezime,$brojPesama);
	}
?>
