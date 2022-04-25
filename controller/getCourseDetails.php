<?php
require 'DbConnect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: *");

	$courseDetails = mysqli_query($db,
        "SELECT C.CourseID, C.CourseTitle, C.CourseCode, C.CourseLevelOfStudy, C.CourseIntroText,
                C.CareerOpportunity
         FROM course C"
        );
		$rows = array();
		while ($r = mysqli_fetch_assoc($courseDetails)) {
			$rows[] = $r;
		}
		echo json_encode($rows);