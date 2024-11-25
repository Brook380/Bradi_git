function addition() {
    var a = document.getElementById("t1").Value;
    var b = document.getElementById("t2").Value;
    var c = Number(a)+Number(b);

    t3.value = c;
}
function soustraction() {
    var a = document.getElementById("t1").Value;
    var b = document.getElementById("t2").Value;
    var c = Number(a)-Number(b);

    t3.value = c;
}
function division() {
    var a = document.getElementById("t1").Value;
    var b = document.getElementById("t2").Value;
    var c = Number(a)/Number(b);

    t3.value = c;
}
function multiplication() {
    var a = document.getElementById("t1").Value;
    var b = document.getElementById("t2").Value;
    var c = Number(a)*Number(b);

    t3.value = c;
}
function permute(){
    var V3 = "";
    a = document.getElementById("t1").value;
    b = document.getElementById("t2").value;
    V3 = a;
    a = b;
    b = V3;

    t1.value = a;
    t2.value = b;
}
function parite(){
    var V,
    V = Number(document.getElementById("t3").value)
    if(v%2==0)
        t4.value = ("Pair")
    else
    t4.value = ("Impair")
}