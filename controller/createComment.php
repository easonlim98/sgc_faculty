<?php
require 'DbConnect.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PATCH');
 
$createComment = file_get_contents("php://input");

if(isset($createComment) && !empty($createComment)){

    $request = json_decode($createComment);

    $date = date("Y-m-d g:i A");
     
    $CommentID = uniqid();
    $PostID = $request->PostID;
    $UserID = $request->UserID;
    $CommentContent = $request->CommentContent;
    $CreatedAt = $date;

    $sql = "INSERT INTO comment (CommentID,PostID,UserID,CommentContent,CreatedAt) 
            VALUES ('$CommentID','$PostID','$UserID','$CommentContent','$CreatedAt')";
    
    if(mysqli_query($db,$sql)){

        http_response_code(201);

    }
    else{
         http_response_code(422); 
    }

         
}
?> 