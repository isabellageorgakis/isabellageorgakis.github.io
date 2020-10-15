$ (document).ready(function(){
	console.log('hello world');

	$('.btn-keyhole').click(function(){
		$('.keyhole').addClass('active');
		$('.btn-keyhole').addClass('remove');
	});

	$('.btn-nav').click(function(){
		$('.nav').toggleClass('active');
	});

	$('.btn-about').click(function(){
		$('.nav').toggleClass('active')
	})

	$('.btn-ticket').click(function(){
		$('.item').addClass('hide');
		$('.item.ticket').removeClass('hide');
	});

	$('.btn-key').click(function(){
		$('.item').addClass('hide');
		$('.item.key').removeClass('hide');
	});

	$('.btn-coin').click(function(){
		$('.item').addClass('hide');
		$('.item.coin').removeClass('hide');
	});

	$('.btn-arts').click(function(){
		$('.item').addClass('hide');
		$('.item.arts').removeClass('hide');
	});

	$('.btn-gardens').click(function(){
		$('.item').addClass('hide');
		$('.item.gardens').removeClass('hide');
	});

	$('.btn-sport').click(function(){
		$('.item').addClass('hide');
		$('.item.sport').removeClass('hide');
	});

	$('.btn-transport').click(function(){
		$('.item').addClass('hide');
		$('.item.transport').removeClass('hide');
	});

	$('.btn-all').click(function(){
		$('.item').removeClass('hide');
	});

});