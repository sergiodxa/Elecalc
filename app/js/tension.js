// cálculo de tensión en corriente contínua monofásica
var tensionMonoContinua = function() {
	var potencia = parseFloat($('#tensionMonoContinua_potencia').val()), // obtenemos el valor de potencia
		resistencia = parseFloat($('#tensionMonoContinua_resistencia').val()), // obtenemos el valor de resistencia
		intensidad = parseFloat($('#tensionMonoContinua_intensidad').val()), // obtenemos el valor de intensidad
		resultado = $('#tensionMonoContinua_resultado'); // obtenemos el campo de resultado
	// fórmula 1
	if (potencia && resistencia) {
		resultado.val(Math.sqrt(potencia + resistencia) + 'V');
	}
	// fórmula 2
	else if (potencia && intensidad) {
		resultado.val(potencia / intensidad + 'V');
	}
	// fórmula 3
	else if (resistencia && intensidad) {
		resultado.val(resistencia * intensidad + 'V');
	}
	// si faltan datos
	else {
		resultado.val('No hay datos suficientes para realizar ningún cálculo');
	}
}
// cálculo de tensión en corriente alterna monofásica
var tensionMonoAlterna = function() {
	var resistencia = parseFloat($('#tensionMonoAlterna_resistencia').val()), // obtenemos el valor de resistencia
		intensidad = parseFloat($('#tensionMonoAlterna_intensidad').val()), // obtenemos el valor de intensidad
		cosPhi = parseFloat($('#tensionMonoAlterna_cosPhi').val()), // obtenemos el valor del coseno de φ
		potenciaActiva = parseFloat($('#tensionMonoAlterna_potenciaActiva').val()), // obtenemos el valor de potencia activa
		potenciaAparente = parseFloat($('#tensionMonoAlterna_potenciaAparente').val()), // obtenemos el valor de potencia aparente
		resultado = $('#tensionMonoAlterna_resultado'); // obtenemos el campo de resultado
	// fórmula 1
	if (resistencia && intensidad && cosPhi) {
		resultado.val((resistencia * intensidad) / cosPhi + 'V');
	}
	// fórmula 2
	else if (intensidad && cosPhi && potenciaActiva) {
		resultado.val(potenciaActiva / (intensidad * cosPhi) + 'V');
	}
	// fórmula 3
	else if (intensidad && potenciaAparente) {
		resultado.val(potenciaAparente / intensidad + 'V');
	}
	// si faltan datos
	else {
		resultado.val('No hay datos suficientes para realizar ningún cálculo');
	}
}

var tension = function(calculo) {
	if (calculo==7) {
		var potencia = parseFloat($('#campo73').val()),
			resistencia = parseFloat($('#campo74').val()),
			resultado = $('#resultado31');
		resultado.val(Math.sqrt(potencia/resistencia)+'V');
	}
	else if (calculo==8) {
		var potencia = parseFloat($('#campo75').val()),
			intensidad = parseFloat($('#campo76').val()),
			resultado = $('#resultado32');
		resultado.val(potencia/(intensidad*raiz3)+'V');
	}
	else if (calculo==9) {
		var intensidad = parseFloat($('#campo77').val()),
			resistencia = parseFloat($('#campo78').val()),
			resultado = $('#resultado33');
		resultado.val(intensidad*resistencia*raiz3);
	}
}