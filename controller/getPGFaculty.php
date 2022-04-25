<?php
require 'DbConnect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: *");

    $pgFaculty = mysqli_query($db,
        "SELECT F.FacultyName, F.FacultyCoverSource, F.IntroNavLink
         FROM available_subject A_S
         JOIN faculty F
         ON A_S.FacultyID = F.FacultyID
         WHERE CollegeID = 'scpg'
         GROUP BY F.FacultyName"
        );
		$rows = array();
		while ($r = mysqli_fetch_assoc($pgFaculty)) {
			$rows[] = $r;
		}
		echo json_encode($rows);
?>