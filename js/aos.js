function aos()
{
	const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
	const scrolled = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
	const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
	var elements = document.getElementsByClassName('aos');
	for(let i=0; i< elements.length; i++)
	{
		const elementOffset = elements[i].offsetTop;
		const elementHeight = elements[i].offsetHeight;
		if(scrolled + windowHeight > elementOffset + elementHeight)
			elements[i].classList.add('aos-animate');
		else
			elements[i].classList.remove('aos-animate');
	}
}