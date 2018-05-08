function bind_images()
{
	var bg = new Image();
	bg.src = "url(img/slider/max/1.jpg)";
	document.getElementById('slide1').style.backgroundImage = bg;
	
	var bg = new Image();
	var bigSrc = 'url(img/slider/max/1.jpg)';
	var enhancedClass = 'slide-1';

	bg.onload = function () 
	{
		document.getElementById('slide1').className += ' ' +enhancedClass;
	};

	if (bigSrc) {
		bg.src = bigSrc;
	}
	
	document.getElementById('slide1').classList.add('slide-1');
	document.getElementById('slide2').classList.add('slide-2');
	document.getElementById('slide3').classList.add('slide-3');
	
	document.getElementById('square1').classList.add('square-1');
	document.getElementById('square2').classList.add('square-2');
	document.getElementById('square3').classList.add('square-3');
	document.getElementById('square4').classList.add('square-4');
}