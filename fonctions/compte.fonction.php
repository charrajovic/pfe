<?php

function recu_info_com()
{
	$da = array();
	$mc = $_SESSION['email'];

	$res =$GLOBALS['conn']->query("SELECT * FROM user WHERE email  LIKE '$mc'");
 
 while ($data =$res->fetch()) {

     $da[] = $data;
      
   }

    return $da;
}

?>