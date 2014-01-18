function alternaController($scope) {

	if (localStorage.nota == 'oculta') {
		$('.nota').css('display','none');
	} else {
		$('.cerrarNota').on('click',function() {
			$('.nota').css('display','none');
			localStorage.nota = 'oculta';
		})
	}

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
};