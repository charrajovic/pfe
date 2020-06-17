<?php
    function inscription($nom,$prenom,$password,$email,$travail)
    {
         $change = sha1($password);
         $GLOBALS['conn']->query(" INSERT INTO `utilisator`(`id`, `nom`, `prenom`, `password`,`email`,`travail`,profil) VALUES ('','$nom','$prenom','$change','$email','$travail','defaut.jpg')") or die(mysql_error());
        
    }

    function comtexis($email)
    {
    	$var=$GLOBALS['conn']->query("SELECT email FROM utilisator WHERE email LIKE '$email' ") or die(mysql_error());
    	$dd=$var->fetch();
    	if (empty($dd)) {
    		return 1;
    	} else {
    		return 0;
    	}
    	

        
         
          
    }

?>