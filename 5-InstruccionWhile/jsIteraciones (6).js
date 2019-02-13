function Mostrar()
{

	var suma = 0;
	var acumulador = 0;
  var valor;
	var numeros;

	while (suma <= 5)
  	{
    	suma = prompt("Ingresar 5 numeros");
      //valor = valor + 1;
    	//valor = parseInt(valor);
    	suma = suma + 1;
    	numeros = valor / 5;
  	}

	document.getElementById("suma").value = suma;
	document.getElementById("promedio").value = numeros / 5;

}//FIN DE LA FUNCIÓN