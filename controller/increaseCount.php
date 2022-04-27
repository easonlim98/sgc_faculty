<?php
require 'DbConnect.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PATCH, PUT');
 
$increaseCount = file_get_contents("php://input");

if(isset($increaseCount) && !empty($increaseCount)){

    $request = json_decode($increaseCount);

    $FacultyID = $request->FacultyID;

    $sql = "UPDATE faculty 
            SET VisitorCount = VisitorCount + 1
            WHERE FacultyID = '$FacultyID'";
    
    if(mysqli_query($db,$sql)){
        http_response_code(201);
        echo "Update Successfully";
    }
    else{
         http_response_code(422); 
    }
         
}
?> 