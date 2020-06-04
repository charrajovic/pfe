<?php
//upload.php
session_start();
$id=$_REQUEST["id"];
$pp=0;
 include("connect.php");
 $session=$_SESSION["id"];
 $spl="select max(id) from messages";
 $res=mysqli_query($con,$spl);
 if($kar = mysqli_fetch_array($res))
 {
     $pp=$kar[0];
 }
 if($pp!=0)
 {
    $spl="INSERT INTO `usermsg`(`idu`, `idr`, `idm`) VALUES ($session,$id,$pp)";
    $res=mysqli_query($con,$spl);
    if($res==1)
    {
      echo 1;
    }
   else
   {
       echo 0;
   }
 }

 mysqli_close($con);
?>