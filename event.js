$(function(){
	$('.defAm').click(function(){$(this)[0].querySelector('audio').play()})
	$('.defEn').click(function(){$(this)[0].querySelector('audio').play()})
	$('.wordInput').keyup(function(event) {
		if(event.keyCode === 13) {
			$('.hide').hide()
		}
	})
	if( $('main').css('display') === 'none' ){
			$('.hide').show()
	}else {
		 $('.hide').hide()
	}
})

