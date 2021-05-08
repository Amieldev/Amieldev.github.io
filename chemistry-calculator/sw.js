self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll(["https://amieldev.github.io/index.html","index.html","atom btn2.png","nuclie.jpg","nuclie-m.jpg","calculator.html","calculator.css","calculator.js","style.css","back.png","hum.png","setting.html","privacy.html"]);
        })
    )
});
self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
})