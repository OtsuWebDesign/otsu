function togglemore()
{
	var showmores = document.getElementsByClassName('showmore');
	for (var i = 0; i < showmores.length; i++) 
	{
		showmores[i].classList.toggle('nopacity');
	}
	var fakespaces = document.getElementsByClassName('fakespace');
	for (var i = 0; i < fakespaces.length; i++) 
	{
		fakespaces[i].classList.toggle('more');
	}
	document.getElementById('howcontent').classList.toggle('more');
}
document.getElementById('showmore').onclick = function()
{
	togglemore();
};