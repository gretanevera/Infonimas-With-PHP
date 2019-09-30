<?php declare(strict_types=1);

use GNI\menu\engin;

require __DIR__ . '/vendor/autoload.php';


$engin = new engin();
$rez = $engin->do_it(
    $_GET['id']
);
echo($rez['cont']);






//

