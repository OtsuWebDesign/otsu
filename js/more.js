function togglemore(topic_id)
{
	if(document.getElementsByClassName("morecontent-"+topic_id)[0].classList.contains('less'))
	{
		document.getElementsByClassName("showmore-"+topic_id)[0].classList.add('novisibility');
		setTimeout(() => document.getElementsByClassName("showless-"+topic_id)[0].classList.remove('novisibility') ,500);
		document.getElementsByClassName("morecontent-"+topic_id)[0].classList.remove('less');
		setTimeout(function()
		{
			document.getElementsByClassName("morecontent-"+topic_id)[0].style.maxHeight = document.getElementsByClassName("morecontent-"+topic_id)[0].offsetHeight+'px';
		}, 1050);
	}
	else 
	{
		document.getElementsByClassName("showless-"+topic_id)[0].classList.add('novisibility');
		setTimeout(() => document.getElementsByClassName("showmore-"+topic_id)[0].classList.remove('novisibility') ,500);
		document.getElementsByClassName("morecontent-"+topic_id)[0].classList.add('less');
	}
};