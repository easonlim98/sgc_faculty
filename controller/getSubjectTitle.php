<?php
require 'DbConnect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: *");

	$subjectListTitle = mysqli_query($db,
        "SELECT C.CourseID, PS.PSType AS ModuleType
         FROM course C
		 JOIN program_structure PS
		 ON C.CourseID = PS.CourseID
		 JOIN module M
		 ON M.ModuleID = PS.ModuleID
         GROUP BY C.CourseID, ModuleType
		 "
        );
		$rows = array();
		while ($r = mysqli_fetch_assoc($subjectListTitle)) {
			$rows[] = $r;
		}
		echo json_encode($rows);