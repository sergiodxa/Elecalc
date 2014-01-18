var cosPhi = function(calculo) {
	if (calculo==1) {
		var potenciaActiva = parseFloat($('#campo65').val()),
			tension = parseFloat($('#campo66').val()),
			intensidad = parseFloat($('#campo67').val()),
			resultado = $('#resultado28');
		resultado.val(potenciaActiva/(tension*intensidad));
	}
	else if (calculo==2) {
		var potenciaActiva = parseFloat($('#campo68').val()),
			potenciaAparente = parseFloat($('#campo69').val()),
			resultado = $('#resultado29');
		resultado.val(potenciaActiva/potenciaAparente);
	}
	else if (calculo==3) {
		var intensidad = parseFloat($('#campo70').val()),
			resistencia = parseFloat($('#campo71').val()),
			potenciaAparente = parseFloat($('#campo72').val()),
			resultado = $('#resultado30');
		resultado.val((Math.pow(intensidad,2)*resistencia)/potenciaAparente);
	}
}
// cálculo de coseno de φ en corriente alterna monofásica
var cosPhiMonoAlterna = function() {
	var potenciaActiva = parseFloat($('#cosPhiMonoAlterna_potenciaActiva').val()), // obtenemos el valor de potencia activa
		tension = parseFloat($('#cosPhiMonoAlterna_tension').val()), // obtenemos el valor de tensión
		intensidad = parseFloat($('#cosPhiMonoAlterna_intensidad').val()), // obtenemos el valor de intensidad
		potenciaAparente = parseFloat($('#cosPhiMonoAlterna_potenciaAparente').val()), // obtenemos el valor del coseno de φ
		resistencia = parseFloat($('#cosPhiMonoAlterna_resistencia').val()), // obtenemos el valor de resistencia
		resultado = $('#cosPhiMonoAlterna_resultado'); // obtenemos el campo de resultado
	// fórmula 1
	if (potenciaActiva && tension && intensidad) {
		resultado.val(potenciaActiva / (tension * intensidad));
	}
	// fórmula 2
	else if (potenciaActiva && potenciaAparente) {
		resultado.val(potenciaActiva / potenciaAparente);
	}
	// fórmula 3
	else if (intensidad && potenciaAparente && resistencia) {
		resultado.val((Math.pow(intensidad,2) * resistencia) / potenciaAparente);
	}
	// si faltan datos
	else {
		resultado.val('No hay datos suficientes para realizar ningún cálculo');
	}
}