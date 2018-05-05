const Slider = function(elemSelector, opts) {//////////////////////////////////
    const defaultOpts = {
        pauseTime : 7000,
        prevText : "Poprzedni slajd",
        nextText : "Następny slajd"
    };
    this.options = Object.assign({}, defaultOpts, opts);
    this.sliderSelector = '#slider';
    this.currentSlide = 0; //aktualny slide
    this.time = null; //tutaj będziemy podczepiać setTimeout
    this.slider = null;
    this.elem = null;
    this.slides = null;

    this.prev = null; //przycisk prev
    this.next = null; //przucisl next
    this.dots = [];

    this.generateSlider();
    this.changeSlide(this.currentSlide);
}

Slider.prototype.generateSlider = function() {
    //pobieramy element który zamienimy na slider
    this.slider = document.querySelector(this.sliderSelector);

    //tworzymy kontener dla slajdow
    const slidesCnt = document.getElementById('slides');
    //slidesCnt.classList.add('slides');

    //pobieramy element slajdów
    this.slides = slidesCnt.children;

    //to jest zywa kolekcja, więc przy przeniesieniu kazdego slajda
    //jej dlugosc maleje
    //while (this.slides.length) 
	//{
       //this.slides[0].classList.add('slide');
    //    slidesCnt.appendChild(this.slides[0]);
    //}
    //this.slides = slidesCnt.children;
    //this.slider.appendChild(slidesCnt);

    this.createPrevNext();
    this.createDots();
}

Slider.prototype.slidePrev = function() {
    this.currentSlide--;
    if (this.currentSlide < 0) {
        this.currentSlide = this.slides.length - 1;
    }
    this.changeSlide(this.currentSlide);
}

Slider.prototype.slideNext = function() {
    this.currentSlide++;
    if (this.currentSlide > this.slides.length - 1) {
        this.currentSlide = 0;
    }
    this.changeSlide(this.currentSlide);
}

Slider.prototype.changeSlide = function(index) {
    [].forEach.call(this.slides, function(slide) {
        slide.classList.remove('slide-active');
        slide.setAttribute('aria-hidden', true);
    });

    //dodajemy ją tylko wybranemu
    this.slides[index].classList.add('slide-active');
    this.slides[index].setAttribute('aria-hidden', false);

    //podobny manewr robimy dla kropek
    if (this.options.generateDots) {
        this.dots.forEach(function(dot) {
            dot.classList.remove('slider-dot-active');
        });
        this.dots[index].classList.add('slider-dot-active');
    }

    //aktualny slide przestawiamy na wybrany
    this.currentSlide = index;

    if (this.options.pauseTime !== 0) {
        clearInterval(this.time);
        this.time = setTimeout(function() {
            this.slideNext();
        }.bind(this), this.options.pauseTime)
    }
}

Slider.prototype.createPrevNext = function() {
    this.prev = document.createElement('button');
    this.prev.type = "button";
    this.prev.innerText = this.options.prevText;
    this.prev.classList.add('slider-button');
    this.prev.classList.add('slider-button-prev');
    this.prev.addEventListener('click', this.slidePrev.bind(this));

    this.next = document.createElement('button');
    this.next.type = "button";
    this.next.innerText = this.options.nextText;
    this.next.classList.add('slider-button');
    this.next.classList.add('slider-button-next');
    this.next.addEventListener('click', this.slideNext.bind(this));

    const nav = document.createElement('div');
    nav.classList.add('slider-nav');
    nav.setAttribute('aria-label', 'Przyciski zmiany slajdu: poprzedni, następny');
    nav.appendChild(this.prev);
    nav.appendChild(this.next);
    this.slider.appendChild(nav);
}

Slider.prototype.createDots = function() {
    const ulDots = document.createElement('ul');
    ulDots.classList.add('slider-dots');
    ulDots.setAttribute('aria-label', 'Przyciski zmiany slajdu: kropki');
	
	const dotsContainer = document.createElement('div');
	dotsContainer.classList.add('dots-container');
	
    //tworzymy pętlę w ilości liczby slajów
    for (let i=0; i<this.slides.length; i++) 
	{
		//każdorazowo tworzymy LI wraz z buttonem
		//każdy button po kliknięciu zmieni slajd
		//za pomocą metody changeSlide()

		const li = document.createElement('li');
		li.classList.add('slider-dot');

		const btn = document.createElement('button');
		btn.classList.add('slider-dot-button');
		btn.type = "button";
		btn.innerText = i+1;
		btn.setAttribute('aria-label', 'Ustaw slajd '+(i+1));

		btn.addEventListener('click', function()
		{
			this.changeSlide(i);
		}.bind(this));

		li.appendChild(btn);

		dotsContainer.appendChild(li);
		this.dots.push(li);
    }

	ulDots.appendChild(dotsContainer);
	this.slider.appendChild(ulDots);
}
const slide = new Slider('#slider', 
{
    pauseTime : 7000,
    prevText : "Poprzedni",
    nextText : "Następny"
});