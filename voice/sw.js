var staticCacheName="v0";
var staticCacheFiles=[]

self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open(staticCacheName).then(cache=>{
            return cache.addAll(staticCacheFiles);
        })
    )
});


self.addEventListener("activate",e=>{
    e.waitUntil(
        caches.keys.then(cachNames=>{
            return Promise.all(
                cachNames.map(cache=>{
                    if(cache!==staticCacheName){
                        return caches.delete(cache);
                    }
                })
            )
        })
    )
})


self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
})