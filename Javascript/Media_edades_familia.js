
	function saltarLinea(){
		document.write("<br>");
		document.write("<br>");
		document.write("<br>");
	}

	function imprimir(frase){
		document.write(frase);
		saltarLinea();
	}

    var numeroMiembros = parseInt(prompt("Ingrese la cantidad de miembros de su familia"));
    var contador = 1;
    var totalEdades = 0;

    while(contador <= numeroMiembros)
    {
        edad = parseInt(prompt("Ingrese la edad del familiar"));
        totalEdades = totalEdades + edad;
        contador++;
    }

    var mediaEdades = totalEdades / numeroMiembros;

    imprimir("La media de las edad es " + mediaEdad);

    imprimir("fin");
