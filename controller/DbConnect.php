<?php

// Production
/* $hostname="Localhost";
$username="todonex8_user";
$password="teamalpha2022";
$dbname="todonex8_sgc_faculty_db"; */

// Development
$hostname="Localhost";
$username="root";
$password="";
$dbname="sgc_faculty";
 
// Create connection
$db = mysqli_connect($hostname, $username, $password, $dbname);
 
// Check connection
if ($db->connect_error) {
  die("Connection failed: " . $db->connect_error);
}
echo "Connected successfully";
?>