$( document ).ready(function() {

    document.getElementById('hamburger').onclick = function() 
	{
		document.getElementById('menu').classList.add('menu-active');
		document.getElementById('hamburger').style.display = 'none';
		document.getElementById('cross').style.display = 'block';
    };
    
    $( "#cross" ).click(function() 
	{
		document.getElementById('menu').classList.remove('menu-active');
		document.getElementById('cross').style.display = 'none';
		document.getElementById('hamburger').style.display = 'block';
    });
});