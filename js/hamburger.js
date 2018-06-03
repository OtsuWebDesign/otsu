document.getElementById('outerburger').onclick = function()
{
	document.getElementById('menu').classList.toggle('menu-active');
	document.getElementById('hamburger').classList.toggle('icon-cross');
	document.getElementById('hamburger').classList.toggle('icon-hamburger');
};