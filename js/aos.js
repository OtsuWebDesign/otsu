function aos()
{
	"use strict";
	var scrolled = Math.max(window.pageYOffset, document.body.scrollTop, document.documentElement.scrollTop);
	const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
	var elements = document.getElementsByClassName('aos');
	for(let i=0; i< elements.length; i++)
	{
		var elementOffset = elements[i].getBoundingClientRect().top + window.scrollY;
		var elementHeight = elements[i].offsetHeight;
		if(scrolled + windowHeight > elementOffset + 0.6*elementHeight || scrolled + windowHeight > elementOffset + 0.15*windowHeight)
			elements[i].classList.add('aos-animate');
		else
			elements[i].classList.remove('aos-animate');
	}
}