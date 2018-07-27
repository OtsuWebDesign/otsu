document.getElementById('outerburger').onclick=function()
{document.getElementById('menu').classList.toggle('menu-active');document.getElementById('hamburger').classList.toggle('menu');document.getElementById('hamburger').classList.toggle('close')};function activeNav()
{if(!document.getElementById('nav').classList.contains('nav-transparent'))
{document.getElementById('nav').classList.add('nav-active')}}
function navcolor()
{if(document.getElementById('nav').classList.contains('nav-transparent'))
{if(document.body.scrollTop>30||document.documentElement.scrollTop>30)
{document.getElementById('nav').classList.add('nav-active')}
else{document.getElementById('nav').classList.remove('nav-active')}}}