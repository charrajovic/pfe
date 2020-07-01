<?php 

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

if (isset($_POST['idr'])) {
   $id=$_POST['idr'];
     $GLOBALS['conn']->query("UPDATE `destinataire` SET `etat`=1 WHERE id=$id AND  etat!=1 ");

    $res=$GLOBALS['conn']->query("SELECT message,datep,file,nom_expediteur,profil,travail,email FROM conversation,destinataire,user WHERE id_message=destinataire.id AND email=email_expe AND destinataire.id=$id ORDER BY datep");
  
     while ($data=$res->fetch()) {
        
        echo "{\"message\":\"".$data['message']."\",\"datep\":\"".$data['datep']."\",\"file\":\"".$data['file']."\",\"nom_expediteur\":\"".$data['nom_expediteur']."\",\"profil\":\"".$data['profil']."\",\"travail\":\"".$data['travail']."\",\"email\":\"".$data['email']."\"}";
    }

}
  if (isset($_POST['email'])) {
   $email= $_POST['email'];
      $res=$GLOBALS['conn']->query("SELECT count(*) as nbr FROM conversation,destinataire WHERE id_message=destinataire.id AND email_dest='$email' AND  etat!=1 ");
     $data = $res->fetch();
     echo $data['nbr'];

   


  }   

 ?>