// cálculo de intensidad en corriente contínua monofásica
var intensidadMonoContinua = function() {
	var tension = parseFloat($('#intensidadMonoContinua_tension').val()), // obtenemos el valor de tensión
		resistencia = parseFloat($('#intensidadMonoContinua_resistencia').val()), // obtenemos el valor de resistencia
		potencia = parseFloat($('#intensidadMonoContinua_potencia').val()), // obtenemos el valor de potencia
		resultado = $('#intensidadMonoContinua_resultado'); // obtenemos el campo de resultado

	// fórmula 1
	if (tension && resistencia) {
		resultado.val(tension / resistencia + 'A');
	}
	// fórmula 2
	else if (tension && potencia) {
		resultado.val(potencia / tension + 'A');
	}
	// fórmula 3
	else if (resistencia && potencia) {
		resultado.val(Math.sqrt(potencia / resistencia) + 'A');
	}
	// si faltan datos
	else {
		resultado.val('No hay datos suficientes para realizar ningún cálculo');
	}
}
// cálculo de intensidad en corriente alterna monofásica
var intensidadMonoAlterna = function() {
	var potenciaAparente = parseFloat($('#intensidadMonoAlterna_potenciaAparente').val()), // obtenemos el valor de potencia aparente
		tension = parseFloat($('#intensidadMonoAlterna_tension').val()), // obtenemos el valor de tensión
		potenciaActiva = parseFloat($('#intensidadMonoAlterna_potenciaActiva').val()), // obtenemos el valor de potencia activa
		cosPhi = parseFloat($('#intensidadMonoAlterna_cosPhi').val()), // obtenemos el valor del coseno de φ
		resistencia = parseFloat($('#intensidadMonoAlterna_resistencia').val()), // obtenemos el valor de resistencia
		resultado = $('#intensidadMonoAlterna_resultado'); // obtenemos el campo de resultado
	// fórmula 1
	if (potenciaAparente && tension) {
		resultado.val(potenciaAparente / tension + 'A');
	}
	// fórmula 2
	else if (tension && potenciaActiva && cosPhi) {
		resultado.val(potenciaActiva / (tension * cosPhi) + 'A');
	}
	// fórmula 3
	else if (tension && cosPhi && resistencia) {
		resultado.val((tension * cosPhi) / resistencia + 'A');
	}
	// si faltan datos
	else {
		resultado.val('No hay datos suficientes para realizar ningún cálculo');
	}
}