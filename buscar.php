<?php 

$_SESSION['id'] = $_POST['esc'];
$id = explode('|', $_SESSION['id']);
$_SESSION['id'] = $id[0];

?>