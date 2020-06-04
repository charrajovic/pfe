<?php
//upload.php
session_start();
if($_FILES["file"]["name"] != '')
{
 $test = explode('.', $_FILES["file"]["name"]);
 $ext = end($test);
 $name = $_SESSION["id"].rand(1, 9999999999) . '.' . $ext;
 $location = './img/' . $name;  
 move_uploaded_file($_FILES["file"]["tmp_name"], $location);
 include("connect.php");
 $session=$_SESSION["id"];
 $spl="INSERT INTO `messages`(`contenu`, `file`, `etat`) VALUES ('','$location','0')";
 $res=mysqli_query($con,$spl);
 if($res==1)
 {
    echo $location;
 }
else
{
    echo 0;
}
 mysqli_close($con);
}
?>