var swVersion = 'v2';
var CACHE_FILES = {};
var CACHE_IMAGES = {};
var CACHE_OTHER = {};
CACHE_FILES.name = 'otsu.pl-files-cache-'+swVersion;
CACHE_IMAGES.name = 'otsu.pl-images-cache-'+swVersion;
CACHE_OTHER.name = 'otsu.pl-other-cache-'+swVersion;
var otsu_caches = [CACHE_FILES, CACHE_IMAGES, CACHE_OTHER];
var cache_whitelist = [CACHE_FILES.name, CACHE_IMAGES.name, CACHE_OTHER.name];
CACHE_OTHER.urls =[];
CACHE_FILES.urls = [
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
CACHE_IMAGES.urls = [
	'/img/aboutphoto/maciej.jpg',
	'/img/aboutphoto/radoslaw.jpg',
	
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
	'/img/tutorial/windows/step1.jpg',
	'/img/tutorial/windows/step2.jpg',
	'/img/tutorial/windows/step3.jpg',
	'/img/tutorial/windows/step4.jpg',
	'/img/tutorial/windows/step5.jpg',
	'/img/tutorial/windows/step6.jpg',
	'/img/tutorial/ios/step1.jpg',
	'/img/tutorial/ios/step2.jpg',
	'/img/tutorial/ios/step3.jpg'
];

self.addEventListener('install', function(event) {
	// Perform install steps
	event.waitUntil(Promise.all(
		otsu_caches.map(function(myCache) 
		{
			return caches.open(myCache.name)
			.then(function(cache) 
			{
				console.log('Opened cache');
				return cache.addAll(myCache.urls);
			})
		})
	));
	
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

				caches.open(CACHE_OTHER.name)
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