<?php
require 'DbConnect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: *");
 
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
     
    $id = $request->id;
    $user_email = $request->user_email;
    $user_name = $request->user_name;
    $sql = "INSERT INTO users (id,user_email,user_name) VALUES ('$id','$user_email', '$user_name')";
    if(mysqli_query($db,$sql)){
        http_response_code(201);
        echo "Insert Successfully";
    }
    else{
         http_response_code(422); 
         echo "Failed";
    }
         
}
?> 