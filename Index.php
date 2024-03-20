<?php

$pages = ["Home" => "Home", "Produtos e Serviços" => "Produtos e Serviços", "Projetos" => "Projetos Futuros | Em Andamento", "Sobre" => "Sobre"];

include("./pages/Home.php");
include("./pages/Produtos&Servicos.php");
include("./pages/Projetos.php");
include("./pages/Sobre.php");

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <title>Front-End Developer</title>
</head>
<body>
    <header>
        <nav class="navbar">
            <?php
            foreach($pages as $key => $p){
                echo "<a href='?page=$key'>$key</a>";
            }
            ?>
        </nav>
    </header>
    <main>
            <?php
            $page = (isset($_GET["page"]) ? $_GET["page"] : "Home");
            if(!array_key_exists($page, $pages)){
                $page = "Home";
            }
            
            echo $pages[$page];
            ?>
    </main>
</body>
</html>