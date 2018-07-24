"use strict";//do poprawnego działania zmiennych o zasięgy blokowym (np. let)
function showmore(topic_id)
{
	let morecontent = document.getElementsByClassName("morecontent-"+topic_id)[0];
	document.getElementsByClassName("showmore-"+topic_id)[0].classList.add('novisibility');
	setTimeout(() => document.getElementsByClassName("showless-"+topic_id)[0].classList.remove('novisibility') ,500);
	morecontent.style.maxHeight = morecontent.scrollHeight+'px';
	morecontent.style.marginTop = 'calc(-15px - 2vw)';
};
function hidemore(topic_id)
{
	let morecontent = document.getElementsByClassName("morecontent-"+topic_id)[0];
	document.getElementsByClassName("showless-"+topic_id)[0].classList.add('novisibility');
	setTimeout(() => document.getElementsByClassName("showmore-"+topic_id)[0].classList.remove('novisibility') ,500);
	morecontent.style.maxHeight = null;
	morecontent.style.margin = null;
};