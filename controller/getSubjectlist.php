<?php
require 'DbConnect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: *");

	$subjectList = mysqli_query($db,
        "SELECT C.CourseID, PS.PSType AS ModuleType, M.ModuleName
         FROM course C
		 JOIN program_structure PS
		 ON C.CourseID = PS.CourseID
		 JOIN module M
		 ON M.ModuleID = PS.ModuleID
		 "
        );
		$rows = array();
		while ($r = mysqli_fetch_assoc($subjectList)) {
			$rows[] = $r;
		}
		echo json_encode($rows);