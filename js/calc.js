//Función para sumar resistencias en paralelo
function resPara () {
	//obtenemos los valores de las resistencia 1 y 2
	var valor1 = $('#sumaRes #valor1').val(),
		valor2 = $('#sumaRes #valor2').val();
	//multiplicamos los valores 1 y 2
	var multi = valor1*valor2;
	//sumamos los valores 1 y 2
	var suma = Number(valor1)+Number(valor2);
	//convertimos el resultado de la multiplicació a Float	
	var multi = parseFloat(multi);
	//convertimos el resultado de la suma a Float
	var suma = parseFloat(suma);
	//dividimos el resultado de la multiplicación por el de la suma
	var res = multi/suma;
	//mostramos el valor resultado final
	$('#sumaRes #resultado').attr('value', res);
};
//Función para sumar resistencias en serie
function resSerie () {
	//obtenemos los valores de las resistencia 1 y 2
	var valor1 = $('#sumaRes #valor1').val(),
		valor2 = $('#sumaRes #valor2').val();
	//sumamos las dos resistencias
	var res = Number(valor1)+Number(valor2);
	//mostramos el valor resultado final
	$('#sumaRes #resultado').attr('value', res);
};
//Función para calcular la resistencia o intensidad según la ley de Ohm
function ohmResInt () {
	//obtenemos los valores
	var tension = parseFloat($('#calculosOhm #valor1').val()),
		resint = parseFloat($('#calculosOhm #valor2').val());
	//calculamos resistencia o intensidad
	var res = tension/resint;
	//mostramos el valor del resultado
	$('#calculosOhm #resultado').attr('value', res);
};
//Función para calcular la tensión según la ley de Ohm
function ohmTen () {
	//obtenemos los valores
	var resistencia = parseFloat($('#calculosOhm #valor1').val()),
		intensidad = parseFloat($('#calculosOhm #valor2').val());
	//calculamos tensión
	var res = resistencia*intensidad;
	//mostramos el valor del resultado
	$('#calculosOhm #resultado').attr('value', res);
};