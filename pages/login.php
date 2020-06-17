<?php
include("fonctions/compte.fonction.php");
if(isset($_POST['ok']) )
{
  $email = htmlentities(trim($_POST["email"]));
  $password = htmlentities(trim($_POST["password"]));
   
   echo $email." ".$password;
   if (!filter_var( trim($email),FILTER_VALIDATE_EMAIL)) {
              $erre= "verifier votre email";
        }else{
          $_SESSION['email']=$email;
        }

    if ( empty(trim($_POST['password']))) {
          $erssword= "entre votre password";
       }   

     
  if (verifier_compte_existe($email,$password)==1) {
             $var = recu_info_com();
             foreach ($var as  $val) {
             $_SESSION['id']=$val['id'];
             $_SESSION['nom']=$val['nom'];
             $_SESSION['prenom']=$val['prenom'];
             $_SESSION['travail']=$val['travail'];
             $_SESSION['email']=$val['email'];
             $_SESSION['password']=$val['password'];
             $_SESSION['profil']=$val['profil'];
             $_SESSION['confirmation']=$val['confirmation'];
            }
             
           header("Location:index.php?page=alert");

                

          } else {
          $existepas=" votre nom ou prenom incorecte ";
          }
                  
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <meta name="author" content="Dashboard">
  <meta name="keyword" content="Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">
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
  
  <!-- =======================================================
    Template Name: Dashio
    Template URL: https://templatemag.com/dashio-bootstrap-admin-template/
    Author: TemplateMag.com
    License: https://templatemag.com/license/
  ======================================================= -->
</head>

<body>
  <!-- **********************************************************************************************************************************************************
      MAIN CONTENT
      *********************************************************************************************************************************************************** -->
  <div id="login-page">
    <div class="container">
      <form class="form-login" action="" method="POST">
        <h2 class="form-login-heading">sign in now</h2>
        <div class="login-wrap">
           <input type="email" class="form-control"  name="email">
          <span style="color: red;font-weight: bold;font-family: fantasy;"><?php if(isset($erre))echo $erre;?></span>
          <br>
           <input type="password" class="form-control"  name="password">
          <span style="color: red;font-weight: bold;font-family: fantasy;"><?php if(isset($erssword)) echo $erssword;?></span>  
          <label class="checkbox">
            <input type="checkbox" value="remember-me"> Remember me
            <span class="pull-right">
            <a data-toggle="modal" href="login.html#myModal"> Forgot Password?</a>
            </span>
            </label>
          <button class="btn btn-theme btn-block"  type="submit" name="ok"><i class="fa fa-lock"></i>Connexion</button>
          <hr>
          <div class="login-social-link centered">
            <p>or you can sign in via your social network</p>
            <button class="btn btn-facebook" type="submit"><i class="fa fa-facebook"></i> Facebook</button>
            <button class="btn btn-twitter" type="submit"><i class="fa fa-twitter"></i> Twitter</button>
          </div>
          <div class="registration">
        <button class="btn btn-light" type="submit">
           <a class="" href="index.php?page=inscription"> Vous n'avez pas encore un compte?
              </a>
        </button>

           <br/>
            
          </div>
        </div>
        
      </form>
      <!-- Modal -->
        <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal" class="modal fade">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">Forgot Password ?</h4>
              </div>
              <div class="modal-body">
                <p>Enter your e-mail address below to reset your password.</p>
                <input type="text" name="email" placeholder="Email" autocomplete="off" class="form-control placeholder-no-fix">
              </div>
            </div>
          </div>
        </div>
        <!-- modal -->
    </div>
  </div>
  <!-- js placed at the end of the document so the pages load faster -->
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
