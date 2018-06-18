document.getElementById('outerburger').onclick = function()
{
	document.getElementById('menu').classList.toggle('menu-active');
	document.getElementById('hamburger').classList.toggle('menu');
	document.getElementById('hamburger').classList.toggle('close');
};