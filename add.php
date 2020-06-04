<?php
    include("connect.php");
    session_start();
    $js="{";
    $t=1;
    $session=$_SESSION["id"];
    $idr=$_REQUEST["idm"];
    $content=$_REQUEST["contenu"];
    $nom=$_SESSION["nom"];
    $prenom=$_SESSION["prenom"];
    $p=time();
    $curent=date("Y-m-d H:i:s", $p);
    $spl="INSERT INTO `messages`(`contenu`) VALUES ('$content')";
    $ech1=mysqli_query($con,$spl);
    if($ech1==1)
    {
    $spl="select max(id) from messages";
    $res=mysqli_query($con,$spl);
    if($kar = mysqli_fetch_array($res))
    {
        $t=$kar[0];
    }
    $spl="INSERT INTO `usermsg`(`idu`, `idr`, `idm`) VALUES ($session,$idr,$t)";
    $ech2=mysqli_query($con,$spl);
    echo "{\"response\":\"$ech2\",";
    } 
    else{
    echo "{\"response\":\"0\",";
    }
    echo "\"nom\":\"$nom\",\"prenom\":\"$prenom\"}";
    mysqli_close($con);
?>