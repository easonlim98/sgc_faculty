<?php
require 'DbConnect.php';
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: *");

	$allVote = mysqli_query($db,
        "SELECT PV.PostVoteID, PV.UserID, PV.PostID, PV.voteStatus
         FROM post_vote PV"
        );
		$rows = array();
		while ($r = mysqli_fetch_assoc($allVote)) {
			$rows[] = $r;
		}
		echo json_encode($rows);
?>