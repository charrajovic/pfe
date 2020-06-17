<?php 
if (isset($_POST['envoie'])) {
	     $email=htmlentities($_POST['email']);
         $message =$_POST['message'];
         $objet = htmlentities($_POST['sujet']);
	     $name=$_FILES['file']['name'];
         $localisation=$_FILES['file']['tmp_name'];
      
         if (!empty($email) ) {
         	 if (!filter_var( trim($email),FILTER_VALIDATE_EMAIL) ) {
              $err_champ= "votre email n'est pas valide";
        }else if ( verfie_email_exist($email)!=1) {
             $err_champ= "verifier attentivement la destination ";
        }else{
          if (!empty($name) AND !empty($objet)) {
             $nom= recuperation_nom_destinataire($email);
               
               envoyer_fichier($name,$localisation,$message,$objet,$nom,$_SESSION['nom'],$email,$_SESSION['email']);
                
               $seccess= "votre propositon bien envoyé";
          }
         
        }
         

         } else {
         	$err_champ="champ obligatoire*";
         }
         
        
      if (empty($objet)) {
         	
            $err_subj='champ obligatoire*';
         } 
      
         if (!empty($name) AND !empty($localisation)) {
            $people = array("xml", "txt");
            $file_extesion=explode('.',$name);
            $file_extesion=end($file_extesion);
            $file_extesion=strtolower($file_extesion);
            if (!in_array($file_extesion,$people)) {
              
                $err_file='veuillez choisi un forma valide .txt ou .xml ';
            } 
           }else
           $err_file='veuillez choisi un fichier' ;   
        
   } 

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
  
  <title>evoyer proposition</title>

  <!-- Favicons -->
  <link href="cssfile/img/favicon.png" rel="icon">
  <link href="cssfile/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Bootstrap core CSS -->
  <link href="cssfile/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <!--external css-->
  <link href="cssfile/lib/font-awesome/css/font-awesome.css" rel="stylesheet" />
  <link href="cssfile/lib/bootstrap-wysihtml5/bootstrap-wysihtml5.css" rel="stylesheet" />
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
      <a href="index.html" class="logo"><b>AMI<span>ne</span></b></a>
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
              <i class="fa fa-envelope-o"></i>
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
           
                <a href="index.php?page=inbox">See all messages</a>
              </li>
            </ul>
          </li>
          <!-- notification dropdown start-->
          <li id="header_notification_bar" class="dropdown">
            <a data-toggle="dropdown" class="dropdown-toggle" href="index.html#">
              <i class="fa fa-bell-o"></i>
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
                <a href="index.php?page=inbox">voit tout</a>
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
          <p class="centered"><a href="index.php?page=profil"><img src="cssfile/img/<?php echo $_SESSION['profil']; ?>" class="img-circle" width="120" id="image" height="120"></a></p>
         
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
              <li><a href="index.php?page=proposition#"><i class="fa fa-upload"></i>envoyer proposition</a></li>
              <li><a href="index.php?page=inbox#"><i class="fa fa-inbox"></i>boite de recéption</a></li>
              <li><a href="index.php?page=message_envoye#"><i class="fa fa-send"></i>messages envoyés</a></li>
            
            </ul>
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
    <section id="main-content">
      <section class="wrapper">
        <!-- page start-->
        <div class="row mt">
          <div class="col-sm-3">
            <section class="panel">
              <div class="panel-body">
                <ul class="nav nav-pills nav-stacked labels-info ">
                  <li>
                    <h4>Friends Online</h4>
                  </li>
                  <br>
                 
                  <li>
                    <a href="#">
                        <img src="cssfile/img/friends/fr-05.jpg" class="img-circle" width="20">David
                        <p><span class="label label-danger"> Busy</span></p>
                      </a>
                  </li>
                  <li>
                    <a href="#">
                        <img src="cssfile/img/friends/fr-01.jpg" class="img-circle" width="20">Mark
                        <p>Offline</p>
                      </a>
                  </li>
                  <li>
                    <a href="#">
                        <img src="cssfile/img/friends/fr-03.jpg" class="img-circle" width="20">Phillip
                        <p>Offline</p>
                      </a>
                  </li>
                  <li>
                    <a href="#">
                        <img src="cssfile/img/friends/fr-02.jpg" class="img-circle" width="20">Joshua
                        <p>Offline</p>
                      </a>
                  </li>
                </ul>
              
               
                  <div class="btn-group">
                    <?php if (isset($seccess)) {?>
                    <button class="btn btn-theme btn-sm" id="anuler"><h5 ><i class="fa fa-check"></i><?php echo $seccess; ?></h5></button> 
                   
                  <?php  } ?>
                  </div>
                  
                
              </div>
            </section>
          </div>
          <div class="col-sm-9">
            <section class="panel">
              <header class="panel-heading wht-bg">
                <h4 class="gen-case">
                    Compose Mail
                    <form action="#" class="pull-right mail-src-position">
                      <div class="input-append">
                        <input type="text" class="form-control " placeholder="Search Mail">
                      </div>
                    </form>
                  </h4>
              </header>
              <div class="panel-body">
                
                <div class="compose-mail">
                  <form role="form-horizontal" method="post" enctype="multipart/form-data">
                    <div class="form-group">
                      <label for="to" class="">To:</label>
                      <input type="text" tabindex="1" id="to" class="form-control ajax" name="email" value="<?php echo isset($email)?$email :'';?>" ><br><br>
                        <span style="color: red;font-family:serif;font-weight: bold;font-size: 15px" id="top"><?php if(isset($err_champ)) echo $err_champ;?></span>
                    <div class="form-group">
                      <label for="subject" class="">Subject:</label>
                      <input type="text" tabindex="1" id="subject" class="form-control ajax" name="sujet"  value="<?php echo isset($objet)?$objet :'';?>"><br><br>
                        <span style="color: red;font-family:serif;font-weight: bold;font-size: 15px" id="sujetp"><i class="fa fa-danger"></i><?php if(isset($err_subj)) echo $err_subj;?></span>
                    </div>
                    <div class="compose-editor">
                      <textarea class="wysihtml5 form-control ajax" rows="9" name="message" ><?php echo isset($message)?$message :'';?></textarea>
                      <input type="file" class="default " name="file" id="dos"  ><br>
                      <span style="color: red;font-family:serif;font-weight: bold;font-size: 15px" id="file"><br><?php if(isset($err_file)) echo $err_file;?></span>
                      
                    </div>
                    <div class="compose-btn">
                      <button class="btn btn-theme btn-sm" type="submit" name="envoie" ><i class="fa fa-check"></i>ENVOYERS</button>
                      <button class="btn btn-sm"><i class="fa fa-times"></i> Discard</button>
                     
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
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
        <a href="mail_compose.html#" class="go-top">
          <i class="fa fa-angle-up"></i>
          </a>
      </div>
    </footer>
    <!--footer end-->
  </section>
  <!-- js placed at the end of the document so the pages load faster -->
   <script type="text/javascript" src="cssfile/proposition.js"></script>
     <script src="cssfile/lib/jquery/jquery.min.js"></script>
  <script src="cssfile/lib/bootstrap/js/bootstrap.min.js"></script>
  <script class="include" type="text/javascript" src="cssfile/lib/jquery.dcjqaccordion.2.7.js"></script>
  <script src="cssfile/lib/jquery.scrollTo.min.js"></script>
  <script src="cssfile/lib/jquery.nicescroll.js" type="text/javascript"></script>
  <!--common script for all pages-->
  <script src="cssfile/lib/common-scripts.js"></script>
  <!--script for this page-->
  <script type="text/javascript" src="cssfile/lib/bootstrap-wysihtml5/wysihtml5-0.3.0.js"></script>
  <script type="text/javascript" src="cssfile/lib/bootstrap-wysihtml5/bootstrap-wysihtml5.js"></script>

  <script type="text/javascript">
    //wysihtml5 start

    $('.wysihtml5').wysihtml5();

    //wysihtml5 end
  </script>
</body>

</html>