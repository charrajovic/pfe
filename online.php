<?php

include("connect.php");
    session_start();
    $js="[";
    $session=$_SESSION["id"];
    $spl="SELECT `id`,`datetat` FROM `user` WHERE id!=$session";
    $res=mysqli_query($con,$spl);  
    while($kar = mysqli_fetch_array($res))
    {
        $js.="{\"id\":\"$kar[0]\",\"date\":\"$kar[1]\"},";
    }
    $js = rtrim($js, ",");
    $js .= "]";
    echo $js;
    mysqli_close($con);
?>