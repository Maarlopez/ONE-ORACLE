	function saltarLinea(){
		document.write("<br>");
		document.write("<br>");
		document.write("<br>");
	}

	function imprimir(frase){
		document.write(frase);
		saltarLinea();
	}

    var anho_mundial = 1930;
    var limite = parseInt(prompt("Ingrese el año limite para calcular"));

    alert("Hubo mundial de la FIFA en el año " + anho_mundial);

    while(anho_mundial <= limite)
    {
        anho_mundial = anho_mundial + 4;
        alert("Hubo mundial de la FIFA en el año " + anho_mundial);
    }
    alert("fin");
