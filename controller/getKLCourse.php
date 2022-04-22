<?php
require 'DbConnect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: *");

	$klCourses = mysqli_query($db,
        "SELECT F.FacultyID, C.CourseID, C.CourseTitle, F.FacultyName, C.CourseLevelOfStudy, CL.CollegeName, C.CourseCode
         FROM available_subject A_S
         JOIN college CL
         ON A_S.CollegeID = CL.CollegeID
		 JOIN faculty F
		 ON A_S.FacultyID = F.FacultyID
		 JOIN course C
		 ON A_S.CourseID = C.CourseID
		 WHERE CL.CollegeID = 'sckl'"
        );
		$rows = array();
		while ($r = mysqli_fetch_assoc($klCourses)) {
			$rows[] = $r;
		}
		echo json_encode($rows);
?>