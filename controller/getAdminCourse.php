<?php
require 'DbConnect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: *");

	$allCourse = mysqli_query($db,
        "SELECT F.FacultyName, C.CourseID, C.CourseTitle, C.CourseLevelOfStudy, CL.CollegeName, C.CourseCode, CL.CollegeID
         FROM available_subject A_S
         JOIN college CL
         ON A_S.CollegeID = CL.CollegeID
		 JOIN faculty F
		 ON A_S.FacultyID = F.FacultyID
		 JOIN course C
		 ON A_S.CourseID = C.CourseID"
        );
		$rows = array();
		while ($r = mysqli_fetch_assoc($allCourse)) {
			$rows[] = $r;
		}
		echo json_encode($rows);
?>