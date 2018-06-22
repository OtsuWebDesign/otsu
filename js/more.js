function togglemore(topic_id)
{
	if(document.querySelector("[topic-id='"+topic_id+"']").classList.contains('less'))
	{
		document.querySelector("[showmore-id='"+topic_id+"']").classList.add('novisibility');
		setTimeout(() => document.querySelector("[showless-id='"+topic_id+"']").classList.remove('novisibility') ,500);
		document.querySelector("[topic-id='"+topic_id+"']").classList.remove('less');
		setTimeout(function()
		{
			document.querySelector("[topic-id='"+topic_id+"']").style.maxHeight = document.querySelector("[topic-id='"+topic_id+"']").offsetHeight+'px';
		}, 1050);
	}
	else 
	{
		document.querySelector("[showless-id='"+topic_id+"']").classList.add('novisibility');
		setTimeout(() => document.querySelector("[showmore-id='"+topic_id+"']").classList.remove('novisibility') ,500);
		document.querySelector("[topic-id='"+topic_id+"']").classList.add('less');
		setTimeout(function()
		{
			document.querySelector("[topic-id='"+topic_id+"']").removeAttribute('style');
		}, 1050);
	}
};