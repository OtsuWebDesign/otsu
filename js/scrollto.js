document.querySelector('[showless-id="1"]').addEventListener('click', () => {
	scrollIt(document.querySelector('.morecontent[topic-id="1"]'));
});
document.querySelector('[showless-id="2"]').addEventListener('click', () => {
	scrollIt(document.querySelector('.morecontent[topic-id="2"]'));
});
function scrollIt(destination, duration = 800) {

	const start = window.pageYOffset;
	const startTime = performance.now() || new Date().getTime();
	const destinationOffsetToScroll =  start - destination.offsetHeight;
	
	var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.oRequestAnimationFrame || 
                            window.msRequestAnimationFrame || false;
	
	function scroll() 
	{
		const now = 'now' in window.performance ? performance.now() : new Date().getTime();
		const time = Math.min(1, ((now - startTime) / duration));

		window.scroll(0, Math.ceil((time * (destinationOffsetToScroll - start)) + start));
		if (window.pageYOffset === destinationOffsetToScroll) {
			return;
		}
		requestAnimationFrame(scroll);
	}
	
	if (requestAnimationFrame) 
		scroll();
	else
		window.scroll(0, destinationOffsetToScroll);
}