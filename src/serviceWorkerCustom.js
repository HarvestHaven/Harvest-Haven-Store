if ('function' === typeof importScripts) {

    importScripts(
        'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js',
        'https://cdnjs.cloudflare.com/ajax/libs/localforage/1.7.3/localforage.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js',
        'https://cdn.jsdelivr.net/npm/ytdl-core@0.29.1/lib/index.min.js',
        'testscript.js'
    );

    // : Create an instance if it doesn't already exist.
    self.videos = localforage.createInstance({
        name: 'hh-video', storeName: 'data',
        description: 'this is a store'
    });

    // console.log('aXios', axios)

    if (workbox) {

        console.log(`Yay! Workbox is loaded 🎉`);

        // : Quicky aquire updated service workers and dangerously destroy existing ones.
        self.addEventListener('activate', event => {
            event.waitUntil(clients.claim());
        });
        self.addEventListener('message', (event) => {
            if (event.data && event.data.type === 'SKIP_WAITING') {
                self.skipWaiting();
            }
        });

        // Sample Route:
        workbox.routing.registerRoute(
            new RegExp('https://jsonplaceholder.typicode.com/users'),
            workbox.strategies.cacheFirst()
        );

        // // Trying out Express as a route:
        // workbox.routing.registerRoute(
        //     new RegExp('localhost:4000/download'),
        //     workbox.strategies.cacheFirst()
        // )

        // workbox.routing.registerRoute(

        // )

        workbox.routing.registerRoute(
            new RegExp('/videos/'),
            // new RegExp('https://www.youtube.com'),
            async ({ url, event }) => {
                // const videoURL = url.href.match(/https:\/\/www\.youtube\.com\/watch\?v=[A-z\d]{11}/g)[0]
                // const videoID = url.search.match(/\?v=[A-z\d]{11}/g)[0].slice(3)
                // console.log(`Video URL: ${videoURL}`)
                // console.log(`Video ID: ${videoID}`)
                const videoUrl = url.href
                self.videos.setItem(`${videoUrl}}`, videoUrl)
                    .then((value) => {
                        console.log(`Downloading ${videoUrl} from Youtube...`)
                        console.log('<3')
                        hello();
                        testscript.hello();

                        let stream = ytdl(videoUrl, {
                            format: 'mp4'
                        });
                        console.log('stream: ', stream);

                        // console.log(`Set [${videoUrl}] as '${value}'`)
                    })
                    .catch(function (err) {
                        console.error(`Video ${videoUrl} Failed to Download`, err)
                    });

                return new Response({ text: `Returned [${videoUrl}]` });
            }
        )

        // : Loads route, vender, and extension based bundles
        workbox.precaching.precacheAndRoute([]);

    } else {

        // : TODO - Does this even need a fallback, or not worth the effort?
        console.log(`Boo! Workbox didn't load 😬`);

    }

}
