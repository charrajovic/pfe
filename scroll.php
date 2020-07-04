<?php

session_start();

$_SESSION["scrol"]-=20;

echo $_SESSION["scrol"];

?>