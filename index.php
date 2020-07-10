<?php 
$page = htmlentities($_GET['page']);

 //contient le nom de la page qu'on veut afficher à l'utulisateur '
if ($page!='misajour' AND $page!='acceuil' AND $page!='profil'AND $page!='alert' AND $page!='telecharger_fichier'  AND $page!='message_envoye' ) {
  include ("fonctions/".$page.".fonction.php");
}

$pages = scandir('pages'); //pour scanner le contenu du docier et verfifier si la page existe 
if(!empty($page) && in_array($_GET['page'].".php",$pages)) // si l'utilsateur a choisi une page et la page qui chosi est dans notre repertoir (pour eviter la redirection toujour a la page login si le url est autre chause )
{
    $content = 'pages/'.$_GET['page'].".php";
    
 
}else{
    header("Location:index.php?page=login");
   
}
include("fonctions/connection.fonction.php");


if (isset($_SESSION['email']) AND isset($_SESSION['confirmation']) AND $page !='compte' AND $page!='misajour' AND $page!='proposition' AND $page!='profil' AND !empty($_SESSION['password']) AND $_SESSION['confirmation']!=0 AND !empty($_SESSION['nom']) AND $page!='inbox'  AND $page!='message_envoye' ) {
     header("Location:index.php?page=compte");
   }
   
?>

<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">

  <link href="./img/logo.jpg" rel="icon">
  <link href="./img/logo.jpg" rel="apple-touch-icon">
  <link rel="stylesheet" type="text/css" href="cssfile/css/bootstrap.css">
           
</head>
<body>
     <div nom="content">
     	 <?php 
       

                   include($content);
                  
     	 ?>
     </div>
</body>
</html>