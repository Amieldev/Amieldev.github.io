self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll(["index.html","atom btn2.png","nuclie.jpg","nuclie-m.jpg","calculator.html","calculator.css","calculator.js","style.css","logo512.png","logo192.png"])
        })
    )
});
self.addEventListener("fetch",e=>{
    console.log(`Fetch request for:${e.request.url}`);
})