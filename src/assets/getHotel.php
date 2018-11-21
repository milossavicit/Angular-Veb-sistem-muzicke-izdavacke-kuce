<?php
header("Content-type: application/json");
$test_array =  array(
	array
	(
		'idSobe' => '1',
		'brojKreveta' => '3',
		'brojSobe' => '101',
	),
	array
	(
		'idSobe' => '2',
		'brojKreveta' => '3',
		'brojSobe' => '102',
	),
	array
	(
		'idSobe' => '3',
		'brojKreveta' => '4',
		'brojSobe' => '103',
	),
	array
	(
		'idSobe' => '4',
		'brojKreveta' => '4',
		'brojSobe' => '104',
	),
	array
	(
		'idSobe' => '5',
		'brojKreveta' => '4',
		'brojSobe' => '105',
	),
	array
	(
		'idSobe' => '6',
		'brojKreveta' => '5',
		'brojSobe' => '106',
	),
	array
	(
		'idSobe' => '7',
		'brojKreveta' => '5',
		'brojSobe' => '107',
	),
	array
	(
		'idSobe' => '8',
		'brojKreveta' => '2',
		'brojSobe' => '108',
	)
);
echo json_encode($test_array);
?>