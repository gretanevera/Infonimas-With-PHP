<?php

namespace GNI\menu;
class infoload
{
    const SERVER_NAME = "localhost";
    const USERNAME = "greta";
    const PASSWORD = "karkvabalis";
    const DBNAME = "info_baze";

    private $conn;


    /**
     * infoload constructor.
     */
    public function __construct()
    {
        try {
            $this->conn = new \PDO(
                "mysql:host=" . self::SERVER_NAME . ";dbname=" . self::DBNAME,
                self::USERNAME,
                self::PASSWORD,
                [\PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"]
            );
            $this->conn->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
        } catch (\PDOException $e) {
            echo "Error: " . $e->getMessage();
        }

    }

    /**
     * @return \PDO
     */
    public function getConn(): \PDO
    {
        return $this->conn;
    }
}
