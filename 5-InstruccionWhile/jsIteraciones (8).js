function Mostrar()
{
	var suma = 1;
  	var valor = 0;
  	var miArray = new Array();
	var numeros = parseInt(prompt("Ingrese cuantos numero quiere ingresar"));

	while (suma <= numeros)
  	{
  		miArray[suma] = prompt("Ingresar " + numeros + " numeros");

      	if (miArray[suma] < 0) {
      		
      		valor = miArray[suma];
      		suma++

      	} else{

			valor += miArray[suma];
      		suma ++;

      	}
  	}

document.getElementById('suma').value=valor;
document.getElementById('producto').value=valor;

}//FIN DE LA FUNCIÓN