<?php



include '..\infoload.php';

/** @var PDO $conn */
$stmt=$conn->query('SELECT name, cont FROM  content WHERE id=1 ');
$stmt->setFetchMode(PDO::FETCH_ASSOC);
$result=$stmt->fetch();

//var_dump($result);

echo "<h1>".$result['name']."</h1><br>";
echo "<p class='texty'>".$result['cont']."</p>"
?>

<div class="menu-sveikata"> <section class="inmtxt">Atgal</section></div>
<script src="../js/inermenu.js"></script>



