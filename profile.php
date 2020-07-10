<?php
session_start(); 
$phofo="./img/unknown.png";
if(isset($_SESSION["id"]))
{ 
include("connect.php");

$sql = " SELECT * FROM `composant urbain` WHERE 1 ";

$row = mysqli_query($con, $sql) or die( mysqli_error($con));
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <meta name="author" content="Dashboard">
  <meta name="keyword" content="Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">
  <title><?php if(!isset($_REQUEST["id"]) || $_REQUEST["id"]==$_SESSION["id"]){ echo "mon profile"; }else{
    $idd=$_REQUEST["id"];
    $spl="SELECT nom,prenom from user where id=$idd";
    $res=mysqli_query($con,$spl);  
    if($kar = mysqli_fetch_array($res))
    {
      echo $kar[0]." ".$kar[1]." profile";
    }
   }?></title>

  <!-- Favicons -->
  <link href="img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Bootstrap core CSS -->
  <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="bootstrap/css/bootstrap.css"/>
  <!--external css-->
  <link href="lib/font-awesome/css/font-awesome.css" rel="stylesheet" />
  <link rel="stylesheet" type="text/css" href="css/zabuto_calendar.css">
  <link rel="stylesheet" type="text/css" href="lib/gritter/css/jquery.gritter.css" />
  <!-- Custom styles for this template -->
  <link href="css/style.css" rel="stylesheet">
  <link rel="stylesheet" href="css/profile.css"/>
  <link href="css/style-responsive.css" rel="stylesheet">
  <link href="acc.css" rel="stylesheet" />
  <script src="jquery.min.js"></script>
  <script src="lib/chart-master/Chart.js"></script>
  <script src="profile.js"></script>

  <!-- =======================================================
    Template Name: Dashio
    Template URL: https://templatemag.com/dashio-bootstrap-admin-template/
    Author: TemplateMag.com
    License: https://templatemag.com/license/
  ======================================================= -->
</head>

<body>
  <section id="container" class="containere">
    <!-- **********************************************************************************************************************************************************
        TOP BAR CONTENT & NOTIFICATIONS
        *********************************************************************************************************************************************************** -->
    <!--header start-->
    <header class="header black-bg">
      <div class="sidebar-toggle-box">
        <div class="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation" id="shrttat"></div>
      </div>
      <!--logo start-->
      <a href="index.html" class="logo"><b>ARCHIT<span>ECTE</span></b></a>
      <!--logo end-->
      <div class="nav notify-row" id="top_menu">
        <!--  notification start -->
        <ul class="nav top-menu">
          <!-- settings start -->
          <li class="dropdown">
            <a data-toggle="dropdown" class="dropdown-toggle">
              <i class="fa fa-tasks"></i>
              <span class="badge bg-theme">0</span>
              </a>
            <ul class="dropdown-menu extended tasks-bar">
              <div class="notify-arrow notify-arrow-green"></div>
              <li>
                <p class="green">rien de changement sur les regles d'amenagement</p>
              </li>
            </ul>
          </li>
          <!-- settings end -->
          <!-- inbox dropdown start-->
          <li id="header_inbox_bar" class="dropdown">
            <a data-toggle="dropdown" class="dropdown-toggle" href="index.html#">
              <i class="fa fa-envelope-o"></i>
              <span class="badge bg-theme" id="nbre"><?php $spl="SELECT count(*) as nbr FROM conversation,destinataire WHERE id_message=destinataire.id AND email_dest='{$_SESSION['email']}' AND  etat!=1 ";
              $res=mysqli_query($con,$spl);  
              while($kar = mysqli_fetch_array($res))
              {
                  echo $kar[0];
              } ?></span>
              <p id="emaile" style="display:none"><?php echo $_SESSION["email"]; ?></p>
              </a>
            <ul class="dropdown-menu extended inbox">
              <div class="notify-arrow notify-arrow-green"></div>
              <li>
                 <p class="green" id="msg_nbr"></p>
              </li>
             <span id="addnotifi">
              
               </span>
              <li>
           
                <a href="index.php?page=inbox">voit tout</a>
              </li>
            </ul>
          </li>
          <!-- inbox dropdown end -->
          <!-- notification dropdown start-->
          <li id="header_notification_bar" class="dropdown">
            <a data-toggle="dropdown" class="dropdown-toggle">
              <i class="fa fa-bell-o"></i>
              <span class="badge bg-warning" id="not"><?php  include("connect.php");
    $session=$_SESSION["id"];
    $y=0;
    $spl="SELECT count(*) from messages m,usermsg u where (m.id=u.idm and etat=0) and (u.idr=$session)";
    $res=mysqli_query($con,$spl);  
    if($kar = mysqli_fetch_array($res))
    {
        $y=$kar[0];
        echo $kar[0];
    }
    else{
      echo "0";
    } ?></span>
              </a>
            <ul class="dropdown-menu extended notification" id="notification">
              <div class="notify-arrow notify-arrow-yellow"></div>
              <li>
                <p class="yellow" id="note">You have <?php echo $y; ?> new notifications</p>
              </li>
              
            </ul>
          </li>
          <!-- notification dropdown end -->
        </ul>
        <!--  notification end -->
      </div>
      <div class="top-menu">
        <ul class="nav pull-right top-menu">
          <li><a class="logout" id="logout">deconnexion</a></li>
        </ul>
      </div>
    </header>
    <!--header end-->
    <!-- **********************************************************************************************************************************************************
        MAIN SIDEBAR MENU
        *********************************************************************************************************************************************************** -->
    <!--sidebar start-->
    <aside>
      <div id="sidebar" class="nav-collapse " style="z-index:99">
        <!-- sidebar menu start-->
        <ul class="sidebar-menu" id="nav-accordion">
          <p class="centered"><a href="profile.php"><img style="height:80px;width:57%" src="<?php echo $_SESSION["profil"]; ?>" class="img-circle" width="80" id="modi"></a></p>
          <h5 class="centered"><?php echo $_SESSION["nom"]." ".$_SESSION["prenom"]; ?></h5>
          <li class="mt">
            <a href="index.php?page=compte">
              <i class="fa fa-home"></i>
              <span>Acceuil</span>
              </a>
          </li>
          <li class="sub-menu">
            <a>
              <i class="fa fa-search" style="color:#aeb2b7"></i>
              <span style="cursor:pointer">consulter les regles</span>
              </a>
            <ul class="sub">
              <li><a href="zones">consultation les zones</a></li>
              <li><a href="regles">consultation les régles</a></li>
            </ul>
          </li>
          <li class="sub-menu">
            <a href="list">
              <i class="fa fa-users"></i>
              <span>list des architect</span>
              </a>
            
          </li>
          <li class="sub-menu">
            <a href="message">
              <i class="fa fa-comments"></i>
              <span id="msg">messages</span>
              </a>
           
          </li>
          <li class="sub-menu">
            <a href="javascript:;">
              <i class="fa fa-desktop"></i>
              <span>Propositions</span>
              </a>
            <ul class="sub">
              <li><a href="index.php?page=proposition#"><i class="fa fa-upload"></i>envoyer proposition</a></li>
              <li><a href="index.php?page=inbox#"><i class="fa fa-inbox"></i>boite de recéption</a></li>
              <li><a href="index.php?page=message_envoye#"><i class="fa fa-send"></i>messages envoyés</a></li>
            
            </ul>
           
          </li>
        </ul>
        <!-- sidebar menu end-->
      </div>
    </aside>
    <!--sidebar end-->
    <!-- **********************************************************************************************************************************************************
        MAIN CONTENT
        *********************************************************************************************************************************************************** -->
    <!--main content start-->
    <section id="main-content">
      <section class="wrapper">
        <?php if(!isset($_REQUEST["id"]) || $_REQUEST["id"]==$_SESSION["id"]){ ?>
        <!--<div class="row" style="margin:5px 0">
          <div class="offset-md-4 col-md-4 consult" id="cont" style="padding:0">
            <div class="tofprof" id="tof" style="background-image:url('<?php //echo $_SESSION["photo"]; ?>');background-repeat:no-repeat;background-size:100% 100%;height:300px;border-radius:50%"></div>
            <input type="file" class="form-control" id="file" accept="image/*">
             <button class="btn btn-primary form-control" style="margin:5px 0">change photo</button> -->
          <!-- </div>
        </div>
        <div class="row">
        <div class="offset-md-5 col-md-4 consult" style="padding:0">
            <h1 style="color:blue"><?php //echo $_SESSION["nom"]." ".$_SESSION["prenom"]; ?></h1>
        </div>
        </div> -->
        <div class="row mt">
          <div class="col-lg-12">
            <?php 
           
            echo '<div class="row content-panel">
              <div class="col-md-4 profile-text mt mb centered">
                <div class="right-divider">
                   
                  <h4>votre nom :</h4>
                  <h5 style="font-weight:bold">'.$_SESSION['nom'].' '.$_SESSION['prenom'].'</h5>
                  <h4>votre email :</h4>
                  <h5 style="font-weight:bold">'.$_SESSION['email'].'</h5>
                  <h4>votre travail :</h4>
                  <h5 style="font-weight:bold">'.$_SESSION['travail'].'</h5>
                </div>
              </div>
            
              <!-- /col-md-4 -->
              <div class="col-md-4 profile-text">
                <h3>Bienvenue Mr:'.$_SESSION['prenom'].'</h3>
                <h6>vos informations sont protegeés</h6>
                <p>salut monsieur ce site vous permet d"envoyer facilement et rapidement vos propositions et consulté les nouveaux regeles d"amenagements.</p>
                <br>
                <p><button class="btn btn-theme chat"><i class="fa fa-envelope"></i> Send messages</button></p>
              </div>
              <!-- /col-md-4 -->
              <div class="col-md-4 centered">
                <div class="profile-pic">';
                ?>
                  
                  <p><img id="tof" class="tof" src="<?php echo $_SESSION['profil'];?>" class="img-circle" style="cursor: pointer;" ></p>
                  <input type="file" class="form-control file" id="file" accept="image/*">
                  
                </div>
              </div>
          
              <!-- /col-md-4 -->
            </div>
            <!-- /row -->
          </div>
          <div class="col-lg-12 mt">
            <div class="row content-panel" style="height:58px">
             
                <div class="col-md-4 offset-md-4">
                  <a class="modifer"><button style="background-color: #4ECDC4" type="button" class="btn btn-primary btn-lg btn-block">modifiers votre informations</button></a>

                </div>
              
             
              
            </div>
            <!-- /col-lg-12 -->
          </div>
          <div class="col-lg-12 mt" id="dismod" style="display:none">
            <div class="row content-panel" style="padding-bottom:0">
          <table class="table" id="tab">  
                        <tbody><tr>
                        <td><b>nom</b></td>
                         <td><?php echo $_SESSION["nom"]; ?></td>
                         <td><i class="modif fa fa-pencil" id="nom" style="cursor:pointer"></i></td>
                      </tr>
                       <tr>
                        <td><b>prenom</b></td>
                         <td><?php echo $_SESSION["prenom"]; ?></td>
                         <td><i class="modif fa fa-pencil" id="prenom" style="cursor:pointer"></i></td>
                       </tr>
                       
                        <tr>
                        <td><b>email</b></td>
                         <td><?php echo $_SESSION["email"]; ?></td>
                         <td><i class="modif fa fa-pencil" id="email" style="cursor:pointer"></i></td>
                       
                        </tr><tr id="password">
                        <td><b>password</b></td>
                         <td>xxxXxxxXxxx</td>
                         <td><i class="modif fa fa-pencil" id="modifpssd" style="cursor:pointer"></i></td>

                        </tr><tr>
                        <td><b>travail</b></td>
                         <td><?php echo $_SESSION["travail"]; ?></td>
                         <td><i class="modif fa fa-pencil" id="travail" style="cursor:pointer"></i></td>
                    
                    </tr></tbody></table>
            </div>
          </div>
          <?php $id=$_SESSION["id"];
              $sql = "SELECT u.id,`nom`,`prenom`,`email`,`password`,`date`,u.etaton,`datetat`,`profil` FROM `user` u,invitations i WHERE (i.idp=$id or i.idm=$id) and (i.idp=u.id or i.idm=u.id) and u.id!=$id and i.etat=1";
              $res=mysqli_query($con,$sql); 
              if($kar = mysqli_fetch_array($res))
              { ?>
          <div class="col-lg-12 mt">
            <div class="row content-panel" style="padding-bottom:0">
             
                <div class="col-md-4 offset-md-5">
                  <h1 style="/* font-weight:bold; *//* color:purple; *//* font-size:30px; */font-weight: bold;color: #48cfad;">amis:</h1>
                </div>
            </div>
            <div class="row content-panel" style="padding-top:0">
              <div class="col-md-8 offset-md-4">
              <?php 
              do
              { ?>
                  <div class="row panel-body" style="border:1px">
                        <p style="display:none"><?php echo $kar[0]; ?></p>
                        <div class="col-1" style="background-image: url('<?php echo $kar[8]; ?>');background-repeat: no-repeat;background-size: 100% 100%;height:33px;border-radius:50%"></div>
                        <div class="col-7 msgat" style="font-weight:bold;cursor:pointer;font-size:25px;color:black">
                         <?php echo $kar[1]." ".$kar[2]; ?>
                        </div>
                        </div>
              <?php }while($kar = mysqli_fetch_array($res)); ?>
              </div>
            </div>
            <!-- /col-lg-12 -->
          </div>
              <?php } ?>
        </div>
        <?php }else{ 
          $id=$_REQUEST["id"];
          $sql = "SELECT * FROM `user` WHERE id = $id";
          $res=mysqli_query($con,$sql);  
          if($kar = mysqli_fetch_array($res))
          {
          ?>
          <!-- <div class='amischeck' style="display:none"><?php echo $id; ?></div>
          <div class="row" style="margin:5px 0">
          <input type="file" class="form-control" id="file" accept="image/*" style="display: none">
          <div class="offset-md-4 col-md-4 consult" id="cont" style="padding:0">
          <div id="tof" style="display:none"></div>
            <div class="tofprof" style="background-image:url('<?php echo $kar[8]; ?>');background-repeat:no-repeat;background-size:100% 100%;height:300px;border-radius:50%"></div>
             <button class="btn btn-primary form-control" style="margin:5px 0">change photo</button> -->
          <!-- </div>
        </div>
        <div class="row">
        <div class="offset-md-5 col-md-4 consult">
            <h1 style="color:blue"><?php echo $kar[1]." ".$kar[2]; ?></h1>
        </div>
        </div>
        <div class="row">
        <div class="offset-md-3 col-md-3">
          <div style="display: none" id="idp"><?php echo $kar[0]; ?></div>
            <?php 
            /* $session=$_SESSION["id"];
             $id=$_REQUEST["id"];
             $sql = "SELECT * FROM `invitations` WHERE (idp = $id and idm=$session) or (idm = $id and idp=$session)";
             $res=mysqli_query($con,$sql);  
              if($kar = mysqli_fetch_array($res))
              {
                    if($kar[3]==1)
                    {
                    ?><button class="btn btn-success form-control addamis" style="height:50px;font-weight:bold">amis</button><?php
                    }
                    else
                    {
                      if($kar[1]==$session)
                      {
                        ?><button class="btn btn-info form-control addamis" style="height:50px;font-weight:bold">invitation envoye</button><?php
                      }
                      else
                      {
                        ?><button class="btn btn-info form-control addamis" style="height:50px;font-weight:bold">accepter invitation</button><?php
                      }
                    } 
              }
              else
              {
                ?><button class="btn btn-primary form-control addamis" style="height:50px;font-weight:bold">envoyer invitation</button><?php
              }*/
            ?>
        </div>
        <div class="col-md-3" style="padding:0">
            <button class="btn btn-danger form-control block" style="height:50px;font-weight:bold">blocker</button>
        </div>
        </div> -->
        <div class="row mt">
          <div class="col-lg-12">
          <div class='amischeck' style="display:none"><?php echo $id; ?></div>
            <?php 
            $toto=$kar[1].' '.$kar[2];
           
            echo '<div class="row content-panel">
              <div class="col-md-4 profile-text mt mb centered">
                <div class="right-divider">
                   
                  <h4>votre nom :</h4>
                  <h5 style="font-weight:bold">'.$kar[1].' '.$kar[2].'</h5>
                  <h4>votre email :</h4>
                  <h5 style="font-weight:bold">'.$kar[3].'</h5>
                  <h4>votre travail :</h4>
                  <h5 style="font-weight:bold">'.$kar[9].'</h5>
                </div>
              </div>
            
              <!-- /col-md-4 -->
              <div class="col-md-4 profile-text">
                <h3>Profile de Mr:'.$kar[2].'</h3>
                <h6>Les informations sont protegeés</h6>
                <p>salut monsieur ce site vous permet d"envoyer facilement et rapidement vos propositions et consulté les nouveaux regeles d"amenagements.</p>
                <br>
                <div class="row"><div class="col-md-4 offset-md-1" style="padding-left: 0;"><button class="btn btn-theme msge"><i class="fa fa-envelope"></i> Send Message</button></div>'; ?>
                <div class="col-md-1" style="display: none" id="idp"><?php echo $kar[0]; ?></div>
            <?php 
             $session=$_SESSION["id"];
             $id=$_REQUEST["id"];
             $sql = "SELECT * FROM `invitations` WHERE (idp = $id and idm=$session) or (idm = $id and idp=$session)";
             $res=mysqli_query($con,$sql);  
              if($ka = mysqli_fetch_array($res))
              {
                    if($ka[3]==1)
                    {
                    ?><div class="col-md-4"><button class="btn btn-success addamis" style="height:25px;font-weight:bold;width:95px">amis</button></div><?php
                    }
                    else
                    {
                      if($ka[1]==$session)
                      {
                        ?><div class="col-md-4"><button class="btn btn-info addamis" style="height:25px;font-weight:bold;width:95px">invitation envoye</button></div><?php
                      }
                      else
                      {
                        ?><div class="col-md-4"><button class="btn btn-info addamis" style="height:25px;font-weight:bold;width:95px">accepter invitation</button></div><?php
                      }
                    } 
              }
              else
              {
                ?><div class="col-md-4"><button class="btn btn-primary form-control addamis" style="height:25px;font-weight:bold;width:95px">envoyer invitation</button></div><?php
              }
            ?></div>
              <?php echo '</div>
              <!-- /col-md-4 -->
              <div class="col-md-4 centered">
                <div class="profile-pic">';
                ?>
                  
                  <p><img class="ttof" src="<?php $phofo=$kar[8]; echo $kar[8];?>" class="img-circle" style="cursor: pointer;" ></p>
                  
                </div>
              </div>
          
              <!-- /col-md-4 -->
            </div>
            
            <!-- /row -->
          </div>
          <?php $id=$_REQUEST["id"];
              $sql = "select u.id,u.nom,u.prenom,u.email,u.password,u.date,u.etaton,u.datetat,u.profil from invitations i,user u where (idp=$session and (idm in (select idm from invitations where idp=$id and etat=1) or idm in (select idp from invitations where idm=$id and etat=1)) and idm=u.id and i.etat=1) or (idm=$session and (idp in (select idm from invitations where idp=$id and etat=1) or idp in (select idp from invitations where idm=$id and etat=1)) and idp=u.id and i.etat=1)";
              $res=mysqli_query($con,$sql); 
              if($kar = mysqli_fetch_array($res))
              { ?>
          <div class="col-lg-12 mt">
            <div class="row content-panel" style="padding-bottom:0">
             
                <div class="col-md-4 offset-md-4">
                  <h1 style="/* font-weight:bold; *//* color:purple; *//* font-size:30px; */font-weight: bold;color: #48cfad;">amis en commun:</h1>
                </div>
            </div>
            <div class="row content-panel" style="padding-top:0">
              <div class="col-md-8 offset-md-3">
              <?php 
              do
              { ?>
                  <div class="row panel-body" style="border:1px">
                        <p style="display:none"><?php echo $kar[0]; ?></p>
                        <div class="col-1" style="background-image: url('<?php echo $kar[8]; ?>');background-repeat: no-repeat;background-size: 100% 100%;height:33px;border-radius:50%"></div>
                        <div class="col-7 msgat" style="font-weight:bold;cursor:pointer;font-size:25px;color:black">
                         <?php echo $kar[1]." ".$kar[2]; ?>
                        </div>
                        </div>
              <?php }while($kar = mysqli_fetch_array($res)); ?>
              </div>
            </div>
            <!-- /col-lg-12 -->
          </div>
              <?php } ?>
              <?php $id=$_REQUEST["id"];
              $sql = "select u.id,u.nom,u.prenom,u.email,u.password,u.date,u.etaton,u.datetat,u.profil from invitations i,user u where (((idp=$id and (idm not in (select idm from invitations where idp=$session) and idm not in (select idp from invitations where idm=$session)) and idm=u.id) or (idm=$id and (idp not in (select idm from invitations where idp=$session) and idp not in (select idp from invitations where idm=$session)) and idp=u.id)) or (((idp=$id and (idm in (select idm from invitations where idp=$session and etat=0) or idm in (select idp from invitations where idm=$session and etat=0)) and idm=u.id) or (idm=$id and (idp in (select idm from invitations where idp=$session and etat=0) or idp in (select idp from invitations where idm=$session and etat=0)) and idp=u.id)))) and u.id!=$session";
              $res=mysqli_query($con,$sql); 
              if($kar = mysqli_fetch_array($res))
              { ?>
          <div class="col-lg-12 mt">
            <div class="row content-panel" style="padding-bottom:0">
             
                <div class="col-md-8 offset-md-4">
                  <h1 style="/* font-weight:bold; *//* color:purple; *//* font-size:30px; */font-weight: bold;color: darkred;">Suggestions de demande d'amis:</h1>
                </div>
            </div>
            <div class="row content-panel" style="padding-top:0">
              <div class="col-md-8 offset-md-3">
              <?php 
              do
              {  ?>
                  <div class="row panel-body" style="border:1px">
                        <p style="display:none"><?php echo $kar[0]; ?></p>
                        <div class="col-1" style="background-image: url('<?php echo $kar[8]; ?>');background-repeat: no-repeat;background-size: 100% 100%;height:33px;border-radius:50%"></div>
                        <div class="col-7 msgat" style="font-weight:bold;cursor:pointer;font-size:25px;color:black">
                         <?php echo $kar[1]." ".$kar[2]; ?>
                        </div>
                        </div>
              <?php }while($kar = mysqli_fetch_array($res)); ?>
              </div>
            </div>
            <!-- /col-lg-12 -->
          </div>
              <?php } ?>
        </div>
        <?php }} ?>
        
          <!-- /col-lg-9 END SECTION MIDDLE -->
          <!-- **********************************************************************************************************************************************************
              RIGHT SIDEBAR CONTENT
              *********************************************************************************************************************************************************** -->
          
        <!-- /row -->
      </section>
    </section>
    <!--main content end-->
    <!--footer start-->
    
    <!--footer end-->
  </section>
  <div id="darag" style="width: 100%;height: 100%;position: absolute;left: 0;top: 0;display: none;z-index: 98;"></div>
  <div id="popupe" style="width: 80%;height: 85%;position: absolute;background: white;left: 10%;top: 8%;display: none;z-index: 99;">
          <div class="row">
            <div class="offset-4 col-6" style="font-size:25px;font-weight:bold">photo de profile</div>
            <div class="close ofsset-1 col-2" style="
    text-align: end;
    /* margin-right: -75%; */
    margin-left: -1%;
    font-size: 25px;
">X</div>
          </div>      
          <div class="row" style="height:90%">
          <div class="offset-1 col-10" style="background-image: url('<?php echo $phofo; ?>');background-repeat: no-repeat;background-size: 100% 100%;height:100%;"></div>
          </div>      
    </div>
  <!-- js placed at the end of the document so the pages load faster -->
  <script src="lib/jquery/jquery.min.js"></script>

  <script src="lib/bootstrap/js/bootstrap.min.js"></script>
  <!--common script for all pages-->
  <!--script for this page-->
  <script class="include" type="text/javascript" src="lib/jquery.dcjqaccordion.2.7.js"></script>
  <script src="lib/jquery.scrollTo.min.js"></script>
  <script src="lib/jquery.nicescroll.js" type="text/javascript"></script>
  <script src="lib/jquery.sparkline.js"></script>
  <!--common script for all pages-->
  <script src="lib/common-scripts.js"></script>
</body>

</html>
<?php
}
else{
  header('location:login.php');
}
?>