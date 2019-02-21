function Mostrar()
{

	var suma = 1;
  var miArray = new Array();
  var valor = 0;

	while (suma <= 5)
  	{

      suma ++;
    	miArray[suma] = parseInt(prompt("Ingrese 5 numeros"));
      valor += miArray[suma];
      
  	}

	document.getElementById("suma").value = valor;
	document.getElementById("promedio").value = valor / miArray[suma];

}//FIN DE LA FUNCIÓN