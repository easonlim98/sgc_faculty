<?php
require 'DbConnect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: *");

	$allCourse = mysqli_query($db,
        "SELECT C.CourseID, C.CollegeID, C.FacultyID, C.CourseTitle,
                C.CourseLevelOfStudy
         FROM course C"
        );
		$rows = array();
		while ($r = mysqli_fetch_assoc($allCourse)) {
			$rows[] = $r;
		}
		echo json_encode($rows);
?>