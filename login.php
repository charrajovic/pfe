<!DOCTYPE html>
<head>
<link rel="stylesheet" href="bootstrap/css/bootstrap.css"/>
<link rel="stylesheet" href="css/login.css"/>
<script src="jquery.min.js"></script>
<script src="login.js"></script>
</head>
<body>
<div class="container-fluid">
<div class="row first">
<div class="col-md-2 offset-md-1 miaw">
Facebook
</div>
<div class="col-md-2 offset-md-3">
<label class="lolo">Adresse e-mail ou mobile</label>
<input type="text" class="form-control" id="mail" name="username">
</div>
<div class="col-md-2">
<label class="lolo">Mot de passe</label>
<input type="password" class="form-control" id="pass" name="password">
<a href="#" class="lol">Informations de compte oubliées ?</a>
</div>
<div class="col-md-1">
<button class="bt btn btn-success" id="auth">connect</button>
</div>
</div>
<div class="row">
<div class="col-md-4 offset-md-1">
<h5 class="haw">Avec Facebook, partagez et restez en contact avec votre entourage.</h5>
<div class="img"></div>
</div>
<div class="col-md-4 offset-md-1">
<form method="get" action="index.php">
<h2>Créer un compte</h2>
<h5>C’est rapide et facile.</h5>
<div class="row">
<div class="col-md-6">
<input type="text" class="form-control" placeholder="Prenom" name="username">
</div>
<div class="col-md-6">
<input type="text" class="form-control" placeholder="Nom de famille">
</div>
</div>
<input type="text" class="form-control" placeholder="Numero de mobile ou email">
<input type="text" class="form-control" placeholder="Nouveau mot de pass" name="password">
<h5>Date de naissance</h5>
<select>
<option>1</option>
</select>
<select>
<option>Junuary</option>
</select>
<select>
<option>2000</option>
</select>
<h5>Genre</h5>
<input type="radio" name="wiw"/><span>Femme</span>
<input type="radio" name="wiw"/><span>Homme</span>
<input type="radio" name="wiw"/><span>Personnalisé</span>
<p class="lolo">En appuyant sur Inscription, vous acceptez nos Conditions générales, notre Politique d’utilisation des données et notre Politique d’utilisation des cookies. Vous recevrez peut-être des notifications par texto de notre part et vous pouvez à tout moment vous désabonner.</p>
<div class="row">
<div class="col-md-10">
<input type="submit" value="Inscription" class="bt btn btn-success form-control"/>
</div>
</div>
</form>
</div>
</div>
</div>
</body>
</html>