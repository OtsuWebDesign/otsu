document.querySelector('[showless-id="1"]').addEventListener('click', () => {
	scrollIt(document.querySelector('.morecontent[topic-id="1"]'));
});
document.querySelector('[showless-id="2"]').addEventListener('click', () => {
	scrollIt(document.querySelector('.morecontent[topic-id="2"]'));
});
function scrollIt(destination, duration = 800) {

	const start = window.pageYOffset;
	const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
	const destinationOffsetToScroll =  start - destination.offsetHeight;
	
	if ('requestAnimationFrame' in window === false) {
		window.scroll(0, destinationOffsetToScroll);
		return;
	}
	
	function scroll() 
	{
		const now = 'now' in window.performance ? performance.now() : new Date().getTime();
		const time = Math.min(1, ((now - startTime) / duration));

		window.scroll(0, Math.ceil((time * (destinationOffsetToScroll - start)) + start));
		if (window.pageYOffset === destinationOffsetToScroll) {
			return;
		}
		requestAnimationFrame(scroll, 0.1);
	}
	scroll();
}