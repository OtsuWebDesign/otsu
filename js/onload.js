window.onload = function()
{
	activeNav();
	generate_slider();
	bind_images();
	more992.addListener(bind_images);
	more540.addListener(bind_images);
}
window.onscroll = function()
{
	navcolor();
}