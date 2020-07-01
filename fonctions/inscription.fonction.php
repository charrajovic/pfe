<?php
    function inscription($nom,$prenom,$password,$email,$travail)
    {
         $change = sha1($password);
         $GLOBALS['conn']->query(" INSERT INTO `user`(`id`, `nom`, `prenom`, `password`,`email`,`travail`,profil) VALUES ('','$nom','$prenom','$change','$email','$travail','defaut.jpg')") or die();
        
    }

    function comtexis($email)
    {
    	$var=$GLOBALS['conn']->query("SELECT email FROM user WHERE email LIKE '$email' ") or die();
    	$dd=$var->fetch();
    	if (empty($dd)) {
    		return 1;
    	} else {
    		return 0;
    	}
    	

        
         
          
    }

?>