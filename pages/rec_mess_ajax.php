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



if (isset($_POST['email'])) {
  $js="[";
 $email= $_POST['email'];
    $res=$GLOBALS['conn']->query("SELECT destinataire.id,message,sujet,datep,file,nom_expediteur,nom_destinataire,travail,profil,email,etat FROM user,conversation,destinataire WHERE id_message=destinataire.id AND email_dest LIKE '$email' AND email=email_expe ORDER BY datep DESC ");
  
     while ($data=$res->fetch()) {
        
       $js.= "{\"message\":\"".$data['message']."\",\"id\":\"".$data['id']."\",\"sujet\":\"".$data['sujet']."\",\"datep\":\"".$data['datep']."\",\"file\":\"".$data['file']."\",\"nom_expediteur\":\"".$data['nom_expediteur']."\",\"profil\":\"".$data['profil']."\",\"travail\":\"".$data['travail']."\",\"email\":\"".$data['email']."\",\"etat\":\"".$data['etat']."\"},";
    }
     $js = rtrim($js, ",");
    $js .= "]";
    echo $js;
}



 ?>