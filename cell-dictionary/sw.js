self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll(["logo512.png","logo192.png","bg.js"])
        })
    )
});
self.addEventListener("fetch",e=>{
    console.log(`Fetch request for:${e.request.url}`);
})