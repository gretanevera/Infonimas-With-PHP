<?php
$servername = "localhost";
$username = "greta";
$password = "karkvabalis";
$dbname = "info_baze";

try {
    $conn = new \PDO("mysql:host=$servername;dbname=$dbname", $username, $password,[PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"]);
    $conn->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
}
catch(\PDOException $e) {
    echo "Error: " . $e->getMessage();
}
