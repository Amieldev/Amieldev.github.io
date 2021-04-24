if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("sw.js").then(register =>{
        console.log("Sw registered")
    }).catch(error =>{
        console.log(error)
    });
}