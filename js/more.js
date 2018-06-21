function togglemore(topic_id)
{
	document.querySelector("[showmore-id='"+topic_id+"']").classList.toggle('novisibility');
	document.querySelector("[topic-id='"+topic_id+"']").classList.toggle('less');
};