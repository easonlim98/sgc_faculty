<?php
require 'DbConnect.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PATCH, PUT');
 
$updateVote = file_get_contents("php://input");

if(isset($updateVote) && !empty($updateVote)){

    $request = json_decode($updateVote);

    $PostVoteID = $request->PostVoteID;
    $VoteStatus = $request->VoteStatus;

    $sql = "UPDATE post_vote 
            SET VoteStatus = '$VoteStatus'
            WHERE PostVoteID = '$PostVoteID'";
    
    if(mysqli_query($db,$sql)){
        http_response_code(201);
        echo "Update Successfully";
    }
    else{
         http_response_code(422); 
    }
         
}
?> 