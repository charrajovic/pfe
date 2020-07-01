<?php
function verfie_email_exist($email)
{
  $res=$GLOBALS['conn']->query(
  	"SELECT email FROM `user` WHERE email='$email' AND email!='{$_SESSION['email']}'"
  	
  );
     if (!empty($res->fetch())) {
  		return 1;
  	} else {
  		return 0;
  	}
}

function recuperation_nom_destinataire($email)
{
	$res=$GLOBALS['conn']->query("SELECT nom FROM `user` WHERE email='$email'");
	
	    if ($nom=$res->fetch()) {
	    	return $nom['nom'];
	    } 
	    
	    

}

function envoyer_fichier($nom_fichier,$location_fichier,$message,$objet,$nom_des,$exp,$email_des,$email_expe)
{
 
 $message=str_replace("'","\'",$message);
  $objet=str_replace("'","\'",$objet);
  
 
 move_uploaded_file($location_fichier,$_SERVER['DOCUMENT_ROOT'].'\pfe\upload\\'.$nom_fichier);
       $GLOBALS['conn']->query("INSERT INTO `conversation`(`id_message`,  `sujet`, `message`, `file`, `datep`) VALUES ('','$objet','$message','$nom_fichier',NOW())") or die();
         $id_final= $GLOBALS['conn']->lastInsertId();
             $GLOBALS['conn']->query("INSERT INTO `destinataire`(`id`, `nom_expediteur`, `nom_destinataire`, `email_dest`, `email_expe`) VALUES ('$id_final','$exp','$nom_des','$email_des','$email_expe')");
 

}



  ?>