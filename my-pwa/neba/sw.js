const staticCacheName = 'static-v2';

self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open(staticCacheName).then(cache=>{
            return cache.addAll(["https://amieldev.github.io/my-pwa/neba/","astra.mp3","marsh.jpg","style.jpg","style.css"]);
        })
    )
});


self.addEventListener('activate',(evt) => {
  evt.waitUntil(
      caches.keys().then(keys=>{
        return Promise.all(keys
            .filter(key=>key!==staticCacheName)
            .map(key=>caches.delete(key))    
        )
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