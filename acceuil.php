<?php
session_start(); 
if(isset($_SESSION["id"]))
{ 
include("index.php");

?>

<?php
}
else{
  header('location:index.php?page=login');
}
?>