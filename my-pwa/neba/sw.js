const cacheName = 'static-v1';

self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open(cacheName).then(cache=>{
            return cache.addAll(["https://amieldev.github.io/my-pwa/neba/","astra.mp3","marsh.jpg","style.jpg","style.css"]);
        })
    )
});


self.addEventListener('activate', async (event) => {
    const existingCaches = await caches.keys();
    const invalidCaches = existingCaches.filter(c => c !== cacheName);
    await Promise.all(invalidCaches.map(ic => caches.delete(ic)));

    // do whatever else you need to...

});

self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
})