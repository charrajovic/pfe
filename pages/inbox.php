<?php 
  $infos=array();
  $infos=rec_fichier();
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
  <title>compte</title>

  <!-- Favicons -->
  <link href="./img/logo.jpg" rel="icon">
  <link href="./img/logo.jpg" rel="apple-touch-icon">

  <!-- Bootstrap core CSS -->
  <link href="cssfile/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <!--external css-->
  <link href="cssfile/lib/font-awesome/css/font-awesome.css" rel="stylesheet" />
  <link href="cssfile/lib/fancybox/jquery.fancybox.css" rel="stylesheet" />
  <!-- Custom styles for this template -->
  <link href="cssfile/css/style.css" rel="stylesheet">
  <link href="cssfile/css/style-responsive.css" rel="stylesheet">
  <script src="cssfile/lib/jquery/jquery.min.js"></script>

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
                <p class="green" style="font-size:12px">rien de changement sur les regles d'amenagement</p>
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
          
        </ul>
        
      </div>
      <div class="top-menu">
        <ul class="nav pull-right top-menu">
          <li><a class=" logout" href="index.php?page=deconnecter" ><b style="color: white">se deconnecter</b> </a></li>
        </ul>
      </div>
    </header>
    <aside>
      <div id="sidebar" class="nav-collapse " style="z-index:99">
        <!-- sidebar menu start-->
        <ul class="sidebar-menu" id="nav-accordion">
          <p class="centered"><a href="profile.php"><img style="height:102px;width:57%" src="<?php echo $_SESSION["profil"]; ?>" class="img-circle" width="80" id="modi"></a></p>
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
              <span style="color:#aeb2b7;cursor:pointer">consulter les regles</span>
              </a>
            <ul class="sub">
              <li><a href="zones.php">consultation les zones</a></li>
              <li><a href="regles.php">consultation les régles</a></li>
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
              <span id="msg">Chat</span>
              </a>
           
          </li>
          <li class="sub-menu">
            <a class="active" href="javascript:;">
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
          <!-- <div class="col-sm-3">
            <section class="panel" >
              <div class="panel-body">
                <a href="mail_compose.html" class="btn btn-compose">
                  <i class="fa fa-pencil"></i>  Compose Mail
                  </a>
                <ul class="nav nav-pills nav-stacked mail-nav">
                  <li class="active"><a href="inbox.html"> <i class="fa fa-inbox"></i> Inbox  <span class="label label-theme pull-right inbox-notification">3</span></a></li>
                  <li><a href="#"> <i class="fa fa-envelope-o"></i> Send Mail</a></li>
                  <li><a href="#"> <i class="fa fa-exclamation-circle"></i> Important</a></li>
                  <li><a href="#"> <i class="fa fa-file-text-o"></i> Drafts <span class="label label-info pull-right inbox-notification">8</span></a></a>
                  </li>
                  <li><a href="#"> <i class="fa fa-trash-o"></i> Trash</a></li>
                </ul>
              </div>
            </section>
            <section class="panel">
              <div class="panel-body">
                <ul class="nav nav-pills nav-stacked labels-info ">
                  <li>
                    <h4>Friends Online</h4>
                  </li>
                  <li>
                    <a href="#">
                        <img src="img/friends/fr-10.jpg" class="img-circle" width="20">Laura
                        <p><span class="label label-success">Available</span></p>
                      </a>
                  </li>
                  <li>
                    <a href="#">
                        <img src="img/friends/fr-05.jpg" class="img-circle" width="20">David
                        <p><span class="label label-danger"> Busy</span></p>
                      </a>
                  </li>
                  <li>
                    <a href="#">
                        <img src="img/friends/fr-01.jpg" class="img-circle" width="20">Mark
                        <p>Offline</p>
                      </a>
                  </li>
                  <li>
                    <a href="#">
                        <img src="img/friends/fr-03.jpg" class="img-circle" width="20">Phillip
                        <p>Offline</p>
                      </a>
                  </li>
                  <li>
                    <a href="#">
                        <img src="img/friends/fr-02.jpg" class="img-circle" width="20">Joshua
                        <p>Offline</p>
                      </a>
                  </li>
                </ul>
                <a href="#"> + Add More</a>
                
                <div class="inbox-body text-center inbox-action">
                  <div class="btn-group">
                    <a class="btn mini btn-default" href="javascript:;">
                      <i class="fa fa-power-off"></i>
                      </a>
                  </div>
                  <div class="btn-group">
                    <a class="btn mini btn-default" href="javascript:;">
                      <i class="fa fa-cog"></i>
                      </a>
                  </div>
                </div>
              </div>
            </section>
          </div> -->
          <em id="emaile" style="visibility: hidden;"><?php  echo $_SESSION['email'] ?></em>
          <div class="col-sm-12" style="min-height: 538px;">
            <section class="panel" id="hid">
            <?php if(!isset($_SESSION["proposition"])){ ?>
              <header class="panel-heading wht-bg">
                
                <h4 class="gen-case">
                 
                    <span id="inbo"></span>
                  
                    <form action="#" class="pull-right mail-src-position">
                      <div class="input-append">
                        <input type="text" class="form-control " placeholder="Search Mail">
                      </div>
                    </form>
                  </h4>
               
              </header>
              <?php } ?>
              <div class="panel-body minimal">
                <?php if(!isset($_SESSION["proposition"])){ ?>
                <div class="mail-option">
                  <div class="chk-all">
                    <div class="pull-left mail-checkbox">
                      <input type="checkbox" class="">
                    </div>
                    <div class="btn-group">
                      <a data-toggle="dropdown" href="#" class="btn mini all">
                        All
                        <i class="fa fa-angle-down "></i>
                        </a>
                      <ul class="dropdown-menu">
                        <li><a href="#"> None</a></li>
                        <li><a href="#"> Read</a></li>
                        <li><a href="#"> Unread</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="btn-group">
                    <a data-original-title="Refresh" data-placement="top" data-toggle="dropdown" href="#" class="btn mini tooltips">
                      <i class=" fa fa-refresh"></i>
                      </a>
                  </div>
                  <div class="btn-group hidden-phone">
                    <a data-toggle="dropdown" href="#" class="btn mini blue">
                      More
                      <i class="fa fa-angle-down "></i>
                      </a>
                    <ul class="dropdown-menu">
                      <li><a href="#"><i class="fa fa-pencil"></i> Mark as Read</a></li>
                      <li><a href="#"><i class="fa fa-ban"></i> Spam</a></li>
                      <li class="divider"></li>
                      <li><a href="#"><i class="fa fa-trash-o"></i> Delete</a></li>
                    </ul>
                  </div>
                  <div class="btn-group">
                    <a data-toggle="dropdown" href="#" class="btn mini blue">
                      Move to
                      <i class="fa fa-angle-down "></i>
                      </a>
                    <ul class="dropdown-menu">
                      <li><a href="#"><i class="fa fa-pencil"></i> Mark as Read</a></li>
                      <li><a href="#"><i class="fa fa-ban"></i> Spam</a></li>
                      <li class="divider"></li>
                      <li><a href="#"><i class="fa fa-trash-o"></i> Delete</a></li>
                    </ul>
                  </div>
                  <ul class="unstyled inbox-pagination">
                    <li><span>1-50 of 99</span></li>
                    <li>
                      <a class="np-btn" href="#"><i class="fa fa-angle-left  pagination-left"></i></a>
                    </li>
                    <li>
                      <a class="np-btn" href="#"><i class="fa fa-angle-right pagination-right"></i></a>
                    </li>
                  </ul>
                </div>
                <?php } ?>
                <div class="table-inbox-wrap ">
                  <table class="table table-inbox table-hover">
                  <?php 
                        if(isset($_SESSION["proposition"]))
                        {
                          echo '<tbody id="add" style="display:none">
                          
                          </tbody>';
                          $id= $_SESSION["proposition"];
                          $GLOBALS['conn']->query("UPDATE `destinataire` SET `etat`=1 WHERE id=$id AND  etat!=1 ");
                            $res=$GLOBALS['conn']->query("SELECT message,datep,file,nom_expediteur,profil,travail,email FROM conversation,destinataire,user WHERE id_message=destinataire.id AND email=email_expe AND destinataire.id=$id ORDER BY datep");
                          
                            while ($data=$res->fetch()) {
                              $mail=$data['email'];
                                echo '<header class="panel-heading wht-bg">'.
                                '<div class="row"><div class="col-md-5"><h4 class="gen-case">'.
                                   'Voir les propositions</h4></div>'.
                                    '<div class="col-md-3 offset-md-4"><form action="#" class="pull-right mail-src-position">'.
                                      '<div class="input-append">'.
                                        '<input type="text" class="form-control " placeholder="Search Mail">'.
                                      '</div>'.
                                   '</form>'.
                                  '</div>'.
                              '</header>'.
                              '<div class="panel-body ">'.
                                '<div class="mail-header row">'.
                                  '<div class="col-md-8">'.
                                    '<h4 class="pull-left">salut monsieur </h4>'.
                                  '</div>'.
                                  '<div class="col-md-4">'.
                                    '<div class="compose-btn pull-right">'.
                                      '<input type="button" value = "retour" onclick="history.go(0)" />'.
                                      '<button class="btn  btn-sm tooltips" data-original-title="Print" type="button" data-toggle="tooltip" data-placement="top" title="">'.'<i class="fa fa-print">'.'</i> '.'</button>'.
                                      '<button class="btn btn-sm tooltips" data-original-title="Trash" data-toggle="tooltip" data-placement="top" title="">'.'<i class="fa fa-trash-o">'.'</i>'.'</button>'.
                                   ' </div>'.
                                  '</div>'.
                                '</div>'.
                                '<div class="mail-sender">'.
                                  '<div class="row">'.
                                    '<div class="col-md-8">'.
                                      '<img src="'.$data["profil"].'" alt="" height="30" width="30" id="profil">'.
                                      '<strong id="nom_expediteur"></strong>'.
                                      '<span id="email">['.$mail.']</span>'.' à'.
                                      '<strong>'.'moi'.'</strong>'.
                                    '</div>'.
                                   '<div class="col-md-4">'.
                                      '<p class="date" id="date"> '.'</p>'.
                                    '</div>'.
                                  '</div>'.
                                '</div>'.
                                '<div class="view-mail" id="message">'.
                                $data["message"].
                                '</div>'.
                                '<div class="attachment-mail">'.
                                  
                                  '<ul>'.
                                    '<li>'.
                                      '<a class="atch-thumb" href="#">'.
                                       ' <img src="cssfile/img/logo_txt.jpg">'.
                                        '</a>'.
                                     '<a class="name" href="#" id="file">'.$data["file"].
                                       
                                        '<span>20KB</span>'.
                                       '</a>'.
                                      '<div class="links">'.
                                        '<button type="button" class="btn btn-outline-primary">'.'voir'.'</button>'.
                                         '<a class="name" id="myAnchor" href="upload/'.$data["file"].'" download>'.
                                        '<button class="btn btn-outline-secondary" name="down">'.'telecharger'.'</button>'.
                                      '</a>'.
                                      '</div>'.
                                    '</li>'.
                                  '</ul>'.
                                '</div>'.
                
                                '<div class="compose-btn pull-left">'.
                                  '<a href="mail_compose.html" class="btn btn-sm btn-theme">'.'<i class="fa fa-reply">'.'</i>'.' Reply'.'</a>'.
                                  '<button class="btn btn-sm ">'.'<i class="fa fa-arrow-right">'.'</i>'.' Forward'.'</button>'.
                                  '<button class="btn  btn-sm tooltips" data-original-title="Print" type="button" data-toggle="tooltip" data-placement="top" title="">'.'<i class="fa fa-print">'.'</i>'.' </button>'.
                                  '<button class="btn btn-sm tooltips" data-original-title="Trash" data-toggle="tooltip" data-placement="top" title="">'.'<i class="fa fa-trash-o"></i></button>'.
                                '</div>'.
                              '</div>';
                            }
                            unset($_SESSION["proposition"]);
                        }
                        else
                        {
                     ?>

                    <tbody id="add">
                    
                    </tbody>
                        <?php } ?>
                  </table>
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
        <a href="index.php?page=compte" class="go-top">
          <i class="fa fa-angle-up"></i>
          </a>
      </div>
    </footer>
    <!--footer end-->
  </section>
  <!-- js placed at the end of the document so the pages load faster -->
  <script type="text/javascript" src="cssfile/inbox.js"></script>
  <script src="cssfile/lib/fancybox/jquery.fancybox.js"></script>
  <script src="cssfile/lib/bootstrap/js/bootstrap.min.js"></script>
  <script class="include" type="text/javascript" src="cssfile/lib/jquery.dcjqaccordion.2.7.js"></script>
  <script src="cssfile/lib/jquery.scrollTo.min.js"></script>
  <script src="cssfile/lib/jquery.nicescroll.js" type="text/javascript"></script>
  <!--common script for all pages-->
  <script src="cssfile/lib/common-scripts.js"></script>
  <!--script for this page-->
  <script type="text/javascript">
    $(function() {
      //    fancybox
      jQuery(".fancybox").fancybox();
    });
  </script>

</body>

</html>
