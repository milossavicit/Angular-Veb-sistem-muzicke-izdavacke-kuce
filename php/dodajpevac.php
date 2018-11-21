<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: X-XSRF-TOKEN");
include("config.php");
if(!empty($_POST['ime']) && !empty($_POST['brojAlbuma'])&& !empty($_POST['brojSpotova']))
{
$ime = $_POST['ime'];
$brojAlbuma = $_POST['brojAlbuma'];
$brojSpotova = $_POST['brojSpotova'];

$stmt = $conn->prepare("INSERT INTO pevac (ime, brojAlbuma, brojSpotova) VALUES (?, ?, ?)");
$stmt->bind_param("sii", $ime, $brojAlbuma, $brojSpotova);
$stmt->execute();
echo "ok";
}
?>