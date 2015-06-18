
/*
 * Metodo que te calcula el precio de la entrada dependiendo del la edad y 
 * del dia de la semana
 * 
 * Si la edad esta por debajo de 0 años y por encima de los 99 años 
 * el precio se pondra automaticamente en 2€
 * 
 * */
function calcularEntrada() {
	var dia=  document.getElementById("dia").value;
	var edad=  document.getElementById("edad").value;
	var precio = 2;
	if ((edad >= 0) && (!isNaN(edad)) && (edad<100)) {
		switch (dia) {
		case 'lunes':
			if (edad <= 35) {
				precio = 2;
			} else {
				precio = 5;
			}
			break;
		case 'martes':
			if (edad <= 25) {
				precio = 2;
			} else if (edad > 25 && edad <= 50) {
				precio = 5;
			} else {
				precio = 7;
			}
			break;
		case 'miercoles':
			if (edad <= 18) {
				precio = 3;
			} else if (edad > 18 && edad <= 50) {
				precio = 5;
			} else {
				precio = 8;
			}
			break;
		case 'jueves':
			if (edad <= 18) {
				precio = 5;
			} else {
				precio = 7;
			}
			break;
		case 'viernes':
		case 'sabado':
		case 'domingo':
			precio = 10;
			break;
		default:
			precio = 2;
		}// end switch
	} else {
		precio = 2;
	}
	mostrar_precio.innerHTML=precio + "&#8364";
}