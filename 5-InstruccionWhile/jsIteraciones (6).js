function Mostrar()
{

	var contador = 0;
	var acumulador = 0;
	var numeros;

	while (numeros <= 5)
  	{
    	valor = prompt("Ingresar 5 numeros");
    	valor = parseInt(valor);
    	contador = contador + valor;
    	numeros = numeros + 1;
  	}
  	alert('La suma de los valores es '+suma+'<br>');

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN