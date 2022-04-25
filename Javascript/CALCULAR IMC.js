
	function saltarLinea(){
		document.write("<br>");
		document.write("<br>");
		document.write("<br>");
	}

	function imprimir(frase){
		document.write(frase);
		saltarLinea();
	}

	function calcularImc(peso,altura){
		return (peso / (altura * altura))
	}

	nombre = prompt("Ingrese su nombre");
	pesoInformado = prompt (nombre + ", informe su peso")
	alturaInformado = prompt (nombre + ", informe su altura")

	imcCalculado = calcularImc(pesoInformado,alturaInformado)

	imprimir(nombre + ", su imc calculado es: " + imcCalculado)

	if (imcCalculado < 18.5)
	{
		imprimir("IMC abajo de lo recomendado")
	}

	if (imcCalculado >= 18.5)
	{
		if(imcCalculado < 25)
		{
			imprimir("IMC está dentro del intérvalo normal")
		}
	}

	if (imcCalculado >= 25)
	{
		if(imcCalculado < 30)
		{
			imprimir("IMC considerado como sobrepeso")
		}
	}

	if (imcCalculado >=30)
	{
		imprimir("IMC considerado como obesidad")
	}