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
    $res=$GLOBALS['conn']->query("SELECT message,datep,file,nom_destinataire,email_dest,profil,travail FROM conversation,destinataire,user WHERE id_message=destinataire.id AND email=email_dest AND destinataire.id=$id ORDER BY datep");
  
     while ($data=$res->fetch()) {
        
        echo "{\"message\":\"".$data['message']."\",\"datep\":\"".$data['datep']."\",\"file\":\"".$data['file']."\",\"nom_destinataire\":\"".$data['nom_destinataire']."\",\"profil\":\"".$data['profil']."\",\"travail\":\"".$data['travail']."\",\"email_dest\":\"".$data['email_dest']."\"}";
    }
}
   


 ?>