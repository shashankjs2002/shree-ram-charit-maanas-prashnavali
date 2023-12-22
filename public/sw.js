let cacheData = "prashanavali";

this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/bundle.js',
                '/',
                'manifest.json',
                'favicon.ico',
                'logo192.png',
                '/ws',

                '/static/js/787.2c48817c.chunk.js',
                '/static/js/787.2c48817c.chunk.js.map',
                '/static/js/main.d7f334e7.js',
                '/static/js/main.d7f334e7.js.LICENSE.txt',
                '/static/js/main.d7f334e7.js.map',
                '/static/css/main.98b8690a.css',
                '/static/css/main.98b8690a.css.map',
                


            
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
