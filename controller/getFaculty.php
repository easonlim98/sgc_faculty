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
		if(mysqli_num_rows($allUsers) > 0){
			while($row_users = mysqli_fetch_array($allUsers))
			echo json_encode([$row_users]);
			return;
		}
		else{
			echo json_encode(["success"=>false]);
			return;
		}
?>