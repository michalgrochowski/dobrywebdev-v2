const CACHE_NAME = "simple-weather-v1";
const URLS_TO_CACHE  = [
    "https://michalgrochowski.github.io/simple-weather-app/dist/",
    "https://michalgrochowski.github.io/simple-weather-app/dist/index.html",
    "https://michalgrochowski.github.io/simple-weather-app/dist/manifest.json",
    "https://fonts.googleapis.com/css?family=Montserrat&amp;subset=latin-ext",
    "https://michalgrochowski.github.io/simple-weather-app/dist/css/main.min.css",
    "https://michalgrochowski.github.io/simple-weather-app/dist/js/main.js",
    "https://michalgrochowski.github.io/simple-weather-app/dist/font/weathericons-regular-webfont.eot",
    "https://michalgrochowski.github.io/simple-weather-app/dist/font/weathericons-regular-webfont.svg",
    "https://michalgrochowski.github.io/simple-weather-app/dist/font/weathericons-regular-webfont.ttf",
    "https://michalgrochowski.github.io/simple-weather-app/dist/font/weathericons-regular-webfont.woff",
    "https://michalgrochowski.github.io/simple-weather-app/dist/font/weathericons-regular-webfont.woff2",
    "https://michalgrochowski.github.io/simple-weather-app/dist/font/fontello.eot",
    "https://michalgrochowski.github.io/simple-weather-app/dist/font/fontello.svg",
    "https://michalgrochowski.github.io/simple-weather-app/dist/font/fontello.ttf",
    "https://michalgrochowski.github.io/simple-weather-app/dist/font/fontello.woff",
    "https://michalgrochowski.github.io/simple-weather-app/dist/font/fontello.woff2"
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(URLS_TO_CACHE);
        })
    );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name.includes("simple-weather") && name !== CACHE_NAME)
          .map(name => caches.delete(name))
      )
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
            if (response) {
                return response;
            }
            var fetchRequest = event.request.clone();
            return fetch(fetchRequest).then(
            function(response) {
                if(!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
            }
            var responseToCache = response.clone();
            caches.open(CACHE_NAME)
                .then(function(cache) {
                        cache.put(event.request, responseToCache);
                    });
                    return response;
                }
            );
        })
    );
});