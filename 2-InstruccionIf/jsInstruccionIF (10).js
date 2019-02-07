function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var aleatorio = Math.round(Math.random()*10);

	if (eval(aleatorio) >= 9 & eval(aleatorio) <=10) {

		alert("EXCELENTE " + aleatorio);

	} else {

		if (eval(aleatorio) >= 4 & eval(aleatorio) <=9) {

			alert("APROBO " + aleatorio);

		} else {

			alert("Vamos, la proxima se puede " + aleatorio);

		}

	}

}//FIN DE LA FUNCIÓN