<?php  
function verifier_compte_existe($email,$password)
{
   $email = htmlentities($email);
  //  $password = sha1($password);

  $verife = $GLOBALS['conn'] ->query("SELECT email , password FROM user WHERE email LIKE '$email' AND  password LIKE '$password'") or die("votre erreur est :");
    
    if (empty($verife ->fetch())) {
    	return 0;
    } else {
    	return 1;
    }
    
}

?>