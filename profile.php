<?php
session_start(); 
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
  <title>Dashio - Bootstrap Admin Template</title>

  <!-- Favicons -->
  <link href="img/favicon.png" rel="icon">
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
  <section id="container">
    <!-- **********************************************************************************************************************************************************
        TOP BAR CONTENT & NOTIFICATIONS
        *********************************************************************************************************************************************************** -->
    <!--header start-->
    <header class="header black-bg">
      <div class="sidebar-toggle-box">
        <div class="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation" id="shrttat"></div>
      </div>
      <!--logo start-->
      <a href="index.html" class="logo"><b>DASH<span>IO</span></b></a>
      <!--logo end-->
      <div class="nav notify-row" id="top_menu">
        <!--  notification start -->
        <ul class="nav top-menu">
          <!-- settings start -->
          <li class="dropdown">
            <a data-toggle="dropdown" class="dropdown-toggle">
              <i class="fa fa-tasks"></i>
              <span class="badge bg-theme">4</span>
              </a>
            <ul class="dropdown-menu extended tasks-bar">
              <div class="notify-arrow notify-arrow-green"></div>
              <li>
                <p class="green">You have 4 pending tasks</p>
              </li>
              <li>
                <a href="index.html#">
                  <div class="task-info">
                    <div class="desc">Dashio Admin Panel</div>
                    <div class="percent">40%</div>
                  </div>
                  <div class="progress progress-striped">
                    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                      <span class="sr-only">40% Complete (success)</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="index.html#">
                  <div class="task-info">
                    <div class="desc">Database Update</div>
                    <div class="percent">60%</div>
                  </div>
                  <div class="progress progress-striped">
                    <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                      <span class="sr-only">60% Complete (warning)</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="index.html#">
                  <div class="task-info">
                    <div class="desc">Product Development</div>
                    <div class="percent">80%</div>
                  </div>
                  <div class="progress progress-striped">
                    <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
                      <span class="sr-only">80% Complete</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="index.html#">
                  <div class="task-info">
                    <div class="desc">Payments Sent</div>
                    <div class="percent">70%</div>
                  </div>
                  <div class="progress progress-striped">
                    <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width: 70%">
                      <span class="sr-only">70% Complete (Important)</span>
                    </div>
                  </div>
                </a>
              </li>
              <li class="external">
                <a href="#">See All Tasks</a>
              </li>
            </ul>
          </li>
          <!-- settings end -->
          <!-- inbox dropdown start-->
          <li id="header_inbox_bar" class="dropdown">
            <a data-toggle="dropdown" class="dropdown-toggle" href="index.html#">
              <i class="fa fa-envelope-o"></i>
              <span class="badge bg-theme">5</span>
              </a>
            <ul class="dropdown-menu extended inbox">
              <div class="notify-arrow notify-arrow-green"></div>
              <li>
                <p class="green">You have 5 new messages</p>
              </li>
              <li>
                <a href="index.html#">
                  <span class="photo"><img alt="avatar" src="img/ui-zac.jpg"></span>
                  <span class="subject">
                  <span class="from"></span>
                  <span class="time">Just now</span>
                  </span>
                  <span class="message">
                  Hi mate, how is everything?
                  </span>
                  </a>
              </li>
              <li>
                <a href="index.html#">
                  <span class="photo"><img alt="avatar" src="img/ui-divya.jpg"></span>
                  <span class="subject">
                  <span class="from">Divya Manian</span>
                  <span class="time">40 mins.</span>
                  </span>
                  <span class="message">
                  Hi, I need your help with this.
                  </span>
                  </a>
              </li>
              <li>
                <a href="index.html#">
                  <span class="photo"><img alt="avatar" src="img/ui-danro.jpg"></span>
                  <span class="subject">
                  <span class="from">Dan Rogers</span>
                  <span class="time">2 hrs.</span>
                  </span>
                  <span class="message">
                  Love your new Dashboard.
                  </span>
                  </a>
              </li>
              <li>
                <a href="index.html#">
                  <span class="photo"><img alt="avatar" src="img/ui-sherman.jpg"></span>
                  <span class="subject">
                  <span class="from">Dj Sherman</span>
                  <span class="time">4 hrs.</span>
                  </span>
                  <span class="message">
                  Please, answer asap.
                  </span>
                  </a>
              </li>
              <li>
                <a href="index.html#">See all messages</a>
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
          <li><a class="logout" id="logout">Logout</a></li>
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
          <p class="centered"><a href="profile.php"><img src="<?php echo $_SESSION["photo"]; ?>" class="img-circle" width="80" id="modi"></a></p>
          <h5 class="centered"><?php echo $_SESSION["nom"]." ".$_SESSION["prenom"]; ?></h5>
          <li class="mt">
            <a href="index.html">
              <i class="fa fa-dashboard"></i>
              <span>Dashboard</span>
              </a>
          </li>
          <li class="sub-menu">
            <a>
              <i class="fa fa-desktop"></i>
              <span>consulter les regles</span>
              </a>
            <ul class="sub">
            <li><a href="zones">consultation les zones</a></li>
              <li><a href="regles">consultation les régles</a></li>
            </ul>
          </li>
          <li class="sub-menu">
            <a href="list">
              <i class="fa fa-cogs"></i>
              <span>list des architect</span>
              </a>
            
          </li>
          <li class="sub-menu">
            <a href="message">
              <i class="fa fa-book"></i>
              <span id="msg">messages</span>
              </a>
           
          </li>
          <li class="sub-menu">
            <a href="javascript:;">
              <i class="fa fa-tasks"></i>
              <span>Forms</span>
              </a>
           
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
                  <h5>'.$_SESSION['nom'].' '.$_SESSION['prenom'].'</h5>
                  <h4>votre email :</h4>
                  <h5>'.$_SESSION['mail'].'</h5>
                  <h4>votre travail :</h4>
                  
                </div>
              </div>
            
              <!-- /col-md-4 -->
              <div class="col-md-4 profile-text">
                <h3>Bienvenue Mr:'.$_SESSION['prenom'].'</h3>
                <h6>vos informations sont protegeés</h6>
                <p>salut monsieur ce site vous permet d"envoyer facilement et rapidement vos propositions et consulté les nouveaux regeles d"amenagements.</p>
                <br>
                <p><button class="btn btn-theme"><i class="fa fa-envelope"></i> Send Message</button></p>
              </div>
              <!-- /col-md-4 -->
              <div class="col-md-4 centered">
                <div class="profile-pic">';
                ?>
                  
                  <p><img id="tof" src="<?php echo $_SESSION['photo'];?>" class="img-circle" style="cursor: pointer;" ></p>
                  <input type="file" class="form-control" id="file" accept="image/*">
                  
                </div>
              </div>
          
              <!-- /col-md-4 -->
            </div>
            <!-- /row -->
          </div>
          <?php $id=$_SESSION["id"];
              $sql = "SELECT u.id,`nom`,`prenom`,`mail`,`password`,`date`,u.etat,`datetat`,`photo` FROM `user` u,invitations i WHERE (i.idp=$id or i.idm=$id) and (i.idp=u.id or i.idm=u.id) and u.id!=$id and i.etat=1";
              $res=mysqli_query($con,$sql); 
              if($kar = mysqli_fetch_array($res))
              { ?>
          <div class="col-lg-12 mt">
            <div class="row content-panel" style="padding-bottom:0">
             
                <div class="col-md-4 offset-md-4">
                  <h1 style="font-weight:bold;color:purple;font-size:30px">amis:</h1>
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
        </div> --> -->
        <div class="row mt">
          <div class="col-lg-12">
          <div class='amischeck' style="display:none"><?php echo $id; ?></div>
            <?php 
            $toto=$kar[1].' '.$kar[2];
           
            echo '<div class="row content-panel">
              <div class="col-md-4 profile-text mt mb centered">
                <div class="right-divider">
                   
                  <h4>votre nom :</h4>
                  <h5>'.$kar[1].' '.$kar[2].'</h5>
                  <h4>votre email :</h4>
                  <h5>'.$kar[3].'</h5>
                  <h4>votre travail :</h4>
                  
                </div>
              </div>
            
              <!-- /col-md-4 -->
              <div class="col-md-4 profile-text">
                <h3>Bienvenue Mr:'.$kar[2].'</h3>
                <h6>vos informations sont protegeés</h6>
                <p>salut monsieur ce site vous permet d"envoyer facilement et rapidement vos propositions et consulté les nouveaux regeles d"amenagements.</p>
                <br>
                <p><button class="btn btn-theme msge"><i class="fa fa-envelope"></i> Send Message</button></p>'; ?>
                <div style="display: none" id="idp"><?php echo $kar[0]; ?></div>
            <?php 
             $session=$_SESSION["id"];
             $id=$_REQUEST["id"];
             $sql = "SELECT * FROM `invitations` WHERE (idp = $id and idm=$session) or (idm = $id and idp=$session)";
             $res=mysqli_query($con,$sql);  
              if($ka = mysqli_fetch_array($res))
              {
                    if($ka[3]==1)
                    {
                    ?><button class="btn btn-success addamis" style="height:25px;font-weight:bold;width:95px">amis</button><?php
                    }
                    else
                    {
                      if($ka[1]==$session)
                      {
                        ?><button class="btn btn-info addamis" style="height:25px;font-weight:bold;width:95px">invitation envoye</button><?php
                      }
                      else
                      {
                        ?><button class="btn btn-info addamis" style="height:25px;font-weight:bold;width:95px">accepter invitation</button><?php
                      }
                    } 
              }
              else
              {
                ?><button class="btn btn-primary form-control addamis" style="height:25px;font-weight:bold;width:95px">envoyer invitation</button><?php
              }
            ?>
              <?php echo '</div>
              <!-- /col-md-4 -->
              <div class="col-md-4 centered">
                <div class="profile-pic">';
                ?>
                  
                  <p><img id="tof" src="<?php echo $kar[8];?>" class="img-circle" style="cursor: pointer;" ></p>
                  <input type="file" class="form-control" id="file" accept="image/*">
                  
                </div>
              </div>
          
              <!-- /col-md-4 -->
            </div>
            <!-- /row -->
          </div>
          <?php $id=$_REQUEST["id"];
              $sql = "select u.id,u.nom,u.prenom,u.mail,u.password,u.date,u.etat,u.datetat,u.photo from invitations i,user u where (idp=$session and (idm in (select idm from invitations where idp=$id and etat=1) or idm in (select idp from invitations where idm=$id and etat=1)) and idm=u.id and i.etat=1) or (idm=$session and (idp in (select idm from invitations where idp=$id and etat=1) or idp in (select idp from invitations where idm=$id and etat=1)) and idp=u.id and i.etat=1)";
              $res=mysqli_query($con,$sql); 
              if($kar = mysqli_fetch_array($res))
              { ?>
          <div class="col-lg-12 mt">
            <div class="row content-panel" style="padding-bottom:0">
             
                <div class="col-md-4 offset-md-4">
                  <h1 style="font-weight:bold;color:purple;font-size:30px">amis en commun:</h1>
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
              $sql = "select u.id,u.nom,u.prenom,u.mail,u.password,u.date,u.etat,u.datetat,u.photo from invitations i,user u where ((idp=$id and (idm not in (select idm from invitations where idp=$session) and idm not in (select idp from invitations where idm=$session)) and idm=u.id) or (idm=$id and (idp not in (select idm from invitations where idp=$session) and idp not in (select idp from invitations where idm=$session)) and idp=u.id)) and u.id!=$session";
              $res=mysqli_query($con,$sql); 
              if($kar = mysqli_fetch_array($res))
              { ?>
          <div class="col-lg-12 mt">
            <div class="row content-panel" style="padding-bottom:0">
             
                <div class="col-md-8 offset-md-4">
                  <h1 style="font-weight:bold;color:purple;font-size:30px">Suggestions de demande d'amis:</h1>
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