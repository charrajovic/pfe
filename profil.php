





<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <meta name="author" content="Dashboard">
  <meta name="keyword" content="Dashboard, Bootstrap, Admin, Template, Theme, Responsive, Fluid, Retina">
  <title>profil</title>

  <!-- Favicons -->
 
  <link href="cssfile/img/favicon.png" rel="icon">
  <link href="cssfile/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Bootstrap core CSS -->
  <link href="cssfile/lib/bootstrap/css/bootstrap.css" rel="stylesheet">
  <!--external css-->
  <link href="cssfile/lib/font-awesome/css/font-awesome.css" rel="stylesheet" />
  <!-- Custom styles for this template -->
  <link href="cssfile/css/style.css" rel="stylesheet">
  <link href="cssfile/popup.css" rel="stylesheet">
  <link href="cssfile/css/style-responsive.css" rel="stylesheet">

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
              <span class="badge bg-theme"><?php echo $data['nbr']; ?></span>
              </a>
            <ul class="dropdown-menu extended inbox">
              <div class="notify-arrow notify-arrow-green"></div>
              <li>
                <p class="green">vous avez <?php echo $data['nbr']; ?> message(s)</p>
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
          <p class="centered"><a href="index.php?page=profil"><img src="cssfile/img/<?php echo $_SESSION['profil']; ?>" class="img-circle" width="120" height="120" id="image"></a></p><i class="fas fa-camera" style="color : white;margin-left: 45% " title="modifiers votre photo" id="tof"><input type="file" name="file" id="file" style="position: fixed;left: 2px;visibility: hidden;"></i>
         
          <h5 class="centered"><i class="fas fa-user"></i><?php echo " ".$_SESSION['nom']." ".$_SESSION['prenom']; ?><hr></h5>
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
              <li><a href="#"><i class="fa fa-send"></i>messages envoyés</a></li>
            
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
        <!-- sidebar menu end-->
      </div>
    </aside>
    <!--sidebar end-->
    <!-- **********************************************************************************************************************************************************
        MAIN CONTENT
        *********************************************************************************************************************************************************** -->
    <!--main content start-->
    <section id="main-content">
      <section class="wrapper ">
        <div class="row mt">
          <div class="col-lg-12">
            <?php 
           
            echo '<div class="row content-panel">
              <div class="col-md-4 profile-text mt mb centered">
                <div class="right-divider hidden-sm hidden-xs">
                   
                  <h4>votre nom :</h4>
                  <h5>'.$_SESSION['nom'].'</h5>
                  <h4>votre email :</h4>
                  <h5>'.$_SESSION['email'].'</h5>
                  <h4>votre travail :</h4>
                  <h5>'.$_SESSION['travail'].'</h5>
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
                  
                  <p><img id="modification" src="img/<?php echo $_SESSION['profil'];?>" class="img-circle" style="cursor: pointer;" ></p>
                  
                </div>
              </div>
          
              <!-- /col-md-4 -->
            </div>
            <!-- /row -->
          </div>
          
            
           <!-- /col-lg-12 -->
          <div class="col-lg-12 mt">
            <div class="row content-panel">
             
                <div class="col-md-4 offset-md-4">
                  <a href="#"><button style ="background-color: #4ECDC4" type="button" class="btn btn-primary btn-lg btn-block">modifiers votre informations</button></a>

                </div>
              
             
              
            </div>
            <!-- /col-lg-12 -->
          </div>
          <!-- /row -->

        </div>

        <div class="row">
          <div class="col-lg-12 ">
            <?php 
          
             include("pages/misajour.php");
           ?>
         </div>
        </div>
        <!-- /container -->
      </section>
      <!-- /wrapper -->
    </section>
    <!-- /MAIN CONTENT -->
    <!--main content end-->
    <!--footer start-->
    <footer class="site-footer">
      <div class="text-center">
        <p>
          &copy; Copyrights <strong>Dashio</strong>. All Rights Reserved
        </p>
        <div class="credits">
          <!--
            You are NOT allowed to delete the credit link to TemplateMag with free version.
            You can delete the credit link only if you bought the pro version.
            Buy the pro version with working PHP/AJAX contact form: https://templatemag.com/dashio-bootstrap-admin-template/
            Licensing information: https://templatemag.com/license/
          -->
          Created with Dashio template by <a href="https://templatemag.com/">TemplateMag</a>
        </div>
        <a href="index.php?page=profil" class="go-top">
          <i class="fa fa-angle-up"></i>
          </a>
      </div>
      <div id='pop'>
      </div>
          <div id='up'>
            <div id="karwa"><i class="fas fa-times" style="color:#4ECDC4";></i></div>
            <div id="title">photo par defaut</div>
            <div id="bac"></div>
          </div>
    </footer>
    <!--footer end-->
  </section>
  <!-- js placed at the end of the document so the pages load faster -->

  <script src="cssfile/misajour.js" > 
  </script><script src="cssfile/lib/changeimage.js"></script>
    
  <script src="cssfile/lib/jquery/jquery.min.js"></script>
  <script src="cssfile/lib/bootstrap/js/bootstrap.min.js"></script>
  <script class="include" type="text/javascript" src="cssfile/lib/jquery.dcjqaccordion.2.7.js"></script>
  <script src="cssfile/lib/jquery.scrollTo.min.js"></script>
  <script src="cssfile/lib/jquery.nicescroll.js" type="text/javascript"></script>
  <!--common script for all pages-->
  <script src="cssfile/lib/common-scripts.js"></script>
  

  <!--script for this page-->
  <!-- MAP SCRIPT - ALL CONFIGURATION IS PLACED HERE - VIEW OUR DOCUMENTATION FOR FURTHER INFORMATION -->
  <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyASm3CwaK9qtcZEWYa-iQwHaGi3gcosAJc&sensor=false"></script>
  <script>
    $('.contact-map').click(function() {

      //google map in tab click initialize
      function initialize() {
        var myLatlng = new google.maps.LatLng(40.6700, -73.9400);
        var mapOptions = {
          zoom: 11,
          scrollwheel: false,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById('map'), mapOptions);
        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Dashio Admin Theme!'
        });
      }
      google.maps.event.addDomListener(window, 'click', initialize);
    });
  </script>
</body>

</html>
