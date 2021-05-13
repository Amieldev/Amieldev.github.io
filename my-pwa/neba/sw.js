self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll(["https://amieldev.github.io/my-pwa/neba/","astra.mp3","marsh.jpg","style.jpg","style.css"]);
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