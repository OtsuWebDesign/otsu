function hidemore()
{
	var showmores = document.getElementsByClassName('showmore');
	for (let i = 0; i < showmores.length; i++) 
	{
		showmores[i].classList.toggle('nopacity');
	}
	var morecontents = document.getElementsByClassName('morecontent');
	for (let i = 0; i < morecontents.length; i++) 
	{
		morecontents[i].classList.toggle('less');
	}
	var showlesss = document.getElementsByClassName('showlesss');
	for (let i = 0; i < showlesss.length; i++) 
	{
		showlesss[i].classList.toggle('nopacity');
	}
}
function togglemore(topic_id)
{
	document.querySelector("[showmore-id='"+topic_id+"']").classList.toggle('nopacity');
	document.querySelector("[topic-id='"+topic_id+"']").classList.toggle('less');
	document.querySelector("[showless-id='"+topic_id+"']").classList.toggle('nopacity');
};