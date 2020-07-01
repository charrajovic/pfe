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

if($_FILES["file"]["name"] != '')
{
 $test = explode('.', $_FILES["file"]["name"]);
 $ext = end($test);
 $name = $_SESSION["id"].rand(1, 9999999999) . '.' . $ext;

 $location = $_SERVER['DOCUMENT_ROOT'].'\pfe\cssfile\img\\'. $name;
 move_uploaded_file($_FILES["file"]["tmp_name"], $location);

 $session=$_SESSION["id"];
 $conn->query("UPDATE `user` SET `profil`='$name' WHERE id=$session");
 $_SESSION['profil']=$name;
 echo 'cssfile/img/'.$name;
 }
?>