<?php

include("connect.php");
    session_start();
    
    $session=$_SESSION["id"];
    $anc=$_REQUEST["anc"];
    $new=$_REQUEST["new"];

    $spl="UPDATE `user` SET `password`='$new' WHERE id=$session and password like '$anc'";
    $ech1=mysqli_query($con,$spl);
    if($ech1==1)
    {
        echo $new;
    } 
    else{
    echo 0;
    }
    mysqli_close($con);

?>