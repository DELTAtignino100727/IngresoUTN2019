function Mostrar()
{

	var suma = 1;
  var valor = 0;
  var miArray = new Array();
	var numeros = parseInt(prompt("Ingrese cuantos numero quiere ingresar"));

	while (suma <= numeros)
  	{
      
      suma ++;
    	miArray[suma] = parseInt(prompt("Ingresar " + numeros + " numeros"));
      valor += miArray[suma];

  	}

	document.getElementById("suma").value = valor;
	document.getElementById("promedio").value = valor / 5;

}//FIN DE LA FUNCIÓN