self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll(["old town.mp3","marsh.jpg","logo512.png","logo192.png","style.jpg"])
        })
    )
});
self.addEventListener("fetch",e=>{
    console.log(`Fetch request for:${e.request.url}`);
})