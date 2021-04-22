self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll(["marsh.jpg","logo192.png","style.jpg","style.css"])
        })
    )
});
self.addEventListener("fetch",e=>{
    console.log(`Fetch request for:${e.request.url}`);
})