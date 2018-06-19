function hidemore()
{
	var showmores = document.getElementsByClassName('showmore');
	for (let i = 0; i < showmores.length; i++) 
	{
		showmores[i].classList.toggle('nopacity');
	}
	var fakespaces = document.getElementsByClassName('fakespace');
	for (let i = 0; i < fakespaces.length; i++) 
	{
		fakespaces[i].classList.toggle('more');
	}
	document.getElementById('howcontent').classList.toggle('more');
}
function togglemore(topic_id)
{
	document.querySelector("[showmore-id='"+topic_id+"']").classList.toggle('nopacity');
	var toToggle = document.querySelectorAll("[topic-id='"+topic_id+"']");
	for (let i = 0; i < toToggle.length; i++) 
	{
		toToggle[i].classList.toggle('more');
	}
};