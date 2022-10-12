var i = 1;
var txt = "";
while (i < 5) {
    txt += "El número es: " + i + "\n";
    i++;
}
document.getElementById("txt").innerHTML= txt;

/*Imprime
El número es: 1
El número es: 2
El número es: 3
El número es: 4
*/