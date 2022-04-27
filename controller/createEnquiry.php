<?php
require 'DbConnect.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PATCH');
 
$enquiryData = file_get_contents("php://input");

if(isset($enquiryData) && !empty($enquiryData)){

    $request = json_decode($enquiryData);

    $date = date("Y-m-d g:i A");
     
    $EnquiryID = uniqid();
    $CourseID = $request->CourseID;
    $ApplicantName = $request->ApplicantName;
    $ApplicantNationality = $request->ApplicantNationality;
    $ApplicantIdentityNo = $request->ApplicantIdentityNo;
    $ApplicantEmail = $request->ApplicantEmail;
    $ApplicantContent = $request->ApplicantContent;
    $AppointmentDate = $request->AppointmentDate;
    $AppointmentTime = $request->AppointmentTime;
    $ApplicationStatus = 0;

    $sql = "INSERT INTO enquiry (EnquiryID,CourseID,ApplicantName,ApplicantNationality,ApplicantIdentityNo,ApplicantEmail,ApplicantContent,AppointmentDate,AppointmentTime,ApplicationStatus) 
            VALUES ('$EnquiryID','$CourseID','$ApplicantName','$ApplicantNationality','$ApplicantIdentityNo','$ApplicantEmail','$ApplicantContent','$AppointmentDate','$AppointmentTime','$ApplicationStatus')";

    if(mysqli_query($db,$sql)){
        http_response_code(201);
        echo "Insert Successfully";
    }
    else{
         http_response_code(422); 
    }
         
}
?> 