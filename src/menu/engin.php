<?php

namespace GNI\menu;

use GNI\menu\infoload;
use PDO;


class engin
{
    //parasyti funkcija kuri onclick atitinkama klase paimtu jos numeri ir iteptu i id laukeli
//ar tai padaryti per js ar per php (tikriausiai per php) ne=inau
//bet jau nedaug liko


    public function do_it($var)
    {
        /**
         * @param PDO $conn
         * @return mixed
         */
        /** @var PDO $con */
        $conn = new infoload();
$conn = $conn->getConn();
        $stmt = $conn->prepare("SELECT name, cont FROM  content WHERE name=:id");
        $stmt->bindParam(':id', $var);
        $stmt->execute();
        $stmt->setFetchMode(PDO::FETCH_ASSOC);
        $result = $stmt->fetch();
        return $result;
    }

}
