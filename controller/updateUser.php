<?php
require 'DbConnect.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PATCH, PUT');
 
$updateUser = file_get_contents("php://input");

if(isset($updateUser) && !empty($updateUser)){

    $request = json_decode($updateUser);

    $UserID = $request->UserID;
    $UserTitle = $request->UserTitle;
    $UserName = $request->UserName;
    $UserPosition = $request->UserPosition;

    $sql = "UPDATE user 
            SET UserTitle = '$UserTitle', UserName = '$UserName', UserPosition = '$UserPosition'
            WHERE UserID = '$UserID'";
    
    if(mysqli_query($db,$sql)){
        http_response_code(201);
        echo "Update Successfully";
    }
    else{
         http_response_code(422); 
    }
         
}
?> 