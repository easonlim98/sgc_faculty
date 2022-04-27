<?php
require 'DbConnect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: *");

	$statistic = mysqli_query($db,
        "SELECT F.FacultyName, F.VisitorCount, 
		 (SELECT COUNT(FF.FacultyName) FROM faculty FF
		  WHERE FF.VisitorCount != 0) AS SUM_COUNT
         FROM faculty F
		 WHERE F.VisitorCount != 0"
        );
		$rows = array();
		while ($r = mysqli_fetch_assoc($statistic)) {
			$rows[] = $r;
		}
		echo json_encode($rows);
?>