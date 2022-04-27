<?php
require 'DbConnect.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PATCH, PUT');
 
$updateEnquiry = file_get_contents("php://input");

if(isset($updateEnquiry) && !empty($updateEnquiry)){

    $request = json_decode($updateEnquiry);

    $EnquiryID = $request->EnquiryID;
    $ApplicationStatus = 1;

    $sql = "UPDATE enquiry 
            SET ApplicationStatus = '$ApplicationStatus'
            WHERE EnquiryID = '$EnquiryID'";
    
    if(mysqli_query($db,$sql)){
        http_response_code(201);
        echo "Update Successfully";
    }
    else{
         http_response_code(422); 
    }
         
}
?> 