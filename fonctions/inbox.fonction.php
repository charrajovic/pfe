<?php 

 function rec_fichier()
 {
    $info=array();

    $res=$GLOBALS['conn']->query("SELECT destinataire.id,message,sujet,datep,file,nom_expediteur,nom_destinataire,travail,profil,email,etat FROM user,conversation,destinataire WHERE id_message=destinataire.id AND email_dest LIKE '{$_SESSION['email']}' AND email=email_expe ORDER BY datep DESC ");
	
	   while ($data=$res->fetch()) {
	    	
	    	$info[]=$data;
	    } 
	    	
	   

     return $info;


 }

function count_message_recue()
{
	 $res=$GLOBALS['conn']->query("SELECT count(*) as nbr FROM conversation,destinataire WHERE id_message=destinataire.id AND email_dest='{$_SESSION['email']}' AND  etat!=1 ");
	 $data = $res->fetch();
	 return $data;
}

function count_message_envoye()
{
	$res=$GLOBALS['conn']->query("SELECT count(*) as nbr FROM conversation,destinataire WHERE id_message=destinataire.id AND email_expe LIKE '{$_SESSION['email']}'  ");
	 $data = $res->fetch();
	 return $data;
}
function notification()
{
	  $info=array();

    $res=$GLOBALS['conn']->query("SELECT destinataire.id,message,sujet,datep,file,nom_expediteur,nom_destinataire,travail,profil,email FROM user,conversation,destinataire WHERE id_message=destinataire.id AND email_dest LIKE '{$_SESSION['email']}' AND email=email_expe AND etat=0 ORDER BY datep DESC  LIMIT 5 ");
	
	   while ($data=$res->fetch()) {
	    	
	    	$info[]=$data;
	    } 
	    	
	   

     return $info;
}

 ?>