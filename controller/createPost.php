<?php
require 'DbConnect.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PATCH');
 
$postPostData = file_get_contents("php://input");

if(isset($postPostData) && !empty($postPostData)){

    $request = json_decode($postPostData);

    $date = date("Y-m-d g:i A");
     
    $PostID = uniqid();
    $UserID = $request->UserID;
    $FacultyID = $request->FacultyID;
    $PostTitle = $request->PostTitle;
    $PostContent = $request->PostContent;
    $PostDoc = $request->PostDoc;
    $CreatedAt = $date;

    $sql = "INSERT INTO post (PostID,UserID,FacultyID,PostTitle,PostContent,PostDoc,CreatedAt) 
            VALUES ('$PostID','$UserID','$FacultyID','$PostTitle','$PostContent','$PostDoc','$CreatedAt')";
    
    if(mysqli_query($db,$sql)){

        http_response_code(201);

		$UserList = $request->UserList;

        for($i = 0; $i < count($UserList); $i++){

            $sqlVote = "INSERT INTO post_vote (UserID,PostID,VoteStatus)
                    VALUES ('".$UserList[$i]."','$PostID','0');";

            mysqli_query($db, $sqlVote);

        };

    }
    else{
         http_response_code(422); 
    }

         
}
?> 