<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: X-XSRF-TOKEN");
include("config.php");

if(!empty($_POST['ime']) && !empty($_POST['prezime'])&& !empty($_POST['brojPesama']))
{
$ime = $_POST['ime'];
$prezime = $_POST['prezime'];
$brojPesama = $_POST['brojPesama'];

$stmt = $conn->prepare("INSERT INTO producent (ime, prezime, brojPesama) VALUES (?, ?, ?)");
$stmt->bind_param("ssi", $ime, $prezime, $brojPesama);
$stmt->execute();
echo "ok";
}
?>