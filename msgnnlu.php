<?php

include("connect.php");
    session_start();
    $y=0;
    $js="[";
    $session=$_SESSION["id"];
    $spl="SELECT us.nom,us.prenom,m.contenu,u.idu,count(*) from messages m,usermsg u,user us where (m.id=u.idm and m.etat=0) and (u.idr=$session) and u.idu=us.id group by u.idu";
    $res=mysqli_query($con,$spl);  
    while($kar = mysqli_fetch_array($res))
    {
        $y=1;
        $js.="{\"id\":\"$kar[3]\",\"nonlu\":\"$kar[4]\",\"nom\":\"$kar[0]\",\"prenom\":\"$kar[1]\",\"contenu\":\"$kar[2]\"},";
    }
    $js = rtrim($js, ",");
    $js .= "]";
    if($y==1)
    echo $js;
    else
    echo "nope";
    mysqli_close($con);

?>