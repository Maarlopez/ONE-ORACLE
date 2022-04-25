function pulaLinha() {
	document.write("<br>");
}

function imprimir(frase) {
	document.write(frase);
	pulaLinha();
}

var invitados = parseInt(prompt("Número de invitados"));
var vips = parseInt(prompt("Número de invitados VIP's"));

var total = invitados + vips;

imprimir("El total de invitados es " + total);

/*Como la función prompt siempre transforma todo lo que digitamos en el formato del texto, 
o sea, como un string, es una buena práctica siempre convertir el valor digitado para el numero 
cuando nuestra intención es leer un número. Analicemos esta instrucción: 
var invitados = parseInt(prompt("Número de invitados"));

La función prompt retorna lo que digitamos como string y ese retorno es pasado 
para parseInt. Y es esta función que recibe un string y la convierte en un número. 
Ahora, como tenemos dos números vinculados, no sucederá más una concatenación, y sí una suma.*/