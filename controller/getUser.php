<?php
require 'DbConnect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: *");

	$userList = mysqli_query($db,
        "SELECT *
         FROM user
		 "
        );
		$rows = array();
		while ($r = mysqli_fetch_assoc($userList)) {
			$rows[] = $r;
		}
		echo json_encode($rows);