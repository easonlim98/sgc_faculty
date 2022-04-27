<?php
require 'DbConnect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: *");

	$statistic = mysqli_query($db,
        "SELECT F.FacultyName, F.VisitorCount
         FROM faculty F"
        );
		$rows = array();
		while ($r = mysqli_fetch_assoc($statistic)) {
			$rows[] = $r;
		}
		echo json_encode($rows);
?>