$(function(){
	if( $('main').css('display') === 'none' ){$('.hide').show()}else {$('.hide').hide()}

	$('.defAm').click(function(){$(this)[0].querySelector('audio').play()})
	$('.defEn').click(function(){$(this)[0].querySelector('audio').play()})
	$('.wordInput').keyup(function(event) {if(event.keyCode === 13) {$('.hide').hide()}})
	$('.aside-nav li').click(function(){$(this).css('opacity','1'); $(this).siblings().css('opacity','0.2') })
	$('.night').click(function(){
		var style = document.createElement('style')
			style.innerHTML = `
				body { background: #303030;  opacity: 0.5; }
				header { color: #b0b0b0;}
				.wordcontents h1 { line-height: 3rem; background: -webkit-linear-gradient(left, #42b983, #303030); background: -o-linear-gradient(left, #42b983, #303030);background: linear-gradient(to right, #42b983, #303030);color: #fff;text-indent: 2rem;}
				.wordcontents .pron i { color: #fff;}
				.wordcontents .def { color: #fff;}
				.wordcontents .mean { color: #FFD39B;}
				.wordcontents .example { color: #f2f2f2; }
				.history { color: #fff; }
				.history ul li i { background-color: inherit; }`
		
		$('head')[0].appendChild(style)
	})

	$('.sunning').click(function(){
		$('head style').remove()	
	})
})
