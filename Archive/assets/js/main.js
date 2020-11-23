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
		$('.about').toggleClass('active')
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

	//Get the button:
	mybutton = document.getElementById("myBtn");

	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	    mybutton.style.display = "block";
	  } else {
	    mybutton.style.display = "none";
	  }
	}

	// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
	  document.body.scrollTop = 0; // For Safari
	  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}

});