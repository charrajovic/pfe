<?php

session_start();
if (isset($_REQUEST["notification"])) {
 $_SESSION["proposition"]=$_REQUEST["notification"];
}



$servername = "localhost";
try {
    $conn = new PDO("mysql:host=$servername;dbname=utilisateur",'root','');
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
     
    $conn->query("SET NAMES utf8");
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }



if (isset($_POST['email'])) {
  $js="[";
 $email= $_POST['email'];
    $res=$GLOBALS['conn']->query("SELECT destinataire.id,sujet,datep,nom_expediteur,profil FROM user,conversation,destinataire WHERE id_message=destinataire.id AND email_dest LIKE '$email' AND email=email_expe AND etat=0 ORDER BY datep DESC  LIMIT 5  ");
  
     while ($data=$res->fetch()) {
        
       $js.= "{\"id\":\"".$data['id']."\",\"sujet\":\"".$data['sujet']."\",\"datep\":\"".$data['datep']."\",\"nom_expediteur\":\"".$data['nom_expediteur']."\",\"profil\":\"".$data['profil']."\"},";
    }
     $js = rtrim($js, ",");
    $js .= "]";
    echo $js;
}
?>
