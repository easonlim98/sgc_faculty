<?php
require 'DbConnect.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PATCH, PUT');
 
$updateCourse = file_get_contents("php://input");

if(isset($updateCourse) && !empty($updateCourse)){

    $request = json_decode($updateCourse);

    $CourseID = $request->CourseID;
    $CourseTitle = $request->CourseTitle;
    $CourseCode = $request->CourseCode;
    $CourseLevelOfStudy = $request->CourseLevelOfStudy;

    $sql = "UPDATE course 
            SET CourseTitle = '$CourseTitle', CourseCode = '$CourseCode', CourseLevelOfStudy = '$CourseLevelOfStudy'
            WHERE CourseID = '$CourseID'";
    
    if(mysqli_query($db,$sql)){
        http_response_code(201);
        echo "Update Successfully";
    }
    else{
         http_response_code(422); 
    }
         
}
?> 