// interface

$(document).on('ready', function() {
	if ($('html').hasClass('localstorage')) {
		if (!localStorage.seccion) {
			localStorage.seccion = 'continua';
		}
		else {
			$('#'+localStorage.seccion).prop('checked', true);
			$('#'+localStorage.seccion).parent().addClass('activo');
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
	var seccion = $('input[name=seccion]:checked').val();
	localStorage.seccion = seccion;
	showHideConfig();
	cambiarConfig();
};

var cambiarConfig = function() {
	var continua = $('#seccionContinua'),
		alterna = $('#seccionAlterna'),
		trifasica = $('#seccionTrifasica');
	if (localStorage.seccion == 'continua') {
		continua.show();
		alterna.hide();
		trifasica.hide();
	}
	else if (localStorage.seccion == 'alterna') {
		continua.hide();
		alterna.show();
		trifasica.hide();
	}
	else if (localStorage.seccion == 'trifasica') {
		continua.hide();
		alterna.hide();
		trifasica.show();
	}
};

$('input[name=seccion]').on('click', function() {
	$('input[name=seccion]').parent().removeClass('activo');
	$(this).parent().addClass('activo');
})

var raiz3 = Math.sqrt(3); // raíz cuadrada de tres para corriente trifásica
// parseFloat($('#').val())