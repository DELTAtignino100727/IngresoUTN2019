function Mostrar()
{
//tomo la edad  
	var edad = document.getElementById("edad").value;

	if (eval(edad) >= 13 & eval(edad) <= 17){

		alert("Eres un adolescente");

	} else {

		alert("No sos adolescente");
		
	}

}//FIN DE LA FUNCIÓN