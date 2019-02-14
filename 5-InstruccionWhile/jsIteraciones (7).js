function Mostrar()
{

	var suma = 0;
  	var valor;
	var numeros = parseInt(prompt("Ingrese cuantos numero quiere ingresar"));

	while (suma <= numeros)
  	{
      
      	suma ++;
    	suma = parseInt(prompt("Ingresar " + numeros + " numeros"));
      	valor = suma + suma;

  	}

	document.getElementById("suma").value = valor;
	document.getElementById("promedio").value = valor / 5;

}//FIN DE LA FUNCIÓN