var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');


var casesArray = new Array();
casesArray.push(a1, a2, a3, b1, b2, b3, c1, c2, c3);

casesArray.forEach(function (item) {
	
	//Pour chaque élément du tableau, on attribut un évènement au clique
    item.addEventListener("click", function jouer() {
      if(item.classList.contains("vide")) {
        var xhr = creation_xhr();
        var texte;
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                texte = JSON.parse(xhr.responseText);
                item.innerHTML = texte.SymboleJ1;
                item.classList.add(texte.ClassJ1);
                item.classList.remove("vide");
                document.getElementById("head").innerHTML = texte.Head;
				
				//Si il y a un message d'un gagnant, bloquer les évènements sur toutes les cases, pour ne pas pouvoir clicker quand la partie finit
                if(texte.Head == "Le Joueur a gagné !" || texte.Head == "L\'Ordinateur a gagné !") {
                    a1.style.pointerEvents = 'none';
                    a2.style.pointerEvents = 'none';
                    a3.style.pointerEvents = 'none';
                    b1.style.pointerEvents = 'none';
                    b2.style.pointerEvents = 'none';
                    b3.style.pointerEvents = 'none';
                    c1.style.pointerEvents = 'none';
                    c2.style.pointerEvents = 'none';
                    c3.style.pointerEvents = 'none';
                }
				
				//Si le joueur gagne, actualiser le score du joueur
				if(texte.Head == "Le Joueur a gagné !"){

					document.getElementById("score_joueur").innerHTML = texte.ScoreJoueur;	
					
				}
				
				//Si l'ordinateur gagne, actualiser le score de l'ordinateur
				if(texte.Head == "L\'Ordinateur a gagné !"){
					
					document.getElementById("score_ordi").innerHTML = texte.ScoreOrdi;	
					
				}
				
				//Si il y a égalité, actualiser le compteur d'égalité
				if(texte.Head == "Personne n\'a gagné !"){
					
					document.getElementById("matchnul").innerHTML = texte.ScoreNul;	
					
				}
				
				//Si le json a plus de 4 informations
                if(Object.keys(texte).length > 4) {
                    document.getElementById(texte.CaseOrdi).innerHTML = texte.SymboleOrdi;
                    document.getElementById(texte.CaseOrdi).classList.add(texte.ClassOrdi);
                    document.getElementById(texte.CaseOrdi).classList.remove("vide");
                }
            }
        }
        xhr.open("GET", "jouer.php?case=" + item.id, true);
        xhr.send(null);
    }  
    });
});

//Fonction pour créer xhr
function creation_xhr() {
    var xhr = null;  	
    if (window.XMLHttpRequest) // Autre navigateur que Internet Explorer 
    { 							
        xhr = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) // Internet Explorer
    { 						 
        xhr = new ActiveXObject("Microsoft.XMLHTTP"); 
    }
    else  // XMLHttpRequest non supporté par le navigateur
    { 										 
        alert("Ce navigateur ne supporte pas les objets XMLHTTPRequest."); 
    }
    return xhr; 
}