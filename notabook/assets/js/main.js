	$ (document).ready(function(){
		console.log('ready')

		$('.btn-resent').click(function(){
			$('.article').removeClass('hide');
		})

		$('.btn-politics').click(function(){
			$('.article').addClass('hide');
			$('.article.politics').removeClass('hide')
		})

		$('.btn-business').click(function(){
			$('.article').addClass('hide');
			$('.article.business').removeClass('hide')
		})

		$('.btn-tech').click(function(){
			$('.article').addClass('hide');
			$('.article.tech').removeClass('hide')
		})

		$('.btn-science').click(function(){
			$('.article').addClass('hide');
			$('.article.science').removeClass('hide')
		})

		$('.btn-healthbeauty').click(function(){
			$('.article').addClass('hide');
			$('.article.healthbeauty').removeClass('hide')
		})

		$('.btn-celebrity').click(function(){
			$('.article').addClass('hide');
			$('.article.celebrity').removeClass('hide')
		})

