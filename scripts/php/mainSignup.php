<?php
require 'config.php';
var_dump($_POST);
//Password security by hashing
$hash = password_hash($_POST['password'], PASSWORD_DEFAULT, ['cost' => 12]);
echo $hash
?>