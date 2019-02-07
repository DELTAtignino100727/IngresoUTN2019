function Mostrar()
{

	var num;
	
	while (num = Math.round(Math.random()*9)) {
  		document.getElementById("Numero").value = num;
  		break;
	}

}//FIN DE LA FUNCIÓN