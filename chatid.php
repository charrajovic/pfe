<?php
    include("connect.php");
    session_start();
    
    $session=$_SESSION["id"];
        $id=$_REQUEST["id"];
        $sql = "SELECT * FROM `invitations` WHERE (idp = $id and idm=$session and etat=1) or (idp=$session and idm=$id and etat=1)";
        $res=mysqli_query($con,$sql);  
    if($kar = mysqli_fetch_array($res))
    {
        $_SESSION['target']=$_REQUEST["id"];
        echo 1;
    }
    else
    {
        echo 0;
    }
    mysqli_close($con);
    
?>