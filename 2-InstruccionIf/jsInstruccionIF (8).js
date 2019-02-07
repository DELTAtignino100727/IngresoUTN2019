function Mostrar()
{
//tomo la edad  

	var edad = document.getElementById("edad").value;
	var op = document.getElementById("estadoCivil").value;

	if (eval(edad) >= 18){

		switch(op)
    	{
      		case "Soltero":
        		alert("Es soltero y no es menor");
      		break;
      	}
	} 


}//FIN DE LA FUNCIÓN