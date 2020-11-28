$ (document).ready(function(){
	console.log('ready');

	$('.btn-contact').click(function(){
		$('.contact').addClass('active');
	})

	$('.close').click(function(){
		$('.contact').removeClass('active');
	})

	$('.btn-works').click(function(){
		$('.works').addClass('active');
	})

	$('.x').click(function(){
		$('.works').removeClass('active');
	})

	$('.btn-NFN').click(function(){
		$('.image').addClass('hide');
		$('.image.NFN').removeClass('hide');
	});

	$('.btn-ES').click(function(){
		$('.image').addClass('hide');
		$('.image.ES').removeClass('hide');
	});

	$('.btn-OBS').click(function(){
		$('.image').addClass('hide');
		$('.image.OBS').removeClass('hide');
	});

	$('.btn-SF').click(function(){
		$('.image').addClass('hide');
		$('.image.SF').removeClass('hide');
	});

	$('.btn-EA').click(function(){
		$('.image').addClass('hide');
		$('.image.EA').removeClass('hide');
	});

	$('.btn-AA').click(function(){
		$('.image').addClass('hide');
		$('.image.AA').removeClass('hide');
	});

})

