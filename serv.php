<?php
include("connect.php");
session_start();
if(strcmp($_REQUEST["service"],"auth")==0)
{
$mail=$_REQUEST["mail"];
$pass=$_REQUEST["pass"];
$sql = "SELECT * FROM `user` WHERE email like '$mail' and password like '$pass'";
    $res=mysqli_query($con,$sql);  
    if($kar = mysqli_fetch_array($res))
    {
        $p=time();
        $curent=date("Y-m-d H:i:s", $p);
        $sql = "UPDATE `user` SET `etat`=1,`datetat`='$curent' WHERE mail like '$mail' and password like '$pass'";
        mysqli_query($con,$sql); 
        $_SESSION["id"]=$kar[0];
        $_SESSION["nom"]=$kar[1];
        $_SESSION["prenom"]=$kar[2];
        $_SESSION["email"]=$kar[3];
        $_SESSION["password"]=$kar[4];
        $_SESSION["date"]=$kar[5];
        $_SESSION["profil"]=$kar[8];
        $_SESSION["travail"]=$kar[9];
        $_SESSION['confirmation']=$kar[10];
        echo "1"; 
    }
    else
    {
        echo "0";
    }
}
else{
    $js="[";
    $id=$_SESSION["id"];
    $sql = "SELECT u.id,`nom`,`prenom`,`mail`,`password`,`date`,u.etat,`datetat`,`photo` FROM `user` u,invitations i WHERE (i.idp=$id or i.idm=$id) and (i.idp=u.id or i.idm=u.id) and u.id!=$id and i.etat=1";
    $res=mysqli_query($con,$sql);  
    while($kar = mysqli_fetch_array($res))
    {
        $js .= "{\"id\":\"".$kar[0]."\",\"nom\":\"".$kar[1]."\",\"prenom\":\"".$kar[2]."\",\"mail\":\"".$kar[3]."\",\"password\":\"".$kar[4]."\",\"date\":\"".$kar[5]."\",\"photo\":\"".$kar[8]."\"},";
    }
    $js = rtrim($js, ",");
    $js .= "]";
    echo $js;
}
    mysqli_close($con);
?>