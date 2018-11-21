<?php
header("Access-Control-Allow-Origin:*");
header('Access-Control-Allow-Headers: X-Requested-With');
header("Content-type: application/json");
$test_array =  array(
	array
	(
		'id' => '1',
		'ime' => 'Inna',
		'brojAlbuma' => '4',
		'brojSpotova' => '35',
	),
	array
	(
		'id' => '2',
		'ime' => 'Calvin Harris',
		'brojAlbuma' => '4',
		'brojSpotova' => '31',
	),
	array
	(
		'id' => '3',
		'ime' => 'Afrojack',
		'brojAlbuma' => '1',
		'brojSpotova' => '20',
	),
	array
	(
		'id' => '4',
		'ime' => 'Antonia',
		'brojAlbuma' => '2',
		'brojSpotova' => '25',
	),
	array
	(
		'id' => '5',
		'ime' => 'Rihanna',
		'brojAlbuma' => '8',
		'brojSpotova' => '50',
	),
	array
	(
		'id' => '6',
		'ime' => 'Lariss',
		'brojAlbuma' => '1',
		'brojSpotova' => '10',
	)
);
echo json_encode($test_array);
?>