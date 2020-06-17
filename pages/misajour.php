<?php 
   // if (isset($_SESSION['email'])) {
   //  $var = recu_info_com();
   //  foreach ($var as  $val) {
   //    $_SESSION['nom']=$val['nom'];
   //    $_SESSION['prenom']=$val['nom'];
   //    $_SESSION['travail']=$val['travail'];

      
   //   }
   // }
   
if(isset($_POST['changer'])){

  $Npassword =htmlentities(trim(sha1($_POST["Nouveau"]))) ;
  $Epassword =htmlentities(trim(sha1($_POST["encien"]))) ;
  $id= $_SESSION['id'];

    $res =$conn->prepare("SELECT  `password` FROM `utilisator` WHERE password LIKE ? ");
    $res -> execute(array($Epassword));
    if (!empty($res->fetch())) {

    echo "ok";
       $conn->query("UPDATE utilisator SET  password = '$Npassword' WHERE id =$id" );
    } else {
      echo "mot de passe erroné";
      echo $Epassword;

    }
    
}

 ?>
 <!DOCTYPE html>
<html>
<head>
  <title>update infos</title>
    <link rel="stylesheet" type="text/css" href="cssfile/misajour.css">
    <link rel="stylesheet" type="text/css" href="cssfile/font/css/all.css">
    <link rel="stylesheet" type="text/css" href="cssfile/lib/changeimage.css">
    <script  src="cssfile/jquery-3.5.0.js"></script>
    
       
   </head>
<body>
 
  

    <div class="container-fluid">
    <div class="row">
         <div class="col-md-6 offset-md-3" id="cacher">
            <form method="POST" action="">
                <label >encien password </label>
                  <input type="password" class="form-control" id="encien-password" name="encien">
               <label > Nouveau password</label><br>
                    <input type="password" class="form-control" id="Nouveau-password" name="Nouveau">
                    <small id="verficatio" class="form-text text-muted">verfier votre password lors de changement.</small><br>
                     <button type="submit" class="btn btn-primary" id="annuler">annuler</button>
                      <input type="submit" class="btn btn-primary" id="changer" value="changer" name="changer">
                </form>
                   
     
         </div>
           <div id="ring">
        </div>
    </div>


         <div class="row tab  " id="tabe">
                     <div class="col-md-8 offset-md-2" id="hid">
                       <table class="table table-dark" id="tab" >  
                        <tr >
                        <td ><b>nom</b></td>
                         <td ><?php echo $_SESSION['nom'];?></td>
                         <td ><i class="modif fas fa-pencil-alt" id="nom"></i></td>
                      </tr>
                       <tr >
                        <td ><b>prenom</b></td>
                         <td ><?php echo $_SESSION['prenom']; ?></td>
                         <td ><i class="modif fas fa-pencil-alt" id="prenom"></i></td>
                       </tr>
                       
                        <tr >
                        <td ><b>email</b></td>
                         <td ><?php echo $_SESSION['email']; ?></td>
                         <td ><i class="modif fas fa-pencil-alt" id="email"></i></td>
                       
                        <tr id="password">
                        <td ><b>password</b></td>
                         <td >xxxXxxxXxxx</td>
                         <td ><i class=" fas fa-pencil-alt" id="modifpssd"></i></td>

                        <tr >
                        <td ><b>travail</b></td>
                         <td ><?php echo $_SESSION['travail']; ?></td>
                         <td ><i class="modif fas fa-pencil-alt" id="travail"></i></td>
                    
                    </table>
                  </div>
         </div>
    </div>

</body>
</html> 