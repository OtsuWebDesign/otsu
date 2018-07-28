var swVersion = 'v1';
var CACHE_FILES = 'otsu.pl-files-cache-v10';
var CACHE_IMAGES = 'otsu.pl-images-cache-v10';
var CACHE_OTHER = 'otsu.pl-other-cache-v8';
var cache_whitelist = [CACHE_FILES, CACHE_IMAGES, CACHE_OTHER];
var urlsToCache_FILES = [
	'/',
	'/o-nas',
	'/cennik',
	'/kontakt',
	'/FAQ',
	'/zamow',
	'/polityka-prywatnosci',
	
	'/css/about.css',
	'/css/aos.css',
	'/css/contact.css',
	'/css/getstarted.css',
	'/css/index.css',
	'/css/main.css',
	'/css/nav.css',
	'/css/order.css',
	'/css/prices.css',
	'/css/privacy.css',
	'/css/slider.css',
	
	'/js/analytics.js',
	'/js/aos.js',
	'/js/more.js',
	'/js/nav.js',
	'/js/slider.js',
	'/js/tutorial-change.js'
];
var urlsToCache_IMAGES = [
	'/img/aboutphoto/maciej.jpg',
	'/img/aboutphoto/radoslaw.jpg',
	
	'/img/how/intuitive.png',
	'/img/how/knowledge.png',
	'/img/how/passion.png',
	'/img/how/responsive.png',
	'/img/how/tech.png',
	
	'/img/logo/fb.png',
	'/img/logo/formph.png',
	'/img/logo/200px/full-transp-black.png',
	'/img/logo/full-transp-black.png',
	'/img/logo/logo-black.png',
	
	'/img/slider/min/1.jpg',
	'/img/slider/min/2.jpg',
	'/img/slider/min/3.jpg',
	'/img/slider/middle/1.jpg',
	'/img/slider/middle/2.jpg',
	'/img/slider/middle/3.jpg',
	'/img/slider/max/1.jpg',
	'/img/slider/max/2.jpg',
	'/img/slider/max/3.jpg',
	
	'/img/tutorial/android/step1.jpg',
	'/img/tutorial/android/step2.jpg',
	'/img/tutorial/ios/step1.jpg',
	'/img/tutorial/ios/step2.jpg',
	'/img/tutorial/ios/step3.jpg'
];

self.addEventListener('install', function(event) {
	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_FILES)
		.then(function(cache) 
		{
			console.log('Opened cache files');
			return cache.addAll(urlsToCache_FILES);
		})
	);
	event.waitUntil(
		caches.open(CACHE_IMAGES)
		.then(function(cache) 
		{
			console.log('Opened cache images');
			return cache.addAll(urlsToCache_IMAGES);
		})
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
		.then(function(response) 
		{
			// Cache hit - return response
			if (response) {
				return response;
			}
			// IMPORTANT: Clone the request. A request is a stream and
			// can only be consumed once. Since we are consuming this
			// once by cache and once by the browser for fetch, we need
			// to clone the response.
			var fetchRequest = event.request.clone();
			
			return fetch(fetchRequest)
			.then(function(response) 
			{
				// Check if we received a valid response
				if(!response || response.status !== 200 || response.type !== 'basic') {
					return response;
				}
				// IMPORTANT: Clone the response. A response is a stream
				// and because we want the browser to consume the response
				// as well as the cache consuming the response, we need
				// to clone it so we have two streams.
				var responseToCache = response.clone();

				caches.open(CACHE_OTHER)
				.then(function(cache) 
				{
					cache.put(event.request, responseToCache);
				});

				return response;
			});
		})
	);
});

self.addEventListener('activate', function(event) {
	event.waitUntil(
		caches.keys()
		.then(function(cacheNames) 
		{
			return Promise.all(
				cacheNames.map(function(cacheName) 
				{
					if (!cache_whitelist.includes(cacheName))
						return caches.delete(cacheName);
				})
			);
		})
	);
});