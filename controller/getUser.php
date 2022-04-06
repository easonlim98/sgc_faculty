<?php
require 'DbConnect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: *");

$user_id = 1;
$CDEditor = mysqli_fetch_array(mysqli_query($db, "SELECT * FROM `user` WHERE `user_id` = $user_id"));
echo "Hi ",$CDEditor['user_name'],", you can edit [",$CDEditor['user_faculty'],"] page";

echo nl2br("\n");

$user_id = 2;
$CDEditor = mysqli_fetch_array(mysqli_query($db, "SELECT * FROM `user` WHERE `user_id` = $user_id"));
echo "Hi ",$CDEditor['user_name'],", you can edit [",$CDEditor['user_faculty'],"] page";

?>
<!-- 
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
 -->