$(function(){
	if( $('main').css('display') === 'none' ){$('.hide').show()}else {$('.hide').hide()}

	$('.defAm').click(function(){$(this)[0].querySelector('audio').play()})
	$('.defEn').click(function(){$(this)[0].querySelector('audio').play()})
	$('.wordInput').keyup(function(event) {if(event.keyCode === 13) {$('.hide').hide()}})
	$('.aside-nav li').click(function(){
		$(this).css('opacity','1')
		$(this).siblings().css('opacity','0.2')
	})
	$('.sunning').click(function(){
		$('body').css('background','#fff').css('opacity','1')
	})

	$('.night').click(function(){
		$('body').css('background','#303030').css('opacity','0.5')
		$('header').css('color','#b0b0b0')
	})

})

