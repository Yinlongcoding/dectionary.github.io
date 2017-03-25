$(function(){
	if( $('main').css('display') === 'none' ){$('.hide').show()}else {$('.hide').hide()}

	$('.close').click(function(){$('.hide').hide()})
	$('.defAm').click(function(){$(this)[0].querySelector('audio').play()})
	$('.defEn').click(function(){$(this)[0].querySelector('audio').play()})
	$('.wordInput').keyup(function(event) {if(event.keyCode === 13) {$('.hide').hide()}})
	$('.aside-nav li').click(function(){$(this).css('opacity','1'); $(this).siblings().css('opacity','0.2') })
	$('.night').click(function(){
		var style = document.createElement('style')
			style.innerHTML = `
				body { background: #303030;}
				header { color: #b0b0b0;}
				.wordcontents h1 { line-height: 3rem; 
					background: -webkit-linear-gradient(left, #42b983, #303030); 
					background: -o-linear-gradient(left, #42b983, #303030);
					background: linear-gradient(to right, #42b983, #303030);
					color: #fff;text-indent: 2rem;}
				.wordcontents .pron i { color: #b0b0b0;}
				.wordcontents .def { color: #b0b0b0;}
				.wordcontents .mean { color: #EEC591;}
				.wordcontents .example { color: #b0b0b0; }
				.history { color: #b0b0b0; }
				.history ul li i { background-color: inherit; }`		
		$('head')[0].appendChild(style)
	})
	$('.sunning').click(function(){$('head style').remove()	})
	$(window).scroll(function(){ if($(window).scrollTop() >= 300) {$('.toupper').fadeIn(300) }else{ $('.toupper').fadeOut(300)}})
    $('.toupper').click(function(){$('html,body').animate({scrollTop: '0px'}, 800)})
})

  
    