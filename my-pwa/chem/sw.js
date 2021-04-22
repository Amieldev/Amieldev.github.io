self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll(["logo192.png","calculator.html","nuclie.jpg","nuclie-m.jpg","atom btn2.png","calculator.js","calculator.css","style.css"])
        })
    )
});
self.addEventListener("fetch",e=>{
    console.log(`Fetch request for:${e.request.url}`);
})