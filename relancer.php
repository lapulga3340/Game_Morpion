<?php
    session_start();
    unset($_SESSION['grille']);
    header('Location: index.php');
    exit();
?>