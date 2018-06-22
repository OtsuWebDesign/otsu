var more540 = window.matchMedia("(min-width: 540px)");
var more992 = window.matchMedia("(min-width: 992px)");
function bind_images()
{
	var size,
		slide1 = new Image(),
		slide2 = new Image(),
		slide3 = new Image()
	
	if (more992.matches)
		size = "max";
	else if (more540.matches)
		size = "middle";
	else
		size = "min";
	
	slide1.src = "img/slider/"+size+"/1.jpg";
	slide2.src = "img/slider/"+size+"/2.jpg";
	slide3.src = "img/slider/"+size+"/3.jpg";
		
	slide1.onload = function() {document.getElementById('slide1').style.backgroundImage = 'url('+this.src+')';};
	slide2.onload = function() {document.getElementById('slide2').style.backgroundImage = 'url('+this.src+')';};
	slide3.onload = function() {document.getElementById('slide3').style.backgroundImage = 'url('+this.src+')';};
}