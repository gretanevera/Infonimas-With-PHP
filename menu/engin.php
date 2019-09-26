<?php


//parasyti funkcija kuri onclick atitinkama klase paimtu jos numeri ir iteptu i id laukeli
//ar tai padaryti per js ar per php (tikriausiai per php) ne=inau
//bet jau nedaug liko
include '..\infoload.php';

/** @var PDO $conn */
$stmt=$conn->prepare("SELECT name, cont FROM  content WHERE id=:id" );
$stmt->bindParam(':id', $var);
$stmt->execute();
$stmt->setFetchMode(PDO::FETCH_ASSOC);
$result=$stmt->fetch();

//var_dump($result);

?>

<div class="menu-sveikata"> <section class="inmtxt">Atgal</section></div>
<script src="../js/inermenu.js"></script>



