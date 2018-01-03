const CACHE_NAME = "dobrywebdev-v1";
const URLS_TO_CACHE  = [
    "/index.html",
    "/manifest.json",
    "https://fonts.googleapis.com/css?family=Poppins:400,700&amp;subset=latin-ext",
    "/css/main.min.css",
    "/js/main.min.js",
    "/fonts/devicons.eot",
    "/fonts/devicons.svg",
    "/fonts/devicons.ttf",
    "/fonts/devicons.woff",
    "/font/fontello.eot",
    "/font/fontello.svg",
    "/font/fontello.ttf",
    "/font/fontello.woff",
    "/font/fontello.woff2",
    "/json/content-eng.json",
    "/json/content-pl.json",
    "/img/agency.png",
    "/img/cv.png",
    "/img/dobrywebdev.png",
    "/img/dobrywebdevfb.png",
    "/img/form.png",
    "/img/interior.png",
    "/img/interior1.png",
    "/img/logo-dark.png",
    "/img/logo-light.png",
    "/img/simpleweather.png",
    "/img/sleszynski.png",
    "/img/todo.png",
    "/img/webdev37.png",
    "/android-chrome-36x36.png",
    "/android-chrome-48x48.png",
    "/android-chrome-72x72.png",
    "/android-chrome-96x96.png",
    "/android-chrome-144x144.png",
    "/android-chrome-192x192.png",
    "/android-chrome-256x256.png",
    "/android-chrome-512x512.png",
    "/apple-touch-icon.png",
    "/apple-touch-icon-60x60.png",
    "/apple-touch-icon-76x76.png",
    "/apple-touch-icon-120x120.png",
    "/apple-touch-icon-152x152.png",
    "/apple-touch-icon-180x180.png",
    "/browserconfig.xml",
    "/favicon-16x16.png",
    "/favicon-32x32.png",
    "/mstile-150x150.png",
    "/safari-pinned-tab.svg"
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
          .filter(name => name.includes("dobrywebdev") && name !== CACHE_NAME)
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