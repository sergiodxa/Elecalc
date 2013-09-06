//Función para sumar resistencias en paralelo
function resPara () {
	//obtenemos los valores de las resistencia 1 y 2
	var value1 = $('#sumaRes #value1').val(),
		value2 = $('#sumaRes #value2').val();
	//multiplicamos los valores 1 y 2
	var multi = value1*value2;
	//sumamos los valores 1 y 2
	var suma = Number(value1)+Number(value2);
	//convertimos el resultado de la multiplicació a Float	
	var multi = parseFloat(multi);
	//convertimos el resultado de la suma a Float
	var suma = parseFloat(suma);
	//dividimos el resultado de la multiplicación por el de la suma
	var res = multi/suma;
	//mostramos el valor resultado final
	$('#sumaRes #result').attr('value', res);
};
//Función para sumar resistencias en serie
function resSerie () {
	//obtenemos los valores de las resistencia 1 y 2
	var value1 = $('#sumaRes #value1').val(),
		value2 = $('#sumaRes #value2').val();
	//sumamos las dos resistencias
	var res = Number(value1)+Number(value2);
	//mostramos el valor resultado final
	$('#sumaRes #result').attr('value', res);
};
//Función para calcular la resistencia o intensidad según la ley de Ohm
function ohmResInt () {
	//obtenemos los valores
	var tension = parseFloat($('#calculosOhm #value1').val()),
		resint = parseFloat($('#calculosOhm #value2').val());
	//calculamos resistencia o intensidad
	var res = tension/resint;
	//mostramos el valor del resultado
	$('#calculosOhm #result').attr('value', res);
};
//Función para calcular la tensión según la ley de Ohm
function ohmTen () {
	//obtenemos los valores
	var resistencia = parseFloat($('#calculosOhm #value1').val()),
		intensidad = parseFloat($('#calculosOhm #value2').val());
	//calculamos tensión
	var res = resistencia*intensidad;
	//mostramos el valor del resultado
	$('#calculosOhm #result').attr('value', res);
};
function maxwell () {
	//obtenemos todos los valores
	var c1r1 = parseFloat($('#maxwell #col1row1').val()),
		c2r1 = parseFloat($('#maxwell #col2row1').val()),
		c3r1 = parseFloat($('#maxwell #col3row1').val()),
		c1r2 = parseFloat($('#maxwell #col1row2').val()),
		c2r2 = parseFloat($('#maxwell #col2row2').val()),
		c3r2 = parseFloat($('#maxwell #col3row2').val()),
		c1r3 = parseFloat($('#maxwell #col1row3').val()),
		c2r3= parseFloat($('#maxwell #col2row3').val()),
		c3r3 = parseFloat($('#maxwell #col3row3').val()),
		value1 = parseFloat($('#maxwell #value1').val()),
		value2 = parseFloat($('#maxwell #value2').val()),
		value3 = parseFloat($('#maxwell #value3').val());
	//calculamos sin sustituir
	base = ((c1r1*c2r2*c3r3)+(c1r2*c2r2*c3r1)+(c1r3*c2r1*c3r2))-((c3r1*c2r2*c1r3)+(c3r2*c2r3*c1r1)+(c3r3*c2r1+c1r2));
	//calculamos sustituyendo en la primer columna
	sust1 = ((value1*c2r2*c3r3)+(value2*c2r2*c3r1)+(value3*c2r1*c3r2))-((c3r1*c2r2*value3)+(c3r2*c2r3*value1)+(c3r3*c2r1+value2));
	//calculamos sustituyendo en la segunda columna
	sust2 = ((c1r1*value2*c3r3)+(c1r2*value2*c3r1)+(c1r3*value1*c3r2))-((c3r1*value2*c1r3)+(c3r2*value3*c1r1)+(c3r3*value1+c1r2));
	//calculamos sustituyendo en la tercer columna
	sust3 = ((c1r1*c2r2*value3)+(c1r2*c2r2*value1)+(c1r3*c2r1*value2))-((value1*c2r2*c1r3)+(value2*c2r3*c1r1)+(value3*c2r1+c1r2));
	//calculamos la intensidad 1
	int1 = sust1/base;
	//calculamos la intensidad 2
	int2 = sust2/base;
	//calculamos la intensidad 3
	int3 = sust3/base;
	//mostramos el resultado
	$('#maxwell #result1').attr('value', int1);
	$('#maxwell #result2').attr('value', int2);
	$('#maxwell #result3').attr('value', int3);
};