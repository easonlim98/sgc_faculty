<?php
require 'DbConnect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: *");

	$allUsers = mysqli_query($db,"SELECT * FROM users");
		if(mysqli_num_rows($allUsers) > 0){
			while($row_users = mysqli_fetch_array($allUsers)){ 
				$json_array[] = array(
				  'id' =>  $row_users['id'],
                  'user_email' =>  $row_users['user_email'],
				  'user_name' =>  $row_users['user_name'],
				);
			}
			echo json_encode(["success"=>true,"data"=>$json_array]);
			return;
		}
		else{
			echo json_encode(["success"=>false]);
			return;
		}
?>