// cálculo de potencia activa en corriente contínua monofásica
var potenciaActivaMonoContinua = function() {
	var tension = parseFloat($('#potenciaActivaMonoContinua_tension').val()), // obtenemos el valor de tensión
		resistencia = parseFloat($('#potenciaActivaMonoContinua_resistencia').val()), // obtenemos el valor de resistencia
		intensidad = parseFloat($('#potenciaActivaMonoContinua_intensidad').val()), // obtenemos el valor de intensidad
		resultado = $('#potenciaActivaMonoContinua_resultado'); // obtenemos el campo de resultado
	console.log(resistencia);
	// fórmula 1
	if (tension && resistencia) {
		resultado.val(Math.pow(tension,2) / resistencia + 'W');
	}
	// fórmula 2
	else if (resistencia && intensidad) {
		resultado.val(Math.pow(intensidad,2) / resistencia + 'W');
	}
	// fórmula 3
	else if (tension && intensidad) {
		resultado.val(tension * intensidad + 'W');
	}
	// si faltan datos
	else {
		resultado.val('No hay datos suficientes para realizar ningún cálculo');
	}
}
// cálculo de potencia activa en corriente alterna monofásica
var potenciaActivaMonoAlterna = function() {
	var potenciaAparente = parseFloat($('#potenciaActivaMonoAlterna_potenciaAparente').val()), // obtenemos el valor de potencia aparente
		cosPhi = parseFloat($('#potenciaActivaMonoAlterna_cosPhi').val()), // obtenemos el valor del coseno de φ
		tension = parseFloat($('#potenciaActivaMonoAlterna_tension').val()), // obtenemos el valor de tensión
		resistencia = parseFloat($('#potenciaActivaMonoAlterna_resistencia').val()), // obtenemos el valor de resistencia
		intensidad = parseFloat($('#potenciaActivaMonoAlterna_intensidad').val()), // obtenemos el valor de intensidad
		resultado = $('#potenciaActivaMonoAlterna_resultado'); // obtenemos el campo de resultado
	// fórmula 1
	if (potenciaAparente && cosPhi) {
		resultado.val(potenciaAparente * cosPhi + 'W');
	}
	// fórmula 2
	else if (cosPhi && tension && resistencia) {
		resultado.val(Math.pow((tension * cosPhi),2) / resistencia + 'W');
	}
	// fórmula 3
	else if (cosPhi && tension && intensidad) {
		resultado.val(tension * intensidad * cosPhi + 'W');
	}
	// si faltan datos
	else {
		resultado.val('No hay datos suficientes para realizar ningún cálculo');
	}
}