<?php
require 'DbConnect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: *");

	$courseDetails = mysqli_query($db,
        "SELECT C.CourseID, C.CourseTitle, C.CourseCode, C.CourseLevelOfStudy, C.CourseIntroText,
                C.CareerOpportunity, R.Requirement, AF.AidAndFunding
         FROM course C
		 JOIN entry_requirement ER
		 ON C.CourseID = ER.CourseID
		 JOIN requirement R
		 ON ER.RequirementID = R.RequirementID
		 JOIN financial_detail FD
		 ON FD.CourseID = C.CourseID
		 JOIN aid_and_funding AF
		 ON AF.AidAndFundingID = FD.AidAndFundingID
		 "
        );
		$rows = array();
		while ($r = mysqli_fetch_assoc($courseDetails)) {
			$rows[] = $r;
		}
		echo json_encode($rows);