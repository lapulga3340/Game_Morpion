<?php
    session_start();
    unset($_SESSION['grille']);
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Morpion</title>
        <meta charset="utf-8">
        <style>
            table, td {height:150px; width:500px; border:1px solid black; border-collapse:collapse; margin:auto; vertical-align:middle; text-align:center;}
            th {padding: 20px 0 20px 0;}
            h1 {text-align: center}
            .J1 {background-color: #ff4d4d;}
            .Ordi {background-color: #70db70;}

            .container { width: 100%; display: inline-flex; justify-content: space-between;}
            #tab_score { width: 500px; margin:auto;}
            .bouton { margin-top: 20px; width: 150px; margin-left: 40px;}
        </style>
    </head>
    <body>
        <h1>Jeu du morpion !</h1>
        <div id="jeu">
            <table>
                <tr>
                    <th colspan="3" id="head">A toi de jouer ! Tu es les X</th>
                </tr>
                <tr>
                    <td class="vide" id="a1"></td>
                    <td class="vide" id="a2"></td>
                    <td class="vide" id="a3"></td>
                </tr>
                <tr>
                    <td class="vide" id="b1"></td>
                    <td class="vide" id="b2"></td>
                    <td class="vide" id="b3"></td>
                </tr>
                <tr>
                    <td class="vide" id="c1"></td>
                    <td class="vide" id="c2"></td>
                    <td class="vide" id="c3"></td>
                </tr>
            </table>
        </div>
        <div id="tab_score">
            <div class="container">
                <div class="item">
                    <div class="score">
                        <h2>Joueur (X) : <span id="score_joueur"><?php
							if (isset($_SESSION['score_joueur'])){
								echo $_SESSION['score_joueur'];}
							else{
								echo "0";
							}
							?></span></h2>
                    </div>
                    <div class="score">
                        <h2>Ordinateur (O) : <span id="score_ordi"><?php
							if (isset($_SESSION['score_ordi'])){
								echo $_SESSION['score_ordi'];}
							else{
								echo "0";
							}
							?></span></h2>
                    </div>
                      <div class="score">
                        <h2>Egalité : <span id="matchnul"><?php
							if (isset($_SESSION['matchnul'])){
								echo $_SESSION['matchnul'];}
							else{
								echo "0";
							}
							?></span></h2>
                    </div>
                </div>
                <hr>
                <div class="item">
                    <form action="relancer.php">
                        <input class="bouton" id="relancer" type="submit" value="Relancer la partie">
                    </form>
                    <form action="recommencer.php">
                        <input class="bouton" id="recommencer" type="submit" value="Recommencer à zéro">
                    </form>
                </div>
            </div>
        </div>
    </body>
    <script type="text/javascript" src="script.js"></script>
</html>