<?php
require 'DbConnect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: *");

	$awarding = mysqli_query($db,
        "SELECT C.CourseID, I.InstitutionName, I.InstitutionWebLink
         FROM course C
		 JOIN awarding_institution AI
         ON C.CourseID = AI.CourseID
         JOIN institution I
         ON AI.InstitutionID = I.InstitutionID
		 "
        );
		$rows = array();
		while ($r = mysqli_fetch_assoc($awarding)) {
			$rows[] = $r;
		}
		echo json_encode($rows);