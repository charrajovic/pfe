 <?php
      
    if (isset($_POST["submit"])){
      
     
      $nom = htmlentities(trim($_POST['nom']));
      $prenom = htmlentities(trim($_POST['prenom']));
      $email = htmlentities(trim($_POST['email']));
      $password = htmlentities(trim($_POST['password']));

       if (empty($_POST['gender'])) {
         $ergender = "selectionner votre sex";
       } else {
          $gender = $_POST['gender']; 
         
       }
       
       
       if (empty(trim($_POST['nom'] )) || empty(trim($_POST['prenom'] ))) {
       $inco="chmap recomandé *"; 
       }
       if ( empty($_POST['password'])) {
          $erssword= "entre votre password";
       }
        
        if (!filter_var( trim($email),FILTER_VALIDATE_EMAIL)) {
              $erre= "verifier votre email";
        }
        if (empty($inco) AND empty($ergender) AND empty($erre) AND empty($erssword))
         {   if (comtexis($email)==1) {
           inscription($nom,$prenom,$password,$email,$gender);
           header("location:index.php?page=login");
         } else {
            $eror= "email deja existe";
         }
         
            
        } else {
          $essai = 'prière de tenter de nouveau ;) ';
        }
        
         
          
      }
    

    ?> 
<!DOCTYPE html>

<html>
<head>
<title>inscription</title>

 <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>enregistrer</title>

  <!-- Favicons -->
  <link href="cssfile/img/favicon.png" rel="icon">
  <link href="cssfile/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Bootstrap core CSS -->
  <link href="cssfile/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <!--external css-->
  <link href="cssfile/lib/font-awesome/css/font-awesome.css" rel="stylesheet" />
  <!-- Custom styles for this template -->
  <link href="cssfile/css/style.css" rel="stylesheet">
  <link href="cssfile/css/style-responsive.css" rel="stylesheet">
         
   </head>
   <body> 
    
    <div class="container">
         <div class="row">
           <div class="col-md-6 offset-lg-4 offset-md-3 offset-sm-2 offset-2">
              <div class='sat'><span style='font-weight:bold;font-size:20px;font-family: sans-serif;color:#10b3f2'><?php echo isset($essai)?$essai:''; ?></span></div>
           </div>
         </div>
           
      <form class="form-login" action="" method="POST">
           <h2 class="form-login-heading">incrivez vous</h2>
        <div class="login-wrap">
        
        <input type="text"  class="form-control" name="nom" placeholder=" votre nom" value="<?php echo isset($nom)?$nom :'';?>" >
        <span style="color: red;font-weight: bold;font-family:  sans-serif;"><?php if(isset($inco))echo $inco;?></span>
          <br>
          <br>
          <input type="text"class="form-control" name="prenom" placeholder="votre prenom" value="<?php if(isset($prenom))echo $prenom;?>">
          <span style="color: red;font-weight: bold;font-family:  sans-serif;"><?php if(isset($inco))echo $inco;?></span>
          <br>
          <br>
          <input type="email"class="form-control"name="email"placeholder="votre email" value="<?php echo isset($email)?$email :'';?>">
           <span style="color: red;font-weight: bold;font-family:  sans-serif;"><?php if(isset($erre))echo $erre;?></span>
            <span style="color: red;font-weight: bold;font-family:  sans-serif;"><?php if(isset($eror))echo $eror;?></span>
             <br>
             <br>
            <input type="password" class="form-control"  name="password" placeholder="votre mot de passe">
             <span style="color: red;font-weight: bold;font-family:  sans-serif;"><?php if(isset($erssword)) echo $erssword;?></span>
              <br>
          <br>
          <input type="radio" name="gender" <?php if (isset($gender) && $gender== "architecte") echo "checked";?> value="architecte">architecte
           <input type="radio" name="gender"  <?php if (isset($gender) && $gender=="expert") echo "checked";?> value="expert">expert
              <input type="radio" name="gender"  <?php if (isset($gender) && $gender=="autre") echo "checked";?> value="autre">autre <br> 
          <span style="color: red;font-weight: bold;font-family:  sans-serif;"><?php if(isset($ergender))
            echo $ergender;?></span>
          <button class="btn btn-theme btn-block"  type="submit" name="submit"><i class="fas fa-user-plus"></i>inscrirez vous</button>
          <br>
          <div class="registration">
        <button class="btn btn-light">
           <a href="index.php?page=login">connecter a votre compte </a> 
        </button>

           <br/>
            
          </div>
        </div>
        
      </form>
     
 </div> 
      <script src="cssfile/lib/jquery/jquery.min.js"></script>
  <script src="cssfile/lib/bootstrap/js/bootstrap.min.js"></script>
  <!--BACKSTRETCH-->
  <!-- You can use an image of whatever size. This script will stretch to fit in any screen size.-->
  <script type="text/javascript" src="cssfile/lib/jquery.backstretch.min.js"></script>
  <script>
    $.backstretch("cssfile/img/login-bg.jpg", {
      speed: 200
    });
  </script>        
</body>
</html>