function iniciaController($scope) {
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
}