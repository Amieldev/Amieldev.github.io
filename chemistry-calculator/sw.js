self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll(["logo512.png"]);
        })
    )
});
self.addEventListener("fetch",e=>{
    console.log("Fetched!");
})