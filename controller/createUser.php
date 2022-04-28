<?php
require 'DbConnect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: *");
 
$postUserData = file_get_contents("php://input");

if(isset($postUserData) && !empty($postUserData)){

    $request = json_decode($postUserData);

    $date = date("Y-m-d g:i A");
     
    $UserID = $request->UserID;
    $UserImage = 'https://firebasestorage.googleapis.com/v0/b/sgc-faculty-source.appspot.com/o/admin%2Fsegilogo.png?alt=media&token=eeb52015-65e4-473e-acb6-016971d24a07';
    $UserTitle = $request->UserTitle;
    $UserName = $request->UserName;
    $UserEmail = $request->UserEmail;
    $UserContact = $request->UserContact;
    $EmployeeID = $request->EmployeeID;
    $UserPosition = $request->UserPosition;

    $sql = "INSERT INTO user (UserID,UserImage,UserTitle,UserName,UserEmail,UserContact,EmployeeID,UserPosition) 
            VALUES ('$UserID','$UserImage','$UserTitle','$UserName','$UserEmail','$UserContact','$EmployeeID','$UserPosition')";
    
    if(mysqli_query($db,$sql)){

    $PostID = $request->PostID;

      for($i = 0; $i < count($PostID); $i++){

            $sqlVote = "INSERT INTO post_vote (UserID,PostID,VoteStatus)
                    VALUES ('$UserID','".$PostID[$i]."','0');";

            mysqli_query($db, $sqlVote);

        };  
    }
    else{
         http_response_code(422); 
    }
         
}
?> 