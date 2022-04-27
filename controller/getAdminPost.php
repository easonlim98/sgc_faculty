<?php
require 'DbConnect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: *");

	$allPost = mysqli_query($db,
        "SELECT P.PostID, P.UserID, P.FacultyID, P.PostTitle, P.PostContent, P.PostDoc, P.CreatedAt
         FROM post P"
        );
		$rows = array();
		while ($r = mysqli_fetch_assoc($allPost)) {
			$rows[] = $r;
		}
		echo json_encode($rows);
?>