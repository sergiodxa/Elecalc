// interface

$(document).on('ready', function() {
	if ($('html').hasClass('localstorage')) {
		if (!localStorage.fases) {
			localStorage.fases = '1';
		}
		if (!localStorage.corriente) {
			localStorage.corriente = '1';
		}
		if (localStorage.nota == 'oculta') {
			$('.nota').hide();
		}
		cambiarConfig();
	}
	else {
		$('#navegadorAntiguo').show();
	}
});


$(window).on('load', function() {
});

$('article h2').on('click', function() {
	$(this)
		.parent()
			.find('.calculos')
				.addClass('activo');
});
$('.calculos h3').on('click', function() {
	$(this)
		.parent()
			.removeClass('activo');
});

var cerrarNota = function() {
	$('.nota').fadeOut();
	localStorage.nota = 'oculta';
};

var showHideConfig = function() {
	var shadow = $('#shadow'),
		config = $('#config');
	config.fadeToggle();
	shadow.fadeToggle();
};

var shadowClick = function() {
	var shadow = $('#shadow'),
		config = $('#config');
	config.fadeOut();
	shadow.fadeOut();
};

var guardarConfig = function() {
	var fases = $('#fases'),
		corriente = $('#corriente');
	localStorage.fases = fases.find(':selected').val();
	localStorage.corriente = corriente.find(':selected').val();
	showHideConfig();
	cambiarConfig();
};

var cambiarConfig = function() {
	var monofasicaContinua = $('#monofasicaContinua'),
		monofasicaAlterna = $('#monofasicaAlterna'),
		trifasica = $('#trifasica');
	if (localStorage.fases == 1 && localStorage.corriente == 1) {
		monofasicaContinua.show();
		monofasicaAlterna.hide();
		trifasica.hide();
	}
	else if (localStorage.fases == 1 && localStorage.corriente == 2) {
		monofasicaContinua.hide();
		monofasicaAlterna.show();
		trifasica.hide();
	}
	else if (localStorage.fases == 2) {
		monofasicaContinua.hide();
		monofasicaAlterna.hide();
		trifasica.show();
	}
};

$('#fases').on('change', function() {
	var fases = $('#fases').find(':selected').val();
	if (fases == 2) {
		$('label[for="corriente"]').fadeOut();
	}
	else {
		$('label[for="corriente"]').fadeIn();
	}
})

var raiz3 = Math.sqrt(3); // raíz cuadrada de tres para corriente trifásica
// parseFloat($('#').val())