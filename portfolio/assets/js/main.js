$ (document).ready(function(){
	console.log('ready');

	$('.btn-contact').click(function(){
		$('.contact').addClass('active');
	})

	$('.close').click(function(){
		$('.contact').removeClass('active');
	})

})

