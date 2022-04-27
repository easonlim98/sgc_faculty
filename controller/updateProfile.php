<?php
require 'DbConnect.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PATCH, PUT');
 
$updateProfile = file_get_contents("php://input");

if(isset($updateProfile) && !empty($updateProfile)){

    $request = json_decode($updateProfile);

    $UserID = $request->UserID;
    $UserImage = $request->UserImage;
    $UserContact = $request->UserContact;
    $UserName = $request->UserName;

    $sql = "UPDATE user 
            SET UserImage = '$UserImage', UserContact = '$UserContact', UserName = '$UserName'
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