var currentSlide = 0, //aktualny slide
	time = null, //tutaj będziemy podczepiać setTimeout
	slider = document.getElementById('slider'),
	elem = null,
	slides = null,
	prev = null, //przycisk prev
	next = null, //przucisl next
	dots = [],
	pauseTime = 7000,
	prevText = "Poprzedni slajd",
	nextText = "Następny slajd";
	
function cutslider()
{
	if (document.body.scrollTop > 395 || document.documentElement.scrollTop > 395)
		document.getElementById('slider-container').classList.add('cuted');
	else
		document.getElementById('slider-container').classList.remove('cuted');
};
function generate_slider()
{
    var slidesCnt = document.getElementById('slides');
    slides = slidesCnt.children;

    createPrevNext();
    createDots();
    changeSlide(currentSlide);
};

function slidePrev() 
{
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    changeSlide(currentSlide);
}

function slideNext() 
{ 
    currentSlide++;
    if (currentSlide > slides.length - 1) {
        currentSlide = 0;
    }
    changeSlide(currentSlide);
}

function changeSlide(index) 
{
    [].forEach.call(slides, function(slide) {
        slide.classList.remove('slide-active');
        slide.setAttribute('aria-hidden', true);
    });

    //dodajemy ją tylko wybranemu
    slides[index].classList.add('slide-active');
    slides[index].setAttribute('aria-hidden', false);

    //podobny manewr robimy dla kropek
    
	dots.forEach(function(dot) {
		dot.classList.remove('slider-dot-active');
	});
	dots[index].classList.add('slider-dot-active');

    //aktualny slide przestawiamy na wybrany
    currentSlide = index;

	clearInterval(time);
	time = setTimeout(function() { slideNext(); }.bind(this), pauseTime)
}

function createPrevNext() 
{
    prev = document.createElement('button');
    prev.type = "button";
    prev.innerText = prevText;
    prev.classList.add('slider-button');
    prev.classList.add('slider-button-prev');
    prev.addEventListener('click', slidePrev.bind(this));

    next = document.createElement('button');
    next.type = "button";
    next.innerText = nextText;
    next.classList.add('slider-button');
    next.classList.add('slider-button-next');
    next.addEventListener('click', slideNext.bind(this));

    var nav = document.createElement('div');
    nav.classList.add('slider-nav');
    nav.setAttribute('aria-label', 'Przyciski zmiany slajdu: poprzedni, następny');
    nav.appendChild(prev);
    nav.appendChild(next);
    slider.appendChild(nav);
}

function createDots() 
{
    var ulDots = document.createElement('ul');
    ulDots.classList.add('slider-dots');
    ulDots.setAttribute('aria-label', 'Przyciski zmiany slajdu: kropki');
	
	var dotsContainer = document.createElement('div');
	dotsContainer.classList.add('dots-container');
	
    //tworzymy pętlę w ilości liczby slajów
    for (let i=0; i<slides.length; i++) 
	{
		//każdorazowo tworzymy LI wraz z buttonem
		//każdy button po kliknięciu zmieni slajd
		//za pomocą metody changeSlide()

		var li = document.createElement('li');
		li.classList.add('slider-dot');

		var btn = document.createElement('button');
		btn.classList.add('slider-dot-button');
		btn.type = "button";
		btn.innerText = i+1;
		btn.setAttribute('aria-label', 'Ustaw slajd '+(i+1));

		btn.addEventListener('click', function()
		{
			changeSlide(i);
		}.bind(this));

		li.appendChild(btn);

		dotsContainer.appendChild(li);
		dots.push(li);
    }

	ulDots.appendChild(dotsContainer);
	slider.appendChild(ulDots);
}