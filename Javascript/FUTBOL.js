function saltarLinea(){
	document.write("<br>");
	document.write("<br>");
	document.write("<br>");
}

function imprimir(frase){
	document.write(frase);
	saltarLinea();
}

var victorias = parseInt(prompt("informe la cantidad de victorias"));
var empates = parseInt(prompt("informe la cantidad de empates"));

var puntosTotal = victorias * 3 + empates;

// "10" * 2 = 20 javascript nos facilita algunas operaciones 
// matemáticas: texto * numero = numero

// No sucede lo mismo con la suma. Se produce concatenación 
// "10" + 20 = 1020

imprimir("El total de puntos del equipo es: " + puntosTotal);

//TRABAJANDO CON CONDICIONES

if(puntosTotal > 28){
	imprimir("El equipo esta mejor que el año pasado");
}

if (puntosTotal < 28)
{
	imprimir("El equipo esta peor que el año pasado");
}

if(puntosTotal == 28) // == comparación
{
	imprimir("El equipo esta igual que el año pasado");
}