function navcolor()
{
	if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30)
	{
		document.getElementById('nav').classList.add('nav-active');
	}
	else
	{
		document.getElementById('nav').classList.remove('nav-active');
	}
};