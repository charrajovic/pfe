<?php 
if(isset($_SESSION["id"]))
{ 
include("connect.php");

$sql = " SELECT * FROM `composant urbain` WHERE 1 ";

$row = mysqli_query($con, $sql) or die( mysqli_error($con));
?>
<?php 
include("fonctions/inbox.fonction.php");
 $count=count_message_envoye();   
  $data=count_message_recue();
    $notis=notification();

 ?>
<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <meta name="author" content="Dashboard">
  <meta name="keyword" content="Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">
  <title>architechture</title>
   <link rel="stylesheet" type="text/css" href="cssfile/silder.css">
  <!-- Favicons -->
  <link href="cssfile/img/favicon.png" rel="icon">
  <link href="cssfile/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Bootstrap core CSS -->
  <link href="cssfile/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <!--external css-->
  <link href="cssfile/lib/font-awesome/css/font-awesome.css" rel="stylesheet" />
  <link rel="stylesheet" type="text/css" href="cssfile/css/zabuto_calendar.css">
  <link rel="stylesheet" type="text/css" href="cssfile/lib/gritter/css/jquery.gritter.css" />
  <!-- Custom styles for this template -->
  <link href="cssfile/css/style.css" rel="stylesheet">
  <link href="cssfile/css/style-responsive.css" rel="stylesheet">
  <script src="cssfile/lib/chart-master/Chart.js"></script>

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
        <div class="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation"></div>
      </div>
      <!--logo start-->
      <a href="index.php?page=comte" class="logo"><b>ami<span>ne</span></b></a>
      <!--logo end-->
      <div class="nav notify-row" id="top_menu">
        <!--  notification start -->
        <ul class="nav top-menu">
          <!-- settings start -->
          <li class="dropdown">
            <a data-toggle="dropdown" class="dropdown-toggle" href="index.html#">
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
              <i class="fa fa-envelope"></i>
              <span class="badge bg-theme" id="nbre"><?php echo $data['nbr']; ?></span>
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
          <li><a class="logout" href="index.php?page=deconnecter">deconnexion</a></li>
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
            <a  class="active" href="index.php?page=compte">
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
            <a href="message">
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
        <em id="emaile" style="visibility: hidden;"><?php  echo $_SESSION['email'] ?></em>
        <!-- sidebar menu end-->
      </div>
    </aside>
    <!--sidebar end-->
    <!-- **********************************************************************************************************************************************************
        MAIN CONTENT
        *********************************************************************************************************************************************************** -->
    <!--main content start-->
    
      <section class="">
          <div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
     <img src="cssfile/img/man.jpg" style="width: 1156px;
    margin-left: 27px;
    height: 590px;
    margin-top: 60px">
  <div class="text">BIENVENUE A AMINE</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 3</div>
        <img src="cssfile/img/image2.jpeg" style="width: 1156px;
    margin-left: 27px;
    height: 590px;
    margin-top: 60px">
  <div class="text">SITE D'ARCHITECTURE</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 3</div>
    <img src="cssfile/img/image3.jpeg" style="width: 1156px;
    margin-left: 27px;
    height: 590px;
    margin-top: 60px">
  <div class="text">DISTINGUE </div>
</div>

</div>
<div style="text-align:center" class="bac">
  <span class="dot"></span> 
  <span class="dot"></span> 
  <span class="dot"></span> 
</div>
   </section>
 
  <!--  -->
    <!--main content end-->
    <!--footer start-->
    
    <!--footer end-->
  </section>
  
  <!-- js placed at the end of the document so the pages load faster -->
  <script type="text/javascript" src="cssfile/slider.js"></script>
  <script src="cssfile/lib/jquery/jquery.min.js"></script>
  <script src="cssfile/lib/bootstrap/js/bootstrap.min.js"></script>
  <script class="include" type="text/javascript" src="cssfile/lib/jquery.dcjqaccordion.2.7.js"></script>
  <script src="cssfile/lib/jquery.scrollTo.min.js"></script>
  <script src="cssfile/lib/jquery.nicescroll.js" type="text/javascript"></script>
  <script src="cssfile/lib/jquery.sparkline.js"></script>
  <!--common script for all pages-->
  <script src="cssfile/lib/common-scripts.js"></script>
  <script type="text/javascript" src="cssfile/lib/gritter/js/jquery.gritter.js"></script>
  <script type="text/javascript" src="cssfile/lib/gritter-conf.js"></script>
  <!--script for this page-->
  <script src="cssfile/lib/sparkline-chart.js"></script>
  <script src="cssfile/lib/zabuto_calendar.js"></script>
  <script type="application/javascript">
    $(document).ready(function() {
      $("#date-popover").popover({
        html: true,
        trigger: "manual"
      });
      $("#date-popover").hide();
      $("#date-popover").click(function(e) {
        $(this).hide();
      });

      $("#my-calendar").zabuto_calendar({
        action: function() {
          return myDateFunction(this.id, false);
        },
        action_nav: function() {
          return myNavFunction(this.id);
        },
        ajax: {
          url: "show_data.php?action=1",
          modal: true
        },
        legend: [{
            type: "text",
            label: "Special event",
            badge: "00"
          },
          {
            type: "block",
            label: "Regular event",
          }
        ]
      });
    });

    function myNavFunction(id) {
      $("#date-popover").hide();
      var nav = $("#" + id).data("navigation");
      var to = $("#" + id).data("to");
      console.log('nav ' + nav + ' to: ' + to.month + '/' + to.year);
    }
  </script>
</body>

</html>
<?php
}
else{
  header('location:login.php');
}
?>