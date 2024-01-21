

let cacheData = "prashanavali";

// async function getFilesMatchingPattern(pattern) {
//     return new Promise((resolve, reject) => {
//       glob(pattern, (error, files) => {
//         if (error) {
//           reject(error);
//         } else {
//           resolve(files);
//         }
//       });
//     });
//   }

  let files = [
    '/static/js/bundle.js',
    '/',
    'manifest.json',
    'favicon.ico',
    'logo192.png',
    '/ws',

    '/static/js/787.2c48817c.chunk.js',
    '/static/js/787.2c48817c.chunk.js.map',
    '/static/js/main.d7f334e7.js',
    '/static/js/main.166c7c14.js',
    '/static/js/main.dc10a7ae.js',
    '/static/js/main.d7f334e7.js.LICENSE.txt',
    '/static/js/main.d7f334e7.js.map',
    '/static/css/main.98b8690a.css',
    '/static/css/main.98b8690a.css.map',
]

// async function addNewFiles() {
//     try {
//     const jsFiles = await getFilesMatchingPattern('/static/js/*.js');
//     const cssFiles = await getFilesMatchingPattern('/static/css/*.css');
//     files = [...files,...jsFiles, ...cssFiles]
        
        
//     } catch (error) {
//         console.log(error)
//     }
// }
// let files = [
//     '/static/js/bundle.js',
//     '/',
//     'manifest.json',
//     'favicon.ico',
//     'logo192.png',
//     '/ws',

//     '/static/js/787.2c48817c.chunk.js',
//     '/static/js/787.2c48817c.chunk.js.map',
//     '/static/js/main.d7f334e7.js',
//     '/static/js/main.166c7c14.js',
//     '/static/js/main.dc10a7ae.js',
//     '/static/js/main.d7f334e7.js.LICENSE.txt',
//     '/static/js/main.d7f334e7.js.map',
//     '/static/css/main.98b8690a.css',
//     '/static/css/main.98b8690a.css.map',
// ]
this.addEventListener("install",async  (event) => {
    // await addNewFiles()

    event.waitUntil(
        caches.open(cacheData).then(async (cache) => {
            // cache.addAll([
            //     '/static/js/bundle.js',
            //     '/',
            //     'manifest.json',
            //     'favicon.ico',
            //     'logo192.png',
            //     '/ws',

            //     '/static/js/787.2c48817c.chunk.js',
            //     '/static/js/787.2c48817c.chunk.js.map',
            //     '/static/js/main.d7f334e7.js',
            //     '/static/js/main.d7f334e7.js.LICENSE.txt',
            //     '/static/js/main.d7f334e7.js.map',
            //     '/static/css/main.98b8690a.css',
            //     '/static/css/main.98b8690a.css.map',            
            // ])

            for (let i of files) {
                try {
                  let ok = await cache.add(i);
                  console.log('file: ',i,' is addded. ',  ok)
                  
                } catch (err) {
                  console.warn('sw: cache.add',i);
                }
              }
        
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
