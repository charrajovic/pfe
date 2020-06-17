<?php 
session_start();
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

   
   $id=$_SESSION['id'];
if (isset($_POST['first_name']) AND !empty($_POST['first_name'])) {
  $nom = $_POST['first_name'];
   echo $nom;
  $conn->query("UPDATE utilisator SET  nom = '$nom' WHERE id ='$id'" );
  $_SESSION['nom']=$nom;

} else if (isset($_POST['last_name']) AND !empty($_POST['last_name'])) {
  $prenom = $_POST['last_name'];
  echo $prenom;
  $conn->query("UPDATE `utilisator` SET prenom ='$prenom' WHERE id ='$id'"  );
   $_SESSION['prenom']=$prenom;
} else if (isset($_POST['emaile']) AND !empty($_POST['emaile'])) {
  $email = $_POST['emaile'];
  echo $email;

   $conn->query("UPDATE `utilisator` SET email = '$email'  WHERE id ='$id'"  );
   $_SESSION['email']=$email;
} else if (isset($_POST['job']) AND !empty($_POST['job']))
{
  $travail = $_POST['job'];
  
   echo $travail;
  $conn->query("UPDATE `utilisator` SET travail = '$travail'  WHERE id = '$id'" );
  $_SESSION['travail']=$travail;
}
// if (isset($_POST['first_name']) AND !empty($_POST['first_name']) ) {
// 	echo "votre nom :".$_POST['first_name'];
// }else if (isset($_POST['last_name']) AND !empty($_POST['last_name'])){
// 	echo "votre prenom :".$_POST['last_name'] ;
//  }else if (isset($_POST['job']) AND !empty($_POST['job'])){
//  	 echo "votre email: ".$_POST['job'];
//  }
//  else{   
//     echo "votre metier: ".$_POST['emaile'];
// }
 ?>