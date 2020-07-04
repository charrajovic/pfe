<?php
    include("connect.php");
    session_start();
    $js="[";
    $y=0;
    $session=$_SESSION["id"];
    $idr=$_SESSION["target"];
    $scr=$_SESSION["scrol"];
    // $spl="select u.id,u.nom,u.prenom,contenu,m.date,n.id,n.nom,n.prenom,u.profil,m.etat,m.file,m.big from user u,messages m,usermsg k,user n where ((k.idr=$session and k.idu=$idr) or (k.idr=$idr and k.idu=$session)) and (u.id=k.idu and k.idr=n.id) and k.idm=m.id";
    if($scr>20)
    $spl="select u.id,u.nom,u.prenom,contenu,m.date,n.id,n.nom,n.prenom,u.profil,m.etat,m.file,m.big from user u,messages m,usermsg k,user n where ((k.idr=$session and k.idu=$idr) or (k.idr=$idr and k.idu=$session)) and (u.id=k.idu and k.idr=n.id) and k.idm=m.id limit 20 offset $scr";
    else
    $spl="select u.id,u.nom,u.prenom,contenu,m.date,n.id,n.nom,n.prenom,u.profil,m.etat,m.file,m.big from user u,messages m,usermsg k,user n where ((k.idr=$session and k.idu=$idr) or (k.idr=$idr and k.idu=$session)) and (u.id=k.idu and k.idr=n.id) and k.idm=m.id limit $scr";
    $res=mysqli_query($con,$spl);  
    while($kar = mysqli_fetch_array($res))
    {
        $y=1;
        if($kar[11]==0)
        $kar[3]=htmlspecialchars($kar[3]);
        $js .= "{\"id\":\"".$kar[0]."\",\"nom\":\"".$kar[1]."\",\"prenom\":\"".$kar[2]."\",\"contenu\":\"".$kar[3]."\",\"date\":\"".$kar[4]."\",\"idr\":\"".$kar[5]."\",\"nomr\":\"".$kar[6]."\",\"prenomr\":\"".$kar[7]."\",\"photo\":\"".$kar[8]."\",\"etat\":\"".$kar[9]."\",\"file\":\"".$kar[10]."\"},";
    }
    $js = rtrim($js, ",");
    $js .= "]";
    $mp=$_SESSION["scrol"]-20;
    if($mp>=0)
    $_SESSION["scrol"]=$mp;
    else
    $_SESSION["scrol"]=0;
    $spl="UPDATE `messages` m,usermsg u SET `etat`=1 WHERE m.id=u.idm and (idu=$idr and idr=$session)";
    mysqli_query($con,$spl); 
    if($y==1)
    echo $js;
    else
    echo "nope";
    $_SESSION["target"]=$idr;
    mysqli_close($con);
?>