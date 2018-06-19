function hidemore()
{
	var showmores = document.getElementsByClassName('showmore');
	for (let i = 0; i < showmores.length; i++) 
	{
		showmores[i].classList.toggle('novisibility');
	}
	var morecontents = document.getElementsByClassName('morecontent');
	for (let i = 0; i < morecontents.length; i++) 
	{
		morecontents[i].classList.toggle('less');
	}
}
function togglemore(topic_id)
{
	document.querySelector("[showmore-id='"+topic_id+"']").classList.toggle('novisibility');
	document.querySelector("[topic-id='"+topic_id+"']").classList.toggle('less');
};