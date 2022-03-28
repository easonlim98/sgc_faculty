<?php
require 'DbConnect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: *");

	$allUsers = mysqli_query($db,
        "SELECT *
         FROM faculty F
         INNER JOIN users U
         ON F.User_ID = U.User_ID"
        );
		$rows = array();
		while ($r = mysqli_fetch_assoc($allUsers)) {
			$rows[] = $r;
		}
		echo json_encode($rows);
?>