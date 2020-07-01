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
  <!-- <link rel="stylesheet" href="css/list.css"/> -->
  <link href="css/style-responsive.css" rel="stylesheet">
  <link href="acc.css" rel="stylesheet" />
  <style>
.loader {
  margin:auto;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
  <script src="jquery.min.js"></script>
  <script src="lib/chart-master/Chart.js"></script>
   <script src="msgat.js"></script>

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
          <p class="centered"><a href="profile.php"><img src="<?php echo $_SESSION["profil"]; ?>" class="img-circle" width="80" id="modi"></a></p>
          <h5 class="centered"><?php echo $_SESSION["nom"]." ".$_SESSION["prenom"]; ?></h5>
          <li class="mt">
            <a class="unset" href="index.php?page=compte">
              <i class="fa fa-dashboard"></i>
              <span>Acceuil</span>
              </a>
          </li>
          <li class="sub-menu">
            <a>
              <i class="fa fa-desktop"></i>
              <span>consulter les regles</span>
              </a>
            <ul class="sub">
            <li><a  class="unset" href="zones">consultation les zones</a></li>
              <li><a  class="unset" href="regles">consultation les régles</a></li>
            </ul>
          </li>
          <li class="sub-menu">
            <a class="unset" href="list">
              <i class="fa fa-cogs"></i>
              <span>list des architect</span>
              </a>
          </li>
          <li class="unset" class="sub-menu">
            <a class="active" href="message">
              <i class="fa fa-book"></i>
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
        <!-- page start-->
        <div class="row mt">
          <div class="col-sm-3">
            <section class="panel">
              <div class="row panel-body">
              <div class="offset-md-4">
                List des amis
              </div>
              </div>
              <?php $id=$_SESSION["id"];
              $sql = "SELECT u.id,`nom`,`prenom`,`email`,`password`,`date`,u.etaton,`datetat`,`profil` FROM `user` u,invitations i WHERE (i.idp=$id or i.idm=$id) and (i.idp=u.id or i.idm=u.id) and u.id!=$id and i.etat=1";
              $res=mysqli_query($con,$sql);  
              while($kar = mysqli_fetch_array($res))
              { ?>
                  <div class="row panel-body" style="border:1px">
                        <p style="display:none"><?php echo $kar[0]; ?></p>
                        <div class="col-1" style="background-image: url('<?php echo $kar[8]; ?>');background-repeat: no-repeat;background-size: 100% 100%;height:20px;border-radius:50%"></div>
                        <div class="col-7 msgat" style="font-weight:bold;cursor:pointer">
                         <?php echo $kar[1]." ".$kar[2]; ?>
                        </div>
                        <div class="offset-1 onlin" style="color:red">
                          offline
                        </div>
                        </div>
              <?php } ?>
            </section>
          </div>
          <div class="col-sm-9">
            <section id="messages" style="display:none;height:500px"></section>
            <section class="panel" id="cont">
              <?php if(isset($_SESSION["target"])){
                $idm=$_SESSION["target"];
                $sql = "SELECT `nom`,`prenom` FROM `user` WHERE id=$idm";
                $res=mysqli_query($con,$sql); 
                if($kar = mysqli_fetch_array($res))
                {
                  ?><h4 id="noms" style="display:none"><?php echo $kar[0]; ?></h4><h4 id="prenoms" style="display:none"><?php echo $kar[1]; ?></h4><?php
                } 
                  ?><h4 class="idnotif" style="display:none"><?php echo $_SESSION["target"]; ?></h4><div class="loader"></div><?php
              }else{ ?>
                <div class="row" style="font-weight: bold;font-size:x-large">
                  <div class="offset-md-4">
                      chat entre les architect
                  </div>
                </div>
                <div class="row" style="font-weight: bold;font-size:larger">
                  <div class="col-md-12">
                      si tu veux contacter avec autre architect Vous devez d'abord l'inviter, et après avoir accepté votre demande, vous pouvez lui parler quand vous le souhaitez
                  </div>
                </div>
                <div class="row" >
                  <div class="col-md-12">
                      <div style="background-image: url('img/architect.jpg');background-repeat: no-repeat;background-size: 100% 100%;height:275px"></div>
                  </div>
                </div>
              <?php } ?>
            </section>
          </div>
        </div>
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