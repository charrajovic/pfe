<?php
    include("connect.php");
    session_start();
    $js="[";
    $y=0;
    $session=$_SESSION["id"];
    $idr=$_REQUEST["idm"];
    $spl="select u.id,u.nom,u.prenom,contenu,m.date,n.id,n.nom,n.prenom from user u,messages m,usermsg k,user n where (k.idr=$session and k.idu=$idr) and (u.id=k.idu and k.idr=n.id) and k.idm=m.id and m.etat=0";
    $res=mysqli_query($con,$spl);  
    while($kar = mysqli_fetch_array($res))
    {
        $y=1;
        $js .= "{\"id\":\"".$kar[0]."\",\"nom\":\"".$kar[1]."\",\"prenom\":\"".$kar[2]."\",\"contenu\":\"".$kar[3]."\",\"date\":\"".$kar[4]."\",\"idr\":\"".$kar[5]."\",\"nomr\":\"".$kar[5]."\",\"prenomr\":\"".$kar[6]."\"},";
    }
    $js = rtrim($js, ",");
    $js .= "]";
    $spl="UPDATE `messages` m,usermsg u SET `etat`=1 WHERE m.id=u.idm and (idu=$idr and idr=$session)";
    mysqli_query($con,$spl); 
    if($y==1)
    echo $js;
    else
    echo "nope";
    mysqli_close($con);
?>