// cálculo de resistencia en corriente contínua monofásica
var resistenciaMonoContinua = function() {
	var potencia = parseFloat($('#resistenciaMonoContinua_potencia').val()), // obtenemos el valor de potencia
		intensidad = parseFloat($('#resistenciaMonoContinua_intensidad').val()), // obtenemos el valor de intensidad
		tension = parseFloat($('#resistenciaMonoContinua_tension').val()), // obtenemos el valor de tensión
		resultado = $('#resistenciaMonoContinua_resultado'); // obtenemos el campo de resultado
	// fórmula 1
	if (potencia && intensidad) {
		resultado.val(potencia / Math.pow(intensidad,2) + 'Ω');
	}
	// fórmula 2
	else if (potencia && tension) {
		resultado.val(Math.pow(tension,2) / potencia + 'Ω');
	}
	// fórmula 3
	else if (intensidad && tension) {
		resultado.val(tension / intensidad + 'Ω');
	}
	// si están todos los datos
	else if (potencia && intensidad && tension) {
		resultado.val(tension / intensidad + 'Ω');
	}
	// si faltan datos
	else {
		resultado.val('No hay datos suficientes para realizar ningún cálculo');
	}
}
// cálculo de resistencia en corriente alterna monofásica
var resistenciaMonoAlterna = function() {
	var tension = parseFloat($('#resistenciaMonoAlterna_tension').val()), // obtenemos el valor de tensión
		intensidad = parseFloat($('#resistenciaMonoAlterna_intensidad').val()), // obtenemos el valor de intensidad
		cosPhi = parseFloat($('#resistenciaMonoAlterna_cosPhi').val()), // obtenemos el valor del coseno de φ
		potenciaActiva = parseFloat($('#resistenciaMonoAlterna_potenciaActiva').val()), // obtenemos el valor de potencia activa
		potenciaAparente = parseFloat($('#resistenciaMonoAlterna_potenciaAparente').val()), // obtenemos el valor de potencia aparente
		resultado = $('#resistenciaMonoAlterna_resultado');
	// fórmula 1
	if (tension && intensidad && cosPhi) {
		resultado.val((tension * cosPhi) / intensidad + 'Ω');
	}
	// fórmula 2
	else if (tension && cosPhi && potenciaActiva) {
		resultado.val(Math.pow((tension * cosPhi),2) / potenciaActiva + 'Ω');
	}
	// fórmula 3
	else if (intensidad && cosPhi && potenciaAparente) {
		resultado.val((potenciaAparente * cosPhi) / Math.pow(intensidad,2) + 'Ω');
	}
	// si faltan datos
	else {
		resultado.val('No hay datos suficientes para realizar ningún cálculo');
	}
}

var resistencia = function(calculo) {
	if (calculo==7) {
		var potencia = parseFloat($('#campo79').val()),
			intensidad = parseFloat($('#campo80').val()),
			resultado = $('#resultado34');
		resultado.val(potencia/Math.pow((intensidad*raiz3),2)+'Ω');
	}
	else if (calculo==8) {
		var tension = parseFloat($('#campo81').val()),
			potencia = parseFloat($('#campo82').val()),
			resultado = $('#resultado35');
		resultado.val(Math.pow(tension,3)/potencia+'Ω');
	}
	else if (calculo==9) {
		var tension = parseFloat($('#campo83').val()),
			intensidad = parseFloat($('#campo84').val()),
			resultado = $('#resultado36');
		resultado.val(tension/(intensidad*raiz3)+'Ω');
	}
}