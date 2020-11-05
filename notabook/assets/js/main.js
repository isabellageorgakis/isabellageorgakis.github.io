	$ (document).ready(function(){
		console.log('ready')

		$('.article1').click(function(){
		$('.container').toggleClass('active');
		});

		$('.article1').click(function(){
		$('.title').toggleClass('active');
		});

		$('.article1').click(function(){
		$('h1').toggleClass('active');
		});

		$('.article1').click(function(){
		$('h2').toggleClass('active');
		});

	})