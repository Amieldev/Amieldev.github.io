self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll(["logo192.png"])
        })
    )
});
self.addEventListener("fetch",e=>{
    console.log(`Fetch request for:${e.request.url}`);
})