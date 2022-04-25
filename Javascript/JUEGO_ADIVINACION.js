	function saltarLinea(){
		document.write("<br>");
		document.write("<br>");
		document.write("<br>");
	}

	function imprimir(frase){
		document.write(frase);
		saltarLinea();
	}

	var numeroPensado = Math.round(Math.random()*10);
	var numeroLanzado = parseInt(prompt("Ingrese un número entre 0-10"));

	if(numeroPensado == numeroPensado)
	{
		imprimir("usted acertó");
	}

	else{
		imprimir("usted erró, el numero pensado era: " + numeroPensado);
	}
