var CACHE_NAME = 'index-cache';
var urlsToCache = [
	'/',
	'/css/main.css',
	'/css/style.css',
	'/css/index.css',
	'/css/nav.css',
	'/css/slider.css',
	'/css/aos.css',
	'/js/nav.js',
	'/js/slider.js',
	'/js/more.js',
	'/js/aos.js'
];

self.addEventListener('install', function(event) {
	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(function(cache) 
		{
			console.log('Opened cache');
			return cache.addAll(urlsToCache);
		})
	);
});