function togglemore(topic_id)
{
	document.querySelector("[showmore-id='"+topic_id+"']").classList.toggle('novisibility');
	if(document.querySelector("[topic-id='"+topic_id+"']").classList.contains('less'))
	{
		document.querySelector("[topic-id='"+topic_id+"']").classList.remove('less');
		setTimeout(function()
		{
			document.querySelector("[topic-id='"+topic_id+"']").style.maxHeight = document.querySelector("[topic-id='"+topic_id+"']").offsetHeight+'px';
		}, 900);
	}
	else 
	{
		document.querySelector("[topic-id='"+topic_id+"']").classList.add('less');
		setTimeout(function()
		{
			document.querySelector("[topic-id='"+topic_id+"']").removeAttribute('style');
		}, 900);
	}
};