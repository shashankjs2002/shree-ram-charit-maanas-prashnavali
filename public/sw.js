let cacheData = "prashanavali";

this.addEventListener("install", (event) => {
    event.waitUnitil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/bundle.js',
                '/',
                'manifest.json',
                'favicon.ico',
                'logo192.png',
                '/ws',
                // 'https://cdn.tailwindcss.com/3.4.0'
            ])
        })
    )
})

this.addEventListener("fetch", (event) => {
    if(!navigator.onLine){

        event.respondWith(
            caches.match(event.request).then((result) => {
                if(result) return result;
            })
            )
        }
})
