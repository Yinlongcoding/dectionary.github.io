$(function(){
	if( $('main').css('display') === 'none' ){$('.hide').fadeIn(1000)} else {$('.hide').hide()}
	$('.close').click(function(){$('.hide').fadeOut(600)})
	$('.defAm').click(function(){$(this)[0].querySelector('audio').play()})
	$('.defEn').click(function(){$(this)[0].querySelector('audio').play()})
	$('.wordInput').keyup(function(event) {if(event.keyCode === 13) {$('.hide').hide()}})
	$('.aside-nav li').click(function(){$(this).css('opacity','1'); $(this).siblings().css('opacity','0.2') })
	$('.night').click(function(){
		var style = document.createElement('style')
			style.innerHTML = `
		body { background: #000;}
        header { color: #336699;}
        header .searchInput { border-color: #336699;}
        header .searchInput input {  color: #fbfbfb; }
        header .searchInput .searchword { background:#336699;  color:#fbfbfb; }
        .wordcontents h1 { 
        background: -webkit-linear-gradient(left,#336699, #000); 
        background: -o-linear-gradient(left,#336699, #000);
        background: linear-gradient(to right,#336699, #000);
        color: #fbfbfb;}
        .wordcontents .pron .country {color:#6b7a8f ;}
        .wordcontents .pron i { color:#6b7a8f;}
        .wordcontents .def { color: #b0b0b0;}
        .wordcontents .def i{ color: #EEC591;}  
        .wordcontents .mean {color: #ffcccc;}     
        .wordcontents .example { color: #fbfbfb; }
        .history { color: #fbfbfb; }
        .history h1 i {color: #336699;}
        .history ul li i { background-color: inherit; }
        .hide .close { color: #b0b0b0;}`
						
		$('head')[0].appendChild(style)})
	$('.sunning').click(function(){$('head style').remove()	})
	$(window).scroll(function(){ if($(window).scrollTop() >= 300) {$('.toupper').fadeIn(300) }else{ $('.toupper').fadeOut(300)}})
    $('.toupper').click(function(){$('html,body').animate({scrollTop: '0px'}, 800)})
})

  
    