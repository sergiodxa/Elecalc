// cálculo de potencia activa en corriente alterna monofásica
var potenciaAparenteMonoAlterna = function() {
	var potenciaActiva = parseFloat($('#potenciaAparenteMonoAlterna_potenciaActiva').val()), // obtenemos el valor de potencia activa
		cosPhi = parseFloat($('#potenciaAparenteMonoAlterna_cosPhi').val()), // obtenemos el valor del coseno de φ
		tension = parseFloat($('#potenciaAparenteMonoAlterna_tension').val()), // obtenemos el valor de tensión
		resistencia = parseFloat($('#potenciaAparenteMonoAlterna_resistencia').val()), // obtenemos el valor de resistencia
		intensidad = parseFloat($('#potenciaAparenteMonoAlterna_intensidad').val()), // obtenemos el valor de intensidad
		resultado = $('#potenciaAparenteMonoAlterna_resultado'); // obtenemos el campo de resultado
	// fórmula 1
	if (potenciaActiva && cosPhi) {
		resultado.val(potenciaActiva / cosPhi + 'VA');
	}
	// fórmula 2
	else if (tension && intensidad) {
		resultado.val(tension * intensidad + 'VA');
	}
	// fórmula 3
	else if (cosPhi && intensidad && resistencia) {
		resultado.val((Math.pow(intensidad,2) * resistencia) / cosPhi + 'VA');
	}
	// si faltan datos
	else {
		resultado.val('No hay datos suficientes para realizar ningún cálculo');
	}
}