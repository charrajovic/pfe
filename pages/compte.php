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
              <?php foreach ($notis as $noti) {
                      
                        ?>
              <li>
                <a href="index.html#">
                  <span class="photo"><img src="cssfile/img/<?php echo $noti['profil']?>"></span>
                  <span class="subject">
                  <span class="from"><?php echo $noti['nom_expediteur']?></span>
                  <span class="time"><?php
                    $to_time = date('i',strtotime($noti['datep']));
                    $from_time = date('i',time());
                    $temp=round(abs($to_time - $from_time));
                    if ($temp<=60) {
                     echo $temp. " min";
                    } else {
                      date("h",$temp). "h";
                    }
                    
                    ?></span>
                  </span>
                  <span class="subject"><?php echo $noti['sujet']?></span>
                  </a>
              </li>
            <?php }
                        
               ?>
              <li>
                 
                <a href="index.php?page=inbox">voit tout</a>
              </li>
            </ul>
          </li>
          <!-- inbox dropdown end -->
          <!-- notification dropdown start-->
          <li id="header_notification_bar" class="dropdown">
            <a data-toggle="dropdown" class="dropdown-toggle" href="index.html#">
              <i class="fa fa-bell"></i>
              <span class="badge bg-warning">7</span>
              </a>
            <ul class="dropdown-menu extended notification">
              <div class="notify-arrow notify-arrow-yellow"></div>
              <li>
                <p class="yellow">You have 7 new notifications</p>
              </li>
              <li>
                <a href="index.html#">
                  <span class="label label-danger"><i class="fa fa-bolt"></i></span>
                  Server Overloaded.
                  <span class="small italic">4 mins.</span>
                  </a>
              </li>
              <li>
                <a href="index.html#">
                  <span class="label label-warning"><i class="fa fa-bell"></i></span>
                  Memory #2 Not Responding.
                  <span class="small italic">30 mins.</span>
                  </a>
              </li>
              <li>
                <a href="index.html#">
                  <span class="label label-danger"><i class="fa fa-bolt"></i></span>
                  Disk Space Reached 85%.
                  <span class="small italic">2 hrs.</span>
                  </a>
              </li>
              <li>
                <a href="index.html#">
                  <span class="label label-success"><i class="fa fa-plus"></i></span>
                  New User Registered.
                  <span class="small italic">3 hrs.</span>
                  </a>
              </li>
              <li>
                <a href="index.html#">See all notifications</a>
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
      <div id="sidebar" class="nav-collapse ">
        <!-- sidebar menu start-->
        <ul class="sidebar-menu" id="nav-accordion">
          <p class="centered"><a href="index.php?page=profil"><img src="cssfile/img/<?php echo $_SESSION['profil']; ?>" class="img-circle" width="120" height="120" id="image"></a></p>
         
          <h5 class="centered"><i class="fa fa-user"></i><?php echo " ".$_SESSION['nom']." ".$_SESSION['prenom']; ?><hr></h5>
         <li class="mt">
            <a class="active" href="index.php?page=compte">
              <i class="fa fa-home"></i>
              <span>acceuil</span>
              </a>
          </li>
          <li class="sub-menu">
            <a href="javascript:;">
              <i class="fa fa-desktop"></i>
              <span>Propositions</span>
              </a>
            <ul class="sub">
              <li><a href="index.php?page=proposition"><i class="fa fa-upload"></i>envoyer proposition</a></li>
              <li><a href="index.php?page=inbox"><i class="fa fa-inbox"></i>boite de recéption</a></li>
              <li><a href="index.php?page=message_envoye#"><i class="fa fa-send"></i>messages envoyés</a></li>
            
            </ul>
          </li>
          </li>
         
          <li>
            <a href="#">
              <i class="fa fa-comments"></i>
              <span>Chat Room</span>
              </a>
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
  <script type="text/javascript">
    $(document).ready(function() {
      var unique_id = $.gritter.add({
        // (string | mandatory) the heading of the notification
        title: 'Welcome to architechture!',
        // (string | mandatory) the text inside the notification
        text: 'salam consulter les nouveau regles.',
        // (string | optional) the image to display on the left
        image: 'cssfile/img/<?php echo  $_SESSION['profil'] ?>',
        // (bool | optional) if you want it to fade out on its own or just sit there
        sticky: false,
        // (int | optional) the time you want it to be alive for before fading out
        time: 4000,
        // (string | optional) the class name you want to apply to that specific message
        class_name: 'my-sticky-class'
      });

      return false;
    });
  </script>
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
