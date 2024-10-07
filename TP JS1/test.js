function test_age(){
    let age = prompt("Quelle est votre age ?")
    if (age<18)
    {
        document.write("Attention accès refusé, vous êtes mineur");
        document.body.style.backgroundColor="red";
    }
    else
    {
        document.write("Accès autorisé, vous êtes majeurs");
        document.body.style.backgroundColor="green";
    }
}
function affichage() {
    let prenom= prompt("Saisir votre prénom");
    let nom = prompt("Saisir votre nom");
    document.write("<div style='border:5px solid blue; width:300px; height:80px; margin:auto; font-size:2em;'>");
    document.write("bonjour" + prenom+"  "+nom);
    document.write("</div>");
}
function test_couleur() {
    let couleur = prompt("Donner une couleur")
    if (couleur == "rouge") {
        document.body.style.backgroundColor="red"

    }
    else if (couleur == "bleu") {
        document.body.style.backgroundColor="blue"
    }
    else if (couleur == "vert") {
        document.body.style.backgroundColor="green"
    }

    else {
        document.write("Couleur non comprise")
    }
}
function calcul_moyenne() {
    var n1 = prompt("Donner la premire note :");
    var n2 = prompt("Donner la deuxième note:");
    var n3 = prompt("Donner la troisième note:");

    var somme = Number(n1) + Number(n2) + Number(n3);
    document.write("Voici la somme:" + somme + "<br>");
    var moyenne = somme/3;
    document.write("Voici la moyenne :" + moyenne + "<br>");
    if (moyenne>9) {
        document.write("Admis");
    }
    else if (moyenne<10)
    {
        document.write("Refusé");
    }
    else if (moyenne>14) {
      document.write("Admis Mention Bien");
    }
}